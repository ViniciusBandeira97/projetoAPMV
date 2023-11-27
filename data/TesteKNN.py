import time
import obd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
import joblib  # Importa joblib para salvar/carregar o modelo

# Função para realizar a coleta de dados
def coletar_dados(total_tempo_segundos, intervalo_segundos):
    # Inicialize a conexão OBD-II
    connection = obd.OBD('COM7', baudrate=115200, fast=False)

    # Inicialize uma lista para armazenar os resultados
    resultados = []

    # Calcule o número total de iterações com base no intervalo e tempo total
    total_iteracoes = int(total_tempo_segundos / intervalo_segundos)

    # Loop para coletar dados a cada meio segundo durante o tempo especificado
    for _ in range(total_iteracoes):
        # Obter a tensão da bateria por PID (ELM_VOLTAGE)
        resposta = connection.query(obd.commands.ELM_VOLTAGE)

        # Verifique se a resposta não é nula (None)
        if not resposta.is_null():
            # Adicione o valor à lista de resultados
            resultados.append(resposta.value.magnitude)
        else:
            resultados.append(None)
        
        # Aguarde o intervalo especificado antes da próxima leitura
        time.sleep(intervalo_segundos)

    # Feche a conexão OBD-II
    connection.close()
    return resultados

# Função para rotular os dados com base nas faixas de voltagem
def rotular_voltagem(voltagem):
    if 10 <= voltagem <= 12.8:
        return "Muito bom"
    elif 7.7 <= voltagem <= 9.9:
        return "Regular"
    elif 4 <= voltagem <= 7.6:
        return "Necessário troca"
    else:
        return "Desconhecido"

# Função para treinar e salvar o modelo
def treinar_e_salvar_modelo(X_treino, y_treino, training_model_batery):
    knn_modelo = KNeighborsClassifier(n_neighbors=3)
    knn_modelo.fit(X_treino, y_treino)
    joblib.dump(knn_modelo, training_model_batery)
    print(f"Modelo treinado e salvo como {training_model_batery}")

# Função para carregar o modelo treinado
def carregar_modelo(training_model_batery):
    return joblib.load(training_model_batery)

# Função para mapear os resultados para categorias
def mapear_resultados(previsoes):
    mapeamento = {
        "Muito bom": (10, 12.8),
        "Regular": (7.7, 9.9),
        "Necessário troca": (4.0, 7.6),
        "Desconhecido": (None, None)  # Adicione um mapeamento padrão se necessário
    }
    categorias = []

    for previsto_str in previsoes:
        encontrado = False
        for categoria, (min_valor, max_valor) in mapeamento.items():
            if previsto_str == categoria or (min_valor is not None and max_valor is not None and min_valor <= float(previsto_str) <= max_valor):
                categorias.append(categoria)
                encontrado = True
                break

        # Adicione verificação para 'Desconhecido'
        if not encontrado and previsto_str == 'Desconhecido':
            categorias.append('Desconhecido')
            
    return categorias

# Coleta config.Total de 10 Seg + 0.1 seg de intervalo = totalizando 100 registros
tempo_total_segundos = 10
intervalo_segundos = 0.05

# Realize a coleta de dados
data_storage = coletar_dados(tempo_total_segundos, intervalo_segundos)

# Rotule os dados com base nas faixas de voltagem
rotulos = [rotular_voltagem(voltagem) for voltagem in data_storage]

# Converta os dados e rótulos para numpy arrays
X = np.array(data_storage).reshape(-1, 1)
y = np.array(rotulos)

# Divida os dados em conjuntos de treinamento e teste
X_treino, X_teste, y_treino, y_teste = train_test_split(X, y, test_size=0.3, random_state=42)

# Verifique se o modelo treinado já existe
training_model_batery = "modelo_knn_tensao_bateria.joblib"
try:
    knn_modelo = carregar_modelo(training_model_batery)
    print("Modelo carregado com sucesso.")
except FileNotFoundError:
    treinar_e_salvar_modelo(X_treino, y_treino, training_model_batery)
    knn_modelo = carregar_modelo(training_model_batery)
    
# Faça previsões nos dados de teste
previsoes = knn_modelo.predict(X_teste)

# Mapeie os resultados para categorias específicas
categorias_previstas = mapear_resultados(previsoes)
categorias_reais = [rotular_voltagem(voltagem) for voltagem in X_teste.flatten()]


# Avalie a precisão do modelo (apenas para ilustração)
precisao = accuracy_score(y_teste, previsoes)
print(f"Precisão do modelo K-NN: {precisao * 100:.2f}%")

# Imprima ou exiba os resultados
for previsto, real, valor in zip(categorias_previstas, categorias_reais, X_teste.flatten()):
    print(f"Previsto: {previsto} | Real: {real} | Valor: {valor}")


# Exiba a matriz de confusão
matriz_confusao = confusion_matrix(y_teste, previsoes)
print("Matriz de Confusão:")
print(matriz_confusao)

# Exiba recall, precisão e F1-Score para cada classe
relatorio_classificacao = classification_report(y_teste, previsoes)
print("Relatório de Classificação:")
print(relatorio_classificacao)

# Exiba os resultados
for i, valor in enumerate(data_storage):
    print(f"Leitura {i + 1}: {valor} V")