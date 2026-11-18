import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  template: `
    <section class="page">
      <header class="page-header">
        <p class="eyebrow">Review</p>
        <h1>Progress</h1>
        <p class="lede">
          Weekly summaries and milestone evidence, based on what was completed rather than how busy the week felt.
        </p>
      </header>
      <div class="empty-state">
        <h2>Nothing to review yet</h2>
        <p>Once daily work is recorded, this page can show what moved and what to change.</p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {}
