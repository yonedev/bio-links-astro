![links.yone.dev](https://res.cloudinary.com/dcllw95id/images/v1689187983/yonedev/Yonedev-Github/Yonedev-Github.png?_i=AA)

# Bio Links Astro

Una versión DIY de Linktree, realizada con el framework Astro, para compartir redes sociales y otros enlaces de interés de mi marca personal. Eres libre de usar este repositorio para aprender o para realizar un fork y hacer tu propia versión de Bio Links Astro

<p>
   <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Astro&color=FF5D01&logo=Astro&logoColor=FFFFFF&label=" />&nbsp;&nbsp;
   <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Tailwind+CSS&color=222222&logo=Tailwind+CSS&logoColor=06B6D4&label=" />&nbsp;&nbsp;
</p>

## 🆕 Configuración inicial para desplegar un proyecto

- Realizar un fork del repositositorio.
- Duplicar el archivo ./src/config/content.yml.sample y renombrar a ./src/config/content.yml. Desde aquí podrás editar todo el contenido del sitio web. Existe la posibilidad de cargar contenido desde un JSON en remoto usando [JSONBin](https://jsonbin.io/), pero por ahora solo está implementado para los enlaces y falta el resto de contenido
- Duplicar el archivo ./.env.sample y renombrar a ./.env. Hay unas cuantas variables de entorno para configurar tu proyecto. He desplegabo la app en [Cloudflare Pages](https://dash.cloudflare.com/) en ese caso se podría usar las variables de entorno del servicio y no crear un archivo .env.
- Editar los datos de ./public/manifest.json
- Personalizar los favicon que están en ./src/assets/favicons/
- [Pack de iconos.](https://icon-sets.iconify.design/mdi/)

## 🧞 Comandos

| Command                   | Action                               |
| :------------------------ | :----------------------------------- |
| `npm install`             | Instalar dependecias                 |
| `npm run dev`             | Iniciar server en `localhost:3000`   |
| `npm run build`           | Compilar para producción `./dist/`   |
| `npm run preview`         | Preview en local antes de desplegar  |
| `npm run astro ...`       | Astro CLI `astro add`, `astro check` |
| `npm run astro -- --help` | Ayuda Astro CLI                      |

## ⚠️ TODO para futuras versiones

- Los enlaces se podrán alimentar desde una base de datos para facilitar la edición de personal no técnico.
- Integración con Custom Post Type de Wordpress.
- Añadir imágenes asociadas a los enlaces.
- JSON remoto para todo el contenido
