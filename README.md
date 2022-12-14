# Componentes
## Pasando datos al componente

Un componente **padre** puede pasar datos a su componente **hijo**. Esto lo hemos visto en el apartado de **Data binding**, con la utilización de `[nombre-propiedad]` en la plantilla.

En el componente, la propiedad de entrada se declara utilizando el decorador `@Input` en la propiedad que queramos que actue de esa forma. Un ejemplo se puede ver en la implementación del componente **BotonComponent** donde se declara una propiedad de este tipo. Posteriormente, en la plantilla del componente **BotonesComponent** se ha dado valor a esta propiedad. En este caso, al ser una cadena de texto, se utiliza el nombre de la propiedad sin los corchetes. En el caso de que se le pasara una variable, se utilizaría la forma con corchetes.

