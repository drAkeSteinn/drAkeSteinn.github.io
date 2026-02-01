# Web de Planes de Desarrollo y Mantenimiento

Esta es una web HTML estática e independiente para mostrar los planes de desarrollo y mantenimiento de la Plataforma de Análisis de Competencia.

## 📁 Estructura del Proyecto

```
pricing-web/
├── index.html              # Archivo HTML principal
├── assets/
│   ├── css/
│   │   └── styles.css     # Hoja de estilos
│   └── js/
│       └── main.js        # Funcionalidad JavaScript
└── README.md              # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Abrir directamente en el navegador
Simplemente haz doble clic en el archivo `index.html` y se abrirá en tu navegador predeterminado.

### Opción 2: Usar un servidor local (recomendado)
Si tienes Python instalado:

```bash
# Python 3
python -m http.server 8000

# O con Python 2
python -m SimpleHTTPServer 8000
```

Si tienes Node.js instalado:

```bash
# Instalar un servidor simple
npm install -g serve

# Iniciar servidor
serve .
```

Luego abre tu navegador y visita: `http://localhost:8000`

## ✨ Características

- **Dos pestañas**: Planes de Desarrollo y Planes de Mantenimiento
- **Tres planes por categoría**: Básico, Profesional (Recomendado) y Premium
- **Diseño responsivo**: Se adapta a móviles, tablets y escritorio
- **Modo oscuro**: Soporte automático para preferencia del sistema
- **Animaciones suaves**: Transiciones fluidas entre tabs
- **Íconos SVG**: Usando la librería Lucide Icons

## 📂 Archivos

### index.html
Estructura HTML semántica con:
- Header con título
- Navegación por tabs
- Cards de planes
- Sección de notas importantes
- Footer

### assets/css/styles.css
Estilos CSS completos con:
- Variables CSS para colores
- Diseño responsive
- Animaciones CSS
- Soporte para modo oscuro
- Estilos para cards, tabs y badges

### assets/js/main.js
Funcionalidad JavaScript:
- Inicialización de íconos Lucide
- Lógica de tabs (switch entre planes de desarrollo y mantenimiento)

## 🎨 Personalización

### Cambiar colores
Edita las variables CSS en `assets/css/styles.css`:

```css
:root {
    --primary: #0a0a0a;          /* Color principal */
    --secondary: #f5f5f5;        /* Color secundario */
    --accent: #10b981;           /* Color de acento */
    /* ... más variables */
}
```

### Modificar contenido
Edita directamente en `index.html`:
- Títulos y precios
- Listas de características
- Texto de descripciones

## 🌐 Compatibilidad

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Navegadores móviles modernos

## 📦 Dependencias Externas

La web utiliza librerías vía CDN:
- [Lucide Icons](https://lucide.dev/) - Íconos SVG

No requiere npm, bundlers o build steps.

## 📝 Licencia

Este proyecto es para uso interno de la empresa.
