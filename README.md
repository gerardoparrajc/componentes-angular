# Componentes
## Respondiendo a eventos

Un componente **hijo** puede enviar datos a su componente **padre** mediante el envío de eventos. Junto con estos eventos, puede enviar los datos que requiera.

Desde el componente que envía los datos, se crea una propiedad de la clase `EventEmitter` que estará declarada con el decorador `@Output`. Cuando se produce la situación necesaria para realizar el envío, se llamará al método `emit()` de la propiedad de salida. Como parámetro a este método se puede incluir los datos que se quieran enviar al componente padre.

Desde el componente padre, se capturará el evento haciendo uso de la notación `(nombre-evento)` que vimos en el apartado de Data binding. El valor que se pasa a este atributo que indica que se va a manejar el evento es la función o método del componente que realizará dicho manejo. Desde aquí, se pueden capturar los datos enviados por el componente hijo.

En el componente **BotonComponent** se implementa el envío de datos mediante un evento y en el componente **BotonesComponent** se realiza la captura y manejo del evento.

