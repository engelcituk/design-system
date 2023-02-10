# Selectores
Se usa para **seleccionar** los elementos HTML que querenos diseñar

## Selector de elementos
Selecciona elementos HTML en funcion del nombre del elemento

```css
h2 {color: gray }
```

## Agrupación de selectores
Supongamos que queremos que distintos elementos tengan un mismo estilo.

```css
h2 { color: gray }
p { color: gray }
```
De esta manera es más sencilla y te ahorras líneas de CSS

```css
h2, p { color: gray }
```

## Selector universal

El selector universal (*) selecciona todos los elementos del HTML

```css
*{
    margin: 0;
 }
```
Actúa como un 'comodín' que coincide con cualquier elemento.

## Selector de clase

Es la forma más común de aplicar estilos. Para que los selectores de clase funcionen y asociar los estilos de esta clase a algún elemento, simplemente debemos de agregar el atributo class a ese elemento.

```html
<p class="content"> Estamos aprendiendo css</p>
```

Ahora agregamos los estilos de la clase

```css
.content{
    color: pink;
    font-size: 1.5rem;
}
```

::: tip
No olvides colocar el punto (.) antes de la clase CSS
:::

En el HTML es posible agregar más de una clase a un elemento.

```html
<p class="content contenedor">La inspiración desbloquea el futuro. </p>
<h2 class="content contenedor">Toma riesgos y prepárate para fallar</h2>
```

Aquí se agregará la fuente bold unicamente al elemento **h2** con clase **content**, no así al **p**. :point_down:


```css
.content{
    color: pink;
    font-size: 1.5rem;
}

h2.content{
    font-weight: bold;
}
```

## Selector ID

De cierta forma el selector por **ID** es similar al selector de clase, excepto por:
- Al selector ID lo precede un hash (#)
- El id puede utilizarse en un único elemento del HTML (las clases pueden ser asignadas/reusadas a varios elementos).

```html
<p id="quote">
    Un desarrollador de software no implementa código
    limpio con un látigo atrás
</p>
```
:point_down:

```css
#quote{
    background-color: yellow;
    color: #ffffff;
}
```

## Selectores descendientes

Ahora vamos a entender como funciona la estructura de un documento HTML, para así comprender la relación de elementos **padre-hijo**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mis apuntes</title>
</head>
<body>
    <h1>Apuntes<em>sobre css</em> </h1>
    <p> Apuntes <em>disponibles</em> </p>
    <ol>
        <li>JavaScript</li>
        <li>VueJs</li>
        <li>Python</li>
    </ol>
    <p>
        Recomienda temas en 
        <a href="#">enlace a social network</a>
    </p>
</body>
</html>
```