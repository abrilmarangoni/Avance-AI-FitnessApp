#!/bin/bash

# Script para conectar el repositorio con GitHub y subir los cambios

cd "$(dirname "$0")"

echo "🔧 Inicializando repositorio Git..."
git init

echo "📦 Agregando archivos..."
git add .

echo "💾 Haciendo commit de los cambios..."
git commit -m "Reducir tamaño del logo en móvil de 50x50 a 35x35"

echo "🔗 Conectando con GitHub..."
git remote add origin https://github.com/abrilmarangoni/Avance-AI-FitnessApp.git 2>/dev/null || git remote set-url origin https://github.com/abrilmarangoni/Avance-AI-FitnessApp.git

echo "📤 Obteniendo cambios del remoto..."
git pull origin main --allow-unrelated-histories || git pull origin master --allow-unrelated-histories || echo "No se pudo hacer pull, continuando..."

echo "🚀 Subiendo cambios a GitHub..."
git branch -M main
git push -u origin main

echo "✅ ¡Listo! Los cambios han sido subidos a GitHub."

