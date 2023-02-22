# Conceptos básicos

Git es un sistema de control de versiones distribuido diseñado para manejar cualquier tipo de proyecto, ya sea grande o pequeño, con velocidad y eficiencia.

Git realiza esto haciendo "snapshots" del proyecto, con ello permite versionar y administrar nuestro código fuente.

## Versionamiento.

### ¿Qué es el control de versiones?

El control de versiones es un sistema que guarda todos los cambios realizados en uno o varios archivos, a lo largo del tiempo.

### ¿Por qué usar Git?

- Se puede trabajar sin conexión.
- ¡Colaborar con otros es sencillo!.
- Derivar, crear ramas del proyecto ( Branching) es fácil.
- Combinar ( Merging)
- Git es rápido.
- Git es flexible.

## Arquitectura de Git.


### Repositorio

Un repositorio es un conjunto de archivos, directorios, registros, cambios (commits), y encabezados (heads). Imagina que un repositorio es una clase, y que sus atributos otorgan acceso al historial del elemento, además de otras cosas.

Un repositorio esta compuesto por la carpeta .git y un "árbol de trabajo".

### Directorio .git (componentes del repositorio)

El directorio .git contiene todas las configuraciones, registros, branches, HEAD y mas.

### Directorio de trabajo (componentes del repositorio)

Es básicamente los directorios y archivos dentro del repositorio. La mayoría de las veces se le llama "directorio de trabajo".

### Índice (componentes del directorio .git)

El índice es el área de inicio en git. Es básicamente la capa que separa el directorio de trabajo del repositorio en git. Esto otorga a los desarrolladores más poder sobre lo que se envía y se recibe del repositorio.

### Commit (cambios)

Un commit es una captura de un conjunto de cambios, o modificaciones hechas en el directorio de trabajo. Por ejemplo, si se añaden 5 archivos, se eliminan 2, estos cambios se almacenarán en un commit (captura). Este commit puede ser o no ser enviado ("pusheado") hacia un repositorio.

### Branch (rama)

Un "branch", es escencialmente un apuntador hacia el último commit (cambio registrado) que se ha realizado. A medida que se realizan más commits, este apuntador se actualizará automaticamente hacia el ultimo commit.

### "HEAD" y "head" (componentes del directorio .git)

"HEAD" es un apuntador hacia la rama (branch) que se esta utilizando. Un repositorio solo puede tener un HEAD activo. En cambio "head", es un apuntador a cualquier commit realizado, un repositorio puede tener cualquier número de "heads".