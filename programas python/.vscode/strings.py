mystr= "hola mundo"

print(dir(mystr)) #al ejecutar se pueden ver todas las acciones que puedo hacer con el string

print(mystr.upper()) #imprime hola pero en mayuscula, esto se debe al upper
print(mystr.lower()) #imprime en minuscula
print(mystr.swapcase()) #invierte mayusculas y minusculas si se usaron
print(mystr.capitalize()) #primera letra de cada palabra en mayuscula
print(mystr.replace('hola', 'pudrete')) #reemplaza mundo por pudrete
print(mystr.count('l')) #cuenta cuantas veces tengo escrita l en el mensaje
print(mystr.startswith('hola')) #muestra si el mensaje empieza con hola, caso correcto: true, caso contrario false
print(mystr.endswith('mundo')) #detecta si termina con mundo, true coincide, false no coincide
print(mystr.split(',')) #separa al texto, en este caso por una ,
print(mystr.find('o')) #cuantas veces encuentra la o para este caso
print(len(mystr)) #indica la cantidad de caracteres, la longitud
print(mystr.index('e')) #indica la posicion de e, arranca en 0 con la h para este caso
print(mystr.isnumeric()) #indica si es un numero
print(mystr.isalpha()) #indica si es alfanumerico
print(mystr[4]) #que hay en la posicion 4
print("te saludo" + mystr) #el + une el dato en este caso lo contenido por mystr
print(f"te saludo {mystr}") #muestra el mismo mensaje que antes, es necesario usar la f para que interprete lo que esta entre llaves
print("te saludo {0}".format(mystr)) #como los anteriores
