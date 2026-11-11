# Personal Growth OS — Development Guidelines

## Core Rules
- **Architecture**: Angular Standalone Components (No NgModules).
- **State Management**: Angular Signals for UI & local state; RxJS for async streams.
- **Styling**: SCSS, mobile-first responsive design.
- **Code Quality**: Strict TypeScript enabled. Zero `any` types.
- **Persistence**: Local-first storage (IndexedDB in later sprints).

## Essential Commands
- `ng s -o`: Runs local development server on `http://localhost:4200`.  
- `npm run build`: Generates production build output in `dist/`.

## Directory Structure
- `src/app/core/`: Singleton services, IndexedDB engine, state models.
- `src/app/shared/`: Reusable UI buttons, cards, modals, layout components.
- `src/app/features/`: Feature pages (Dashboard, Goals, Planner, Habits, Mindset, Learning, Reviews).