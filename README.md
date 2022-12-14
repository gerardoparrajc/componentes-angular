# Componentes
## Data binding

El data binding en Angular es la forma en que se vincula el modelo de datos de una aplicación con su vista. Cuando se utiliza el data binding en Angular, se establece una conexión entre el código de la aplicación y los elementos de la interfaz de usuario, lo que permite que los cambios en el modelo de datos se reflejen automáticamente en la vista y viceversa. De esta manera, se facilita la manipulación de los datos en la aplicación y se mejora la experiencia del usuario al interactuar con la interfaz de usuario.

Existen tres formas de implementar el data binding: 

- El enlazado o binding mediante una propiedad, asignando el valor a la propiedad utilizando la notación `[nombre-propiedad]`. Cuando se incluye la propiedad entre corchetes (`[]`), el valor que se pasa es un objeto. Si se quiere pasar un valor primitivo (*cadena de texto, número, booleano,...*), se utiliza la propiedad sin estos corchetes.
- El enlazado o binding mediante un evento, asignando una función que maneje el evento indicado utilizando la notación `(nombre-evento)`
- La interpolación, la cual permite mostrar una propiedad del compomente en la plantilla del mismo, mediante la notación `{{nombre-propiedad}}`

En el archivo **app.component.html** pueden verse estas tres formas.
