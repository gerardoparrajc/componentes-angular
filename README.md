# Componentes
## Anidado de componentes

El anidado de compomentes es algo tan básico como construir nuestra aplicación. Ya que todo son componentes, a partir de AppComponent, para añadir nuevos componentes dentro del mismo, se añadirán etiquetas con el selector de los componentes que hayamos creado. Esta forma de incluir en la plantilla de un componente otro componente es el anidado de componentes.

De este modo, llamaremos componente **padre** al componente que contiene a otro componente, el componente **hijo**.

En nuestro ejemplo, **AppComponent** contiene anidado a **BotonesComponent** y éste a su vez, contendrá anidadas varias instancias del componente **BotonComponent**.
