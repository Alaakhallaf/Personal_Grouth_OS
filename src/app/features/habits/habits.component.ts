import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-habits',
  standalone: true,
  template: `
    <section class="page">
      <header class="page-header">
        <p class="eyebrow">Routines</p>
        <h1>Habits</h1>
        <p class="lede">
          Cue, routine, and reward for the small actions that support a current goal.
        </p>
      </header>
      <div class="empty-state">
        <h2>No habits yet</h2>
        <p>
          A missed day will not reset progress. Consistency shows up as a record, not a streak to protect.
        </p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitsComponent {}
