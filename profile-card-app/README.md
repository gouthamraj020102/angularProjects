# 📇 ProfileCardApp

**ProfileCardApp** is a beginner-friendly Angular application that displays a user profile card. It was generated using the [Angular CLI](https://github.com/angular/angular-cli) version **17.2.1**, following a modular architecture without routing.

---

## 🛠️ Project Setup

To create this project, run the following command:

```bash
ng new "profile-card-app" --no-standalone --routing=false
cd profile-card-app
```

## 🚀 Getting Started

### 1. Generate a Component

Create a new component named `profile-card`:

```bash
ng generate component profile-card
```

### 2. Serve the App Locally

Start the development server:

```bash
ng serve
```

Then open your browser and navigate to:

```
http://localhost:4200/
```

The app will automatically reload when you make changes to the source files.

---

## ✅ Week 1 Angular Fundamentals Covered

### 1. **Intro to Angular**
- Built a single-page application using Angular framework.
- Demonstrated understanding of Angular architecture and component-based design.

### 2. **Project Setup**
- Initialized project using Angular CLI.
- Organized files into components, assets, and shared models.
- Used `TeamMember` model to structure data.

### 3. **Angular CLI**
- Used CLI to generate components (`ProfileCardComponent`).
- Followed Angular CLI conventions for file structure and naming.

### 4. **Components**
- Created `ProfileCardComponent` to encapsulate logic and UI.
- Used `@Component` decorator with selector, template, and style references.
- Managed internal state (`teamMembers`, `page`) and exposed computed properties (`visibleMembers`).

### 5. **Templates**
- Used Angular template syntax:
  - Interpolation: `{{title}}`, `{{member.name}}`
  - Property binding: `[src]`, `[alt]`
  - Event binding: `(click)="nextGroup()"`, `(click)="prevGroup()"`
  - Structural directive: `*ngFor` to loop through team members.

### 6. **Data Binding**
- **Interpolation**: Displayed dynamic text using `{{ }}`.
- **Property Binding**: Bound image sources and alt text.
- **Event Binding**: Navigated between member groups using click events.
- **Class Binding**: Used `[class.disabled]` to conditionally style navigation icons.

### 7. **Directives**
- Used built-in structural directive `*ngFor` for dynamic rendering.
- Used attribute directive `[class.disabled]` for conditional styling.

---