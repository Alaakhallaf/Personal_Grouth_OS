import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reflection',
  standalone: true,
  template: `
    <section class="page">
      <header class="page-header">
        <p class="eyebrow">Notice</p>
        <h1>Reflection</h1>
        <p class="lede">
          What moved forward, what was learned, and what should carry into the next day or week.
        </p>
      </header>
      <div class="empty-state">
        <h2>No reflections yet</h2>
        <p>Entries can later connect to a day, a goal, or an APR note.</p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReflectionComponent {}
