import obd

# Inicializa a conexão com o adaptador OBD-II (substitua 'COMX' pelo nome da porta do seu adaptador)
connection = obd.OBD('COM7')

# Função para obter informações de um comando OBD
def get_obd_info(command):
    response = connection.query(command)
    if response.is_null():
        return "N/A"
    return response.value.magnitude

# Obtém o valor do RPM do motor
# rpm = get_obd_info(obd.commands.RPM)

# Bank 1 - Sensor 1 Voltage			
#bateria = get_obd_info(obd.commands.DTC_02_B1S1)

# Get DTCs from the current/last driving cycle			
# bateria = get_obd_info(obd.commands.GET_CURRENT_DTC)

# O2: Bank 1 - Sensor 2 Voltage FUNCIONOU retorn 0.02
# bateria = get_obd_info(obd.commands.O2_B1S2)

# O2: Bank 1 - Sensor 1 Voltagem FUNCIONOU retorn 0.85	
bateria = get_obd_info(obd.commands.ELM_VOLTAGE)

# DTC O2: Bank 1 - Sensor 2 Voltage FUNCIONOU retorn 0.09 
# bateria = get_obd_info(obd.commands.DTC_O2_B1S2)

#print(f'RPM: {rpm} RPM')

print(f'Bateria: {bateria} volt')

# Feche a conexão OBD-II
connection.close()