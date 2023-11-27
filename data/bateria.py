import obd

# Crie uma conexão OBD-II
connection = obd.OBD('COM7')

# Obtenha a tensão da bateria
battery_voltage = connection.query(obd.commands.ELM_VOLTAGE)

# Obtenha o estado de carga da bateria (SOC)
# soc = connection.query(obd.commands.SOC)

# Obtenha a tensão do alternador
#alternator_voltage = connection.query(obd.commands.ALTERNATOR_VOLTAGE)

# Obtenha a temperatura da bateria
# battery_temperature = connection.query(obd.commands.BATTERY_TEMP)


# Exiba os resultados
print("Tensão da Bateria:", battery_voltage)
# print("Estado de Carga (SOC):", soc)
# print("Tensão do Alternador:", alternator_voltage)
# print("Temperatura da Bateria:", battery_temperature)

# Feche a conexão
connection.close()
