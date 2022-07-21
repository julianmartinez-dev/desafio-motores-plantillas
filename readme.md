# Desafio Motores de Plantillas

## Consigna
 
Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:
Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
Ambas páginas contarán con un botón que redirija a la otra.

- Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por pug.
- Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por ejs.
- Por escrito, indicar cuál de los tres motores de plantillas prefieres para tu proyecto y por qué.

## Aspectos a incluir en el entregable:
Realizar las plantillas correspondientes que permitan recorrer el array de productos y representarlo en forma de tabla dinámica, siendo sus cabeceras el nombre de producto, el precio y su foto (la foto se mostrará como un imágen en la tabla)
En el caso de no encontrarse datos, mostrar el mensaje: 'No hay productos'.

# Detalles de implementación

El proyecto está divido en cuatro ramas:

- **main**, que contiene el código básico de la aplicación.
- **vista-handlebars**, que contiene el código de la vista de la aplicación utilizando handlebars.
- **vista-pug**, que contiene el código de la vista de la aplicación utilizando pug.
- **vista-ejs**, que contiene el código de la vista de la aplicación utilizando ejs.

## Para correr el proyecto seguir los siguintes pasos:

1) - Clonar el repositorio del proyecto.
2) - Instalar dependencias con 
```
npm install
```
3) - Para correr el proyecto en el navegador sin necesidad de hacer el build de la aplicación, ejecutar:
```
npm run dev
```
4) - En el navegador el servidor debe estar corriendo en el puerto 4000.
```
http://localhost:4000
```

5) - Para elegir entre las diferentes vistas, ejecutar:
```
git checkout vista-handlebars
git checkout vista-pug
git checkout vista-ejs
```

# Conclusión

Podemos ver en el proyecto la implementación de diferentes vistas cada una con un motor de plantillas diferente, algunos requieren de una configuración adicional (como en el caso de **handlebars**) pero a cambio de un codigo mas sencillo y parecido a html con una sintaxis adicional muy facil de entender e implementar. <br>
- **Pug** es el motor con el me senti mas comodo de trabajar y me gusto mucho la sintaxis que tiene la implementación del tabulado para establecer elementos padres e hijos hace que el codigo sea mas sencillo y mas fácil de entender.

Por ultimo el motor de plantillas que menos me gustó fue **ejs**, la sintaxis hace el codigo sea dificil de entender y no es facil de implementar.