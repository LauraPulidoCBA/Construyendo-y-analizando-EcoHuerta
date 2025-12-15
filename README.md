# EcoHuerta – Mini Proyecto en React

Este proyecto fue desarrollado como parte de la actividad **“React en acción - Construyendo y analizando EcoHuerta”**.
El objetivo es comprender los fundamentos de React, su estructura por componentes, el manejo del estado y el flujo de datos.

---

##  Tecnologías usadas

- React
- Vite
- Tailwind CSS
- JavaScript (ES6)

---

1. ¿Cómo se aplica el flujo de datos unidireccional en este proyecto?

## 🔁 Flujo de datos unidireccional

    En el proyecto EcoHuerta, los datos fluyen **de arriba hacia abajo**. El componente principal `App` pasa props a los componentes hijos (`Header`, `PlantCard`, etc.). Los hijos no modifican directamente los datos del padre, solo muestran la información que reciben. El estado se maneja localmente en componentes como `Counter` y `FilterablePlantList`, y cada cambio provoca un nuevo renderizado sin manipular el DOM directamente.

---

2. ¿Qué papel cumple el estado (useState) en los diferentes componentes y cómo influye en el renderizado?

## ⚙️ Uso del estado (`useState`)

    El hook `useState` se utiliza en: - **Counter.jsx** → controla el número de plantas cultivadas. - **FilterablePlantList.jsx** → maneja el texto de búsqueda y filtra dinámicamente las plantas. Cada vez que el estado cambia, React vuelve a renderizar el componente automáticamente, manteniendo la interfaz sincronizada.

---

3. ¿Por qué es importante separar la UI en componentes reutilizables y puros?

## 🧩 Importancia de los componentes reutilizables y puros

    Separar la interfaz en componentes pequeños facilita: - Mejor organización del código. - Fácil mantenimiento. - Reutilización en distintas partes de la aplicación. Los componentes puros devuelven siempre la misma interfaz para las mismas props, lo que hace el comportamiento más predecible y confiable.

---

4. ¿Qué ventajas aporta el uso de JSX declarativo frente al enfoque imperativo del DOM tradicional?

##  Ventajas del JSX declarativo

    JSX permite describir cómo debe verse la interfaz (UI) según el estado actual.

    A diferencia del DOM tradicional, no es necesario manipular elementos manualmente, lo que reduce errores y hace el código más legible.

    JSX permite escribir HTML dentro de JavaScript. En React no se manipula el DOM manualmente, sino que se describe cómo debe verse la interfaz según el estado actual. Cuando el estado cambia, React se encarga de actualizar la UI automáticamente.

---


5. ¿Cómo podrías mejorar la app agregando tres componentes nuevos sin romper la coherencia del diseño ni la lógica?

## 🌱 Componentes nuevos agregados
    Para mejorar la aplicación y mantener coherencia en diseño y lógica, se añadieron tres componentes: 
    
    - **Navbar.jsx** → Barra de navegación superior con menú desplegable. 
    
    - **PlantCard.jsx** → Tarjeta individual que muestra nombre, imagen y descripción de cada planta. 
    
    - **Footer.jsx** → Pie de página con créditos y contacto. 
    
    Además, se implementó **FilterablePlantList.jsx**, que permite buscar plantas por nombre y muestra resultados dinámicamente.

---

## Conclusión 

    Este proyecto aplica los conceptos fundamentales de React: 
    - Componentes funcionales y reutilizables. 

    - Flujo de datos unidireccional. 
    
    - Estado con `useState`. 
    
    - JSX declarativo. 
    
    - Organización modular del código con TailwindCSS.









