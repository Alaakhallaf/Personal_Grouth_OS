import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-daily-planner',
  standalone: true,
  template: `
    <section class="page">
      <header class="page-header">
        <p class="eyebrow">Today</p>
        <h1>Daily planner</h1>
        <p class="lede">
          One intention, up to three priorities, and a short note on what should carry over.
        </p>
      </header>
      <div class="empty-state">
        <h2>No plan for today</h2>
        <p>Daily entries will stay on this page after they can be saved locally.</p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyPlannerComponent {}
