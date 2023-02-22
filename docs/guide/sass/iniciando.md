# Introducción a Sass

Sass es un procesador CSS.

Un preprocesador CSS es una herramienta que nos permite generar, de manera automática, hojas de estilo, añadiéndoles características que no tiene CSS, y que son propias de los lenguajes de programación, como pueden ser variables, funciones, selectores anidados, herencia, etcétera.

Estas características de los procesadores nos permiten, además, que el CSS que se genera sea más fácil de mantener y más reutilizable. Dentro de todos los preprocesadores CSS, el más utilizado es Sass.

Existen dos lenguajes para trabajar con Sass:

Scss: que es un lenguaje muy parecido al propio CSS, extendiendo su funcionalidad.
Sass: que difiere más del estándar en cuanto a sintaxis.

En esta guía se decanta por la primera.

## Instalación

Para usar sass se recomienda tener instalado [nodejs ](https://nodejs.org/en/) en el equipo, en su version LTS. 

Para continuar podemos crear un directorio, llamemosle **sass**, en ella un archivo **index.html**.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sass</title>
</head>
<body>
    
</body>
</html>
```

Realmente la idea no es trabajar con HTML, sino aprender a usar con sass para generar el css final. Esto es, compilar el archivo Sass a Css.

Recordar que si ya se tiene instalado node, basta con tipear:

```sh 
$ tsc --version
```

Esto nos indicará la versión de node instalada. Esto significa que podemos seguir con el siguiente paso.

```sh 
$ npm init
```

El comando init se utiliza para inicializar un proyecto. Cuando ejecutas este comando, crea un archivo package.json.

Al ejecutar npm init dentro de nuestro directorio, se te pedirá que proporciones cierta información sobre el proyecto que estás inicializando. Esta información incluye el nombre del proyecto, el tipo de licencia, la versión, etc.

Puedes ignorar lo que te pide dando enter a todo. Al final se obtiene un package.json como este:

```json
{
  "name": "sass",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```
Nuestro directorio tendría una estructura como la siguiente:

```
├─ index.html
└─ package.json
```

Procedemos a instalar sass, en nuestro proyecto.

```sh
$ npm install --save-dev sass
```

Esto modfica el archivo **package.json**, se genera la carpeta node_modules.

```
.
├─ node_modules
├─ index.html
├─ package-lock.json
└─ package.json
```

Tambien instalamos sass globalmente

```sh
$ npm install -g sass
```

## Breve uso de SASS
Añadimos un carpeta sass donde pondremos todos los archivos sass, más un **index.scss**, los archivos sass tienen la extension **.scss**

```
├─ node_modules/
├─ sass
│  └─index.scss
├─ index.html
├─ package-lock.json
└─ package.json
```

El contenido de **index.css** para iniciar con sass:

```sass
body{
    font-family: 'Arial';
}
```

Para transformar de sass a css, desde la terminal

```sh
sass --watch sass:css 
```
El comando anterior en la terminal, estará pendiente de cualquier cambio a los ficheros sass.

Lo que le decimos aqui a SASS es que vigile todo lo que hay en el directorio sass (porque igual puede hacerlo indicandole un archivo en especifico), lo compile y lo mande a la carpeta **css**. Esto hará el proceso de manera automática. Quedando así nuestro arbol de ficheros. 

```
├─ css/
│  ├─index.css
│  └─index.css.map
├─ node_modules/
├─ sass
│  └─index.scss
├─ index.html
├─ package-lock.json
└─ package.json
```

Donde lo que hay en la carpeta **css** fue generado de manera automatica. De nuestro lado solo debemos escribir los estilos con SASS. Al final del día lo que hay dentro de css es la que serán importadas en nuestros html, dado que el código SCSS no es compatible con los navegadores, por lo que tenemos que usar el código compilado.

Con ctrl + c detenemos el watch de la terminal.