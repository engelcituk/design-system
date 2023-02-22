# Variables

Las variables de Sass son sencillas: asignas un valor a un nombre que empieza por **$**, y luego puedes referirte a ese nombre en lugar de al propio valor. Son una de las herramientas más útiles que Sass pone sobre la mesa. Las variables permiten reducir la repetición, hacer cálculos matemáticos complejos, configurar bibliotecas y mucho más.

Una declaración de variable se parece mucho a una declaración de propiedad, se escribe

```sass
$variable : expresión;
```
> Hay que tener en cuenta que si se escribe mal algo en sass, el comando **sass --watch sass:css**  al estar pendiente de los cambios, producirá un error al tratar de generar el css. 

A diferencia de una propiedad, que sólo puede declararse en una regla de estilo, las variables pueden declararse donde quieras. Para utilizar una variable, basta con incluirla en un valor.



::: code-group
```sass
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}
```

```css 
.alert {
  border: 1px solid rgba(198, 83, 140, 0.88);
}
```
:::

::: tip
Las variables en sass son diferentes a las **custom properties** que son propias de css. Las variables sass al compilarse a css, estas no aparecen en el css final ya que su estructura no es nativa de css.
Las variables no requieren que se use **var** como si lo es cuando se está manejando las custom properties. Las variables sass pueden de tipo global o local.
:::