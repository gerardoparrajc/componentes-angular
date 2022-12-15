# Componentes
## Módulos

Los módulos nos permite agrupar componentes que estén relacionados entre sí para aprovechar su reutilización, entre otras cosas.

Los módulos permiten declarar componentes y exportarlos para que otros módulos puedan hacer uso de ellos mediante su importación.

En este ejemplo, se crea un módulo desde la linea de comandos con `ng generate module <nombre-modulo>` y declarará los componentes **BotonesComponent** y **BotonComponent**. Finalmente, se importará en el módulo **AppModule** para que se puedan seguir utilizando estos componentes desde **AppComponent**.
