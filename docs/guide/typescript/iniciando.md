# Introducción a typescript

## Instalación

TypeScript se puede instalar a través de tres rutas de instalación según cómo pretenda usarlo: un módulo npm, un paquete NuGet o una extensión de Visual Studio.

Para instalar typescript con npm basta ejecutar el siguiente comando. 

```sh
$ npm install -g typescript
```
 Se puede verificar la versión de typescript, si la consola indica la versión, significa que la instalación se hizo de manera exitosa, esto permitirá usar typescript en cualquier directorio.

```sh 
$ tsc --version
```

## Compilar un archivo TS	

Para compilar un archivo TS, podemos empezar con crear una carpeta con el nombre typescript (o el que quieras), y la abrimos con un editor de código como visual studio code, dentro de la carpeta creamos un archivo con el nombre **index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScrupt</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
```

Creamos el archivo **app.ts** cuyo contendo

```ts
console.log("hola mundo");
```
Para compilar un archivo ts ejecutamos el comando

```sh 
$ tsc app
```

::: tip
No hay necesidad de poner al nombre del archivo el **.ts**. Esto creará un archivo nuevo con el nombre: **app.js**
:::

En resumen los navegadores web no pueden correr el código TypeScript directamente, necesita ser traducido a su versión JavaScript para que el navegador web lo pueda interpretar. Mediante el comando **tsc** lo convertimos de TypeScript a JavaScript.

## Modo Observador - Watch Mode	

En TypeScript existe lo que se conoce como Modo Observador, quiere decir que TypeScript va a estar pendiente de cualquier cambio que suceda en los archivos con extensiones .ts y automáticamente lo va a compilar a su versión de JavaScript.

```sh 
$ tsc nombre-del-archivo -w 
```

o 

```sh 
$ tsc app -w 
```
Esto va iniciar un servicio que va a estar escuchando cualquier cambio. Para cancelar el observador de TypeScript presiona **control** + **C**

::: tip
Hasta ahora la traducción que hace TypeScript a su versión JavaScript es a solo un archivo.
Para hacerlo a varios archivos a la vez, implica hacer uso de un **tsconfig**
:::

## Inicializar el proyecto de TypeScript - tsconfig	
<!-- 
::: code-group
```Instalación
npm install -g typescript
```

```Versión 
tsc --version
```
::: -->