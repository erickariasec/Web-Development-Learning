# METODOLOGÍAS CSS
Sistemas preestablecidos, formales y bien documentados que te ayudan a escribir, organizar código mantenible y escalable

## BEM (Bloque, Elemento, Modificador)

![BEM-naming-convention](img/BEM-naming-conventions.png "BEM Naming Convention")

### Bloque
Son nuestros contenedores más grandes que a su vez contienen elementos u otros bloques.

### Elementos
Forman parte de un bloque, normalmente son los botones, textos, imágenes etc.

### Modificadores
Se usan para establecer estilos diferentes a un mismo bloque o elemento.

![BEM-use-explanation](img/BEM-use-explanation.png "BEM Use Explanation")  

```
[bloque]__[elemento]
[bloque]--[modificador]
[elemento]--[modificador]
[bloque]__[elemento]--[modificador]
```
