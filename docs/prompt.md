# Refactorización de validaciones en NestJS con Zod en entorno Monorepo

**Rol:** Actúa como un Ingeniero de Software Experto en TypeScript, NestJS, arquitecturas Monorepo y ecosistema de herramientas de Node.js.

## 📖 Contexto

En este proyecto trabajamos con una arquitectura monorepo. Tenemos un paquete llamado `@airdash/api` que actuará como una librería compartida para las diferentes aplicaciones del ecosistema.

El propósito principal de `@airdash/api` será centralizar los esquemas (schemas) para la validación de datos y la definición de las interfaces (inputs de entrada y salida) de nuestros servicios. Es un requerimiento técnico fundamental que todos estos esquemas se implementen y validen utilizando la librería **Zod**.

## 🎯 Objetivos de la Tarea

Por favor, asísteme con las siguientes tareas explicando tu enfoque paso a paso:

1. **Implementar Zod:** Refactoriza el código y las estructuras actuales en `@airdash/api` para que todas las validaciones de datos (entradas y salidas) utilicen exclusivamente Zod.
2. **Optimizar la experiencia de desarrollo (DX):** Configura el monorepo para que las aplicaciones (como `@apps/api`) puedan consumir e importar los esquemas de `@airdash/api` directamente en tiempo real, sin requerir un proceso de compilación (`build`) previo del paquete compartido.
3. **Auditar la nomenclatura:** Analiza si el nombre actual del paquete (`@airdash/api`) comunica claramente su propósito. Si consideras que hay alternativas con mejor semántica (por ejemplo: `@airdash/schemas`, `@airdash/contracts`, etc.), propónlas y justifica tu recomendación.
