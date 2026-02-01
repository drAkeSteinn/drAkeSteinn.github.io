#!/bin/bash

# Script para iniciar la web de pricing

echo "🚀 Iniciando servidor local para la web de Pricing..."
echo ""

# Verificar si Python 3 está disponible
if command -v python3 &> /dev/null; then
    echo "✓ Python 3 encontrado - iniciando servidor en el puerto 8000"
    echo ""
    echo "📱 Abre tu navegador en: http://localhost:8000"
    echo ""
    echo "🛑 Presiona Ctrl+C para detener el servidor"
    echo ""
    cd "$(dirname "$0")"
    python3 -m http.server 8000
# Verificar si Python 2 está disponible
elif command -v python &> /dev/null; then
    echo "✓ Python 2 encontrado - iniciando servidor en el puerto 8000"
    echo ""
    echo "📱 Abre tu navegador en: http://localhost:8000"
    echo ""
    echo "🛑 Presiona Ctrl+C para detener el servidor"
    echo ""
    cd "$(dirname "$0")"
    python -m SimpleHTTPServer 8000
else
    echo "❌ No se encontró Python instalado."
    echo ""
    echo "Puedes abrir el archivo index.html directamente en tu navegador,"
    echo "o instalar Python desde https://www.python.org/downloads/"
    exit 1
fi
