# Arquitectas del ciberespacio

Proyecto Web para CIFO La Violeta como ejercicio de maquetación avanzada utilizando HTML, CSS moderno y JS básico.

## Análisis

**Objetivo**
El objetivo del proyecto es dar visibilidad de la importancia de las mujeres en la tecnología, además de ser un espacio de reconocimiento, memoria e inspiración en el marco de las conmemoraciones del 08/Mar por la "Día del la mujer".

**Público objetivo (target)**
Público en general

**Análisis de la competencia**
Webs similares: ???

**Propuesta de valor**
Responde a esto: ???

> Por la buena visibilidad y armonía. ???

Puede ser:

- Más rápido y cercano. ???

**Contenido y estructura**
_index.html_: Página principal. Declaración de intenciones. Presentación de las mujeres más representativas. Enlaces a los artículos relacionados.
_articulos.html_: Artículos sobre temas aún pendientes para el reconocimiento de la importancia de la mujer en es aspecto tecnológico.
_entrevistas.html_: Sección de entrevistas a mujeres destacadas del ámbito.
_mujeres.html_: Timeline con hitos de sus aportes y galería flip-card sobre aportes mas destacados.
_politica.html_: Información legal general sobre la aplicación del reglamento general de protección de datos y la cesión de derechos de imagen y voz.

**Aspectos técnicos básicos**

- Usamos Figma, HTML5, CSS3 y JS; además nos apoyamos del versionamiento y acceso al repositorio compartido del git y github. Como herramienta de desarrollo, usamos el IDE de Visual Studio Code.

## 📌 Descripción

**"Arquitectas del Ciberespacio"** Es una web responsive, usando HTML, CSS y JS, sin el apoyo de frameworks ni CMS.

_HTML_:

- Todos los elementos requeridos para la estrutura de una web actual

_CSS_:

- Layout con Grid y Flexbox
- Tipografía fluida con clamp()
- Transiciones y transformaciones
- Scroll Snap
- Estados interactivos (hover, focus)
- Enfoque Mobile First

_JS_:

- Captura del elementos con document.querySelector() y document.querySelectorAll()
- Método classList.toggle() para añadir/quitar clases CSS que determinaban visiblidad de los elementos HTML
- Métodos AddEventListener() para "escuchar" eventos "click" generados por el usuarios.

---

## 🎯 Objetivos técnicos del proyecto

- Construir una web completamente responsive.
- Aplicar buenas prácticas de estructura HTML semántica.
- Utilizar CSS moderno para crear layouts complejos.
- Implementar microinteracciones visuales con JS.
- Crear y mantener un código limpio y organizado.

---

## 🛠 Tecnologías utilizadas

- Figma Software online (mockups de la web)
- HTML5
- CSS3
  - Variables de CSS (tamaños de font y colores -modo claro y oscuro-)
  - Flexbox
  - CSS Grid
  - clamp()
  - Scroll Snap
  - Transiciones
  - Transformaciones
- JS
- Github/Git
- Github link: [arquitectas-del-ciberespacio](https://github.com/NzingaMbande/arquitectas-del-ciberespacio)

---

## 📂 Estructura del proyecto

![estructura-proyecto](screenshots/estructura-proyecto.jpg)

La organización de la estructura del proyecto intenta separar por componentes los recursos utilizados; teniendo en la **raiz** del proyecto los .html que corresponden a cada página de la web, los **assets** que contienen las imágenes que se muestran, la carpeta **css** para el archivo de los estilos, la carpera **fonts** para la tipografía, **js** para el script de javascript propio del proyecto, y la carpeta **screenshot** para las imágenes requeridas para la documentación.

## 📱 Responsive Design

El proyecto está desarrollado con enfoque **Mobile First**

Breakpoints utilizados:

- Mobile: por defecto.
- Tablet: min-width: 768px
- Desktop: min-width: 1024px

Se han utilizado unidades relativas (`rem`, `%`, `vw`) y tipografía fluida mediante `clamp()` para garantizar escalabilidad.

---

## 🎨 Decisiones técnicas relevantes

- Por qué se eligió Grid para el layout principal:
  Para establecer una estructura general aplicable a cada pagina web que compone el proyecto.
- En qué partes se utilizó Flexbox y por qué.
  Se utilizó para los componentes que contengan elementos, a fin que puedan distribuirse y ordernarse según el diseño acordado.
- Cómo se resolvió el scroll horizontal con Scroll Snap: ???
- Cómo se gestionaron las transformaciones y transiciones: mayoritariamente con pseudoelementos CSS
- Cómo se abordó la accesibilidad básica (si lo han hecho): ???

---

## ⚠️ Retos encontrados

- Buscar contenido que no se quede en informar; si no que aporte para la visibilización y reconocimiento de la importancia de la mujer en la tecnología.
- Conocimientos básicos de JS para manejar eventos y lograr dinamismo en la web.

**Qué problemas surgieron.**

- Dominio del Git y Github
- Falta de tiempo
- Entendimiento y coordinación grupal

**Qué soluciones se aplicaron.**

_Sobre git y github_: Tecnologías difíciles de dominar para estudiantes noveles, pero imprenscindibles por las caracteristicas del proyecto. Asesoría con el profesor del curso y apoyo grupal.

_Sobre falta de tiempo_: Sobre todo porque durante algunos días las clases no se detuvieron y el tiempo para avanzar y coordinar se vió afectado. Cada miembro intentó aprovechar las franjas de clase destinadas al avance del proyecto. Aparte, se tuvo que dedicar tiempo personal fuera de los horarios de estudio.

_Entendimiento y coordinación grupal_: Inicialmente, fue difícil lograr el entendimiento entre los miembros del grupo. Cada uno quería aportar con sus ideas y/o experiencias, por lo que más de una vez fue necesario una intervención de la Project Manager (Mary Ramos) y del profesor (Manel Plaza) para lograr concensos.

**Qué se aprendió técnicamente.**

Un aporte básico de JS puede lograr efectos que hacen mas vistosa la web. Las herramientas que HTML5 y CSS3 ofrecen estan en constante evolución y es fácil encontrar nuevas formas de mostrar una pagina html.

## 🚀 Mejoras futuras

- Integración con backend para implementar suscripciones
- Buscar a futuro hacer un proyecto con mayor visibilidad y evolutivo.
- Aprender a subir un proyecto web al internet, desde las opciones gratuitas hasta las mas profesionales.
- Mejora de accesibilidad.

---

## 👨‍💻 Autor

[arquitectas-del-ciberespacio](https://github.com/NzingaMbande/arquitectas-del-ciberespacio)

Nombre de los alumnos:

- Mary Ramos (Project Manager)
- Rocio Goyoneche
- Antón Koval
- Arnau Pardal
- Franco Calderón

Profesor del Curso:
Manel Plaza

Curso:
Confección y Publicación Web Año: 2026

---
## 🔎 Extra importante

* Incluir capturas de pantalla.
* Incluir Lighthouse básico (pruebas de rendimiento y SEO básico).
* Inlcuir checklist de validación.


Ejemplo:

## 📊 Validación

- HTML validado con W3C ✔
- CSS validado ✔
- Lighthouse Performance: 74
- Lighthouse Accessibility: 90
- SEO 100


=======


