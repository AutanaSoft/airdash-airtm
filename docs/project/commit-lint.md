# Configuración de Conventional Commits y Commitlint

**Rol:** Actúa como un Ingeniero de Software experto en integraciones de herramientas para Node.js y Git.

## 🎯 Objetivo de la Tarea

Necesitamos estandarizar nuestros mensajes de commit para que sean descriptivos, fáciles de entender y sigan la convención "Conventional Commits". Actualmente no contamos con estas herramientas configuradas en el proyecto. Tu objetivo es instalar las dependencias necesarias, configurar los hooks de Git y crear una Skill de IA para automatizar este proceso en el futuro.

Da los siguientes pasos en orden secuencial:

## 🛠️ Paso 1: Instalación de Dependencias

Instala en el entorno de desarrollo las últimas versiones de las siguientes dependencias:

- `husky`
- `lint-staged`
- `@commitlint/cli` (commitlint)
- `@commitlint/config-conventional`

## ⚙️ Paso 2: Configuración del Proyecto

Realiza las siguientes configuraciones:

1. **Husky:**
   - Inicializa Husky en el proyecto y habilita correctamente los hooks de `pre-commit` y `pre-push`.
   - Asegúrate de que el hook de `pre-commit` ejecute `lint-staged` y el hook `commit-msg` ejecute `commitlint`.
2. **Commitlint:**
   - Crea un archivo `commitlint.config.js`.
   - Asegúrate de agregar el archivo `commitlint.config.js` al `.eslintignore` (o a los ignores correspondientes de ESLint).
   - Extiende la configuración de `@commitlint/config-conventional`.
   - Agrega/Modifica las siguientes reglas obligatorias:
     - El `scope` debe ser obligatorio.
     - `max-length` debe estar configurado en 100 caracteres por línea (incluyendo header, body y footer).

3. **Lint-staged:**
   - Crea un archivo `lint-staged.config.js`.
   - Asegúrate también de agregar `lint-staged.config.js` a la lista de ignores de ESLint.
   - Configúralo para que ejecute los linters o formateadores aplicables antes de hacer commit.

## 🤖 Paso 3: Crear Skill para Mensajes de Commit

Una vez configurado lo anterior, utiliza tu habilidad/skill interna llamada "skill-creator" para generar una nueva Skill con las siguientes características:

- **Propósito:** Generar mensajes de commit automáticos que sigan nuestra convención establecida y las reglas descritas en el Paso 2 de este documento.
- **Activador (Trigger):** La skill debe activarse de forma automática cuando el usuario solicite "generar", "hacer" o "crear un mensaje de commit".
