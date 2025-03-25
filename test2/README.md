# 🧪 Evaluación Técnica - CRUD con Next.js y API REST

Este proyecto es una aplicación web construida con **Next.js 14 (App Router)**, que interactúa con la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/). Permite **listar**, **crear** y **editar publicaciones** usando peticiones `GET`, `POST` y `PATCH`.

Incluye un diseño responsive con **TailwindCSS**, una capa de servicios unificada para consumo de API y soporte para ejecución en contenedores Docker.

---

## 🚀 Instrucciones de instalación

1. Clona el repositorio:

```bash
git clone https://github.com/RoinerRocha/Implementacion-y-Consumo-de-API-REST-con-Next.js.git
cd Implementacion-y-Consumo-de-API-REST-con-Next.js
```

2. Instala dependencias:

```bash
npm install
```

3. Ejecuta en modo desarrollo:

```bash
npm run dev
```

4. Abre el navegador en:

```
http://localhost:3000
```

---

## 🛠️ Comandos disponibles

| Comando                         | Descripción                              |
|---------------------------------|------------------------------------------|
| `npm run dev`                   | Inicia la app en modo desarrollo         |
| `npm run build`                 | Compila la app para producción           |
| `npm start`                     | Inicia la app compilada                  |
| `docker-compose up --build`     | Ejecuta la aplicación con Docker         |

---

## ⚙️ Decisiones técnicas tomadas

- ✅ Uso de **App Router** de Next.js.
- ✅ **TailwindCSS** para diseño rápido y responsivo.
- ✅ Capa de servicios centralizada en `services/api.js`.
- ✅ Peticiones `fetch` con manejo de errores por red y status HTTP.
- ✅ Estructura de componentes desacoplada (`PostForm`, `EditForm`).
- ✅ Contenedores Docker para ejecución portable.

---

## ✨ Mejoras propuestas

- Agregar funcionalidad de eliminar publicaciones (`DELETE`).
- Validaciones con librerías como `react-hook-form` o `zod`.
- Notificaciones visuales con `react-toastify` o `react-hot-toast`.

---

## 🐳 Instrucciones para ejecutar con Docker

1. Ejecutar desde terminal:

```bash
docker-compose up --build
```

2. Abrir en el navegador:

```
http://localhost:3000
```

---

## 👨‍💻 Autor

**Roiner Rocha**  
Correo: rochabozaroiner@gmail.com
GitHub: https://github.com/RoinerRocha
