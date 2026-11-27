# Aqualian Piscinas · Web corporativa

Web corporativa de **Aqualian Piscinas**, empresa de diseño, construcción, reformas y mantenimiento de piscinas a medida, con sede en Burjassot (Valencia). Está pensada para arquitectos, constructoras y profesionales del sector.

🔗 **Producción:** [aqualian.vercel.app](https://aqualian.vercel.app)

---

## Tabla de contenidos

- [Stack tecnológico](#stack-tecnológico)
- [Estado del proyecto](#estado-del-proyecto)
- [Requisitos](#requisitos)
- [Puesta en marcha](#puesta-en-marcha)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Rutas](#rutas)
- [Arquitectura y convenciones](#arquitectura-y-convenciones)
- [Despliegue](#despliegue)
- [Versión original (HTML estático)](#versión-original-html-estático)

---

## Stack tecnológico

| Área | Tecnología |
| --- | --- |
| Framework UI | React 19 |
| Bundler / dev server | Vite 8 con `@vitejs/plugin-react` |
| Enrutado | React Router DOM 7 (`BrowserRouter`) |
| Animaciones | GSAP, Motion |
| Gráficos WebGL | OGL (fondo de olas del hero) |
| Iconos | Bootstrap Icons, Hugeicons |
| Calidad de código | ESLint 10 (reglas recomendadas, React Hooks y React Refresh) |
| Hosting | Vercel |

Módulo ES (`"type": "module"`), JavaScript con JSX (sin TypeScript) y CSS plano por componente.

## Estado del proyecto

Migración en curso desde una web estática en HTML/CSS/JS (carpeta `original/`) a una SPA en React.

| Sección | Estado |
| --- | --- |
| Inicio (`/`) | ✅ Implementada: hero, ventajas, proyectos destacados y llamada a la acción |
| Header y Footer | ✅ Implementados |
| Nosotros (`/nosotros`) | 🚧 Vista creada, contenido pendiente |
| Servicios (`/servicios`) | 🚧 Vista creada, contenido pendiente |
| Proyectos (`/proyectos`) | 🚧 Vista creada, contenido pendiente (el filtrado del portfolio existe en la versión original) |
| Contacto (`/contacto`) | 🚧 Vista creada, contenido pendiente |

## Estructura del repositorio

```text
aqualian/
├── index.html               # Punto de entrada HTML de la SPA
├── vite.config.js           # Configuración de Vite (plugin de React)
├── eslint.config.js         # Configuración de ESLint
├── package.json
├── public/                  # Recursos estáticos servidos tal cual (favicon.svg, icons.svg)
├── src/
│   ├── main.jsx             # Arranque de React
│   ├── App.jsx              # Enrutador y definición de rutas
│   ├── index.css            # Estilos globales (tipografía Inter, layout base)
│   ├── views/               # Una vista por página
│   ├── components/          # Componentes reutilizables
│   ├── css/                 # Hoja de estilos por componente
│   └── assets/img/          # Imágenes y logos importados desde el código
└── original/                # Web estática anterior (HTML, CSS y JS), conservada como referencia
```

## Rutas

Definidas en `src/App.jsx`:

| Ruta | Vista |
| --- | --- |
| `/` | `InicioView` |
| `/nosotros` | `NosotrosView` |
| `/servicios` | `ServiciosView` |
| `/proyectos` | `ProyectosView` |
| `/contacto` | `ContactoView` |

## Arquitectura y convenciones

- **Vistas** (`src/views/`): componen la página con `Header`, un `<main className="pagina__contenido">` y `Footer`.
- **Componentes de negocio**: `Header`, `Hero`, `Ventajas`, `Proyectos`, `CtaContacto` y `Footer`.
- **Componentes visuales reutilizables**: `PillNav`, `GradientWaves`, `BlurText`, `ShinyText`, `SpecularButton`, `MagicBento`, `TiltedCard`, `StarBorder`, `Magnet`, `Noise` y `GlassIcons`. Son componentes de efectos y animación parametrizables mediante props.
- **Navegación**: `PillNav` recibe un `linkComponent` que enlaza con `Link` de React Router, de modo que la navegación no recarga la página.
- **Estilos**: CSS plano, un archivo por componente en `src/css/`, con nomenclatura tipo BEM (`hero__titulo`, `ventajas__etiqueta`…). Los textos y clases están en español.
- **Paleta**: azul marino `#06172E` como fondo, cian `#2FD0E8` como color de acento.
- **Tipografía**: Inter, cargada desde Google Fonts.
- **Idioma del sitio**: español (`lang="es-ES"`).

## Versión original (HTML estático)

La carpeta `original/` contiene la web anterior, con las páginas `index`, `nosotros`, `servicios`, `proyectos` y `contacto`, su hoja de estilos (`assets/css/estilos.css`) y scripts propios (`assets/js/script.js` y `assets/js/filtros.js`, este último con el filtrado del portfolio de proyectos). Se mantiene como referencia de contenido y diseño durante la migración y no forma parte de la compilación de Vite.

## Contacto

- 📍 Burjassot, Valencia
- ✉️ [info@aqualian.com](mailto:info@aqualian.com)
- 📸 [Instagram: @aqualianpiscinas](https://www.instagram.com/aqualianpiscinas/)
