demo=[1, "caca", 1.4, True]
colores=['rojo', 'azul']
lista_numeros=list((1,2,3,4)) #crear lista
print(lista_numeros)
R=list(range(1, 10))
print(R)
print(dir(colores))
print(colores(1)) #muestra azul en pantalla
print('verde' in colores) #revisa si verde esta en la lista colores
colores[1]='amarillo' #cambio datos de la lista, azul pasa a ser amarillo
colores.append('violet') #agrego elemntos a la lista con append, toma solo 1 argumento para agregar de esta forma. Hacerlo dupla para agregar mas de 1
colores.extend(['violeta','amarillo']) #agrega la dupla como si fueran elementos de 1 lista originalmente, al igual que append solo puede agregar 1 elemnto sino se hace con dupla
colores.insert(1, 'violeta') #coloca a violeta despues de rojo, se usa la funcion escrita en esta linea, no las anteriores
colores.pop() #saca el ultimo elemento de colores
colores.remove('verde') #saca verde unicamente
colores.clear() #saca todo lo contenido en colores
colores.sort(reverse=True) #ordena al reves los elementos de colores







