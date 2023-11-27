import time
import obd

# Função para realizar a coleta de dados
def coletar_tensao_bateria(total_tempo_segundos, intervalo_segundos):
    # Inicialize a conexão OBD-II
    connection = obd.OBD('COM7', baudrate=115200, fast=False)

    # Inicialize uma lista para armazenar os resultados
    resultados = []

    # Calcule o número total de iterações com base no intervalo e tempo total
    total_iteracoes = int(total_tempo_segundos / intervalo_segundos)

    # Loop para coletar dados a cada meio segundo durante o tempo especificado
    for _ in range(total_iteracoes):
        # Obtenha a tensão da bateria (ELM_VOLTAGE)
        resposta = connection.query(obd.commands.ELM_VOLTAGE)

        # Verifique se a resposta não é nula (None)
        if resposta is not None:
            # Adicione o valor à lista de resultados
            resultados.append(resposta.value.magnitude)
        else:
            resultados.append(None)  # Se houver um erro, adicione None à lista

        # Aguarde o intervalo especificado antes da próxima leitura
        time.sleep(intervalo_segundos)

    # Feche a conexão OBD-II
    connection.close()

    return resultados

# Configuração para coletar dados por 15 segundos a cada meio segundo
tempo_total_segundos = 15
intervalo_segundos = 0.5

# Realize a coleta de dados
dados_coletados = coletar_tensao_bateria(tempo_total_segundos, intervalo_segundos)

# Exiba os resultados
for i, valor in enumerate(dados_coletados):
    print(f"Leitura {i + 1}: {valor} V")
