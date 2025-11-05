## 🚀 Angular Projects

This repository contains Angular applications built with modular architecture for better scalability and maintainability.

### 🛠️ Creating a New Angular Application with Modules

To scaffold a new Angular project using modules (non-standalone components) and without routing, run the following command:

```bash
ng new your-project-name --no-standalone --routing=false
```

### 📦 What This Command Does

- `--no-standalone`: Ensures the app uses traditional NgModules instead of standalone components.
- `--routing=false`: Skips the setup of Angular Router, ideal for simple apps or when routing is added manually later.

### 📁 Project Structure Overview

Once created, your project will include:

- `src/app/app.module.ts`: Main module file
- `src/app/app.component.ts`: Root component
- `angular.json`: Configuration for build and development
- `package.json`: Dependency and script definitions

### ✅ Next Steps

After creating your project, you can:

1. Generate components using:
   ```bash
   ng generate component component-name
   ```
2. Serve the app locally:
   ```bash
   ng serve
   ```
3. Add routing later with:
   ```bash
   ng generate module app-routing --flat --module=app
   ```
