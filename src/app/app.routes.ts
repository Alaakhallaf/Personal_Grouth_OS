      import { Routes } from '@angular/router';
      import { AppShellComponent } from './shared/components/app-shell/app-shell.component';

      export const routes: Routes = [
        {
          path: '',
          component: AppShellComponent,
          children: [
            {
              path: '',
              loadComponent: () =>
                import('./features/dashboard/dashboard.component').then(
                  (m) => m.DashboardComponent,
                ),
              title: 'Dashboard',
              data: { title: 'Dashboard' },
            },
            {
              path: 'goals',
              loadComponent: () =>
                import('./features/goals/goals.component').then((m) => m.GoalsComponent),
              title: 'Goals',
              data: { title: 'Goals' },
            },
            {
              path: 'planner',
              loadComponent: () =>
                import('./features/daily-planner/daily-planner.component').then(
                  (m) => m.DailyPlannerComponent,
                ),
              title: 'Planner',
              data: { title: 'Planner' },
            },
            {
              path: 'habits',
              loadComponent: () =>
                import('./features/habits/habits.component').then((m) => m.HabitsComponent),
              title: 'Habits',
              data: { title: 'Habits' },
            },
            {
              path: 'mindset',
              loadComponent: () =>
                import('./features/mindset/mindset.component').then(
                  (m) => m.MindsetComponent,
                ),
              title: 'Mindset',
              data: { title: 'Mindset' },
            },
            {
              path: 'learning',
              loadComponent: () =>
                import('./features/learning/learning.component').then(
                  (m) => m.LearningComponent,
                ),
              title: 'Learning',
              data: { title: 'Learning' },
            },
            {
              path: 'progress',
              loadComponent: () =>
                import('./features/analytics/progress.component').then(
                  (m) => m.ProgressComponent,
                ),
              title: 'Progress',
              data: { title: 'Progress' },
            },
            {
              path: 'reflection',
              loadComponent: () =>
                import('./features/reflection/reflection.component').then(
                  (m) => m.ReflectionComponent,
                ),
              title: 'Reflection',
              data: { title: 'Reflection' },
            },
            { path: '**', redirectTo: '' },
          ],
        },
      ];
