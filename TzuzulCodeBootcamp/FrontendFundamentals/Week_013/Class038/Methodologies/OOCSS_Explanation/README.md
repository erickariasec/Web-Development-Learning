# METODOLOGÍAS CSS
Sistemas preestablecidos, formales y bien documentados que te ayudan a escribir, organizar código mantenible y escalable.

![OOCSS-title](img/OOCSS-Title.jpeg "OOCSS title")

## OOCSS (Object-Oriented CSS)
Hojas de estilo en cascada orientadas a objetos, se preocupa por la conversión de sus estilos CSS normales a clases reutilizables.

### Estructura y piel separadas
La estructura se refiere a estilos invisibles aplicados a elementos (ancho, altura, margen, relleno), mientras que la piel es los estilos visibles (colores, fuentes, sombras).

![OOCSS-separation-structure-skin](img/OOCSS-separation-structure-skin.jpeg "OOCSS separation structure skin") 

Los archivos de estructura y diseño son archivos separados. Estructura significa: "ancho, alto, relleno, margen, posición". Diseño significa: "borde, color, fuente, fondo". Los archivos de diseño y los archivos de estructura deben estar separados.

#### Incorrecto
![wrong-OOCSS](img/wrong-OOCSS.png "Wrong OOCSS")

#### Correcto  
![correct-OOCSS](img/correct-OOCSS.png "Correct OOCSS")

#### HTML
![HTML1-OOCSS](img/HTML1-OOCSS.png "HTML1 OOCSS")

![OOCSS-separation-container-from-content](img/OOCSS-separation-container-from-content.jpeg "OOCSS separation container from content") 

Este principio sugiere que los child-sellectors deben usarse menos.  

Si el elemento `<h2>` se usa en más de un lugar en el sitio, entonces el uso de selectores secundarios viola la regla OOCSS y conduce a la duplicación del código.
