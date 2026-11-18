import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  standalone: true,
  template: `
    <section class="page">
      <header class="page-header">
        <p class="eyebrow">Capability</p>
        <h1>Learning</h1>
        <p class="lede">
          Learning intentions, resources, and a log of what was understood or practiced.
        </p>
      </header>
      <div class="empty-state">
        <h2>No learning log yet</h2>
        <p>Notes and evidence of practice will collect here, linked to a goal when that helps.</p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningComponent {}
