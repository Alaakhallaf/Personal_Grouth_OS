# Personal Growth OS — System Architecture

## Architecture Overview
Built on Angular Standalone Architecture with domain-driven feature folder layout.

```text
src/app/
├── core/         # Data services, local storage engines, app models
├── shared/       # Shared UI buttons, components, layout frames
├── features/     # Feature components (Dashboard, Goals, Planner, Habits, etc.)
└── app.routes.ts # Application routes configuration