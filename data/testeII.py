import obd
import time

# Função para verificar o status da ignição
def verificar_ignicao(connection):
    comando = obd.commands.IGNITION_MONITOR
    response = connection.query(comando)
    return response.value

# Inicializa a conexão com o adaptador OBD-II (substitua 'COMX' pelo nome da porta do seu adaptador)
connection = obd.OBD('COMX')

# Aguarda até que a ignição esteja ligada
while True:
    status_ignicao = verificar_ignicao(connection)
    if status_ignicao == 'ON':
        break
    time.sleep(1)

print("Ignição ligada. Iniciando contagem...")

# Defina o tempo total em segundos (1 minuto)
tempo_total = 60

# Defina o intervalo de coleta em segundos (1 segundo)
intervalo = 1

# Inicialize uma variável para manter o controle do tempo decorrido
tempo_decorrido = 0

# Loop enquanto o tempo decorrido for menor que o tempo total
while tempo_decorrido < tempo_total:
    # Coloque aqui a lógica para coletar os dados
    print("Coletando dados...")
    
    # Espere o intervalo de tempo especificado
    time.sleep(intervalo)
    
    # Atualize o tempo decorrido
    tempo_decorrido += intervalo

print("Coleta de dados concluída.")
