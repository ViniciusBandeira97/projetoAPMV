import obd

# Inicialize uma conexão OBD-II
connection = obd.OBD('COM5')

# Consulte a lista de todos os PIDs disponíveis no veículo
supported_pids = connection.supported_commands

print("Lista de PIDs suportados e disponíveis no veículo:")
for command in supported_pids:
    print(f"{command.name} ;; ({command.command}) ;; {command.desc}")

# Feche a conexão OBD-II
connection.close()