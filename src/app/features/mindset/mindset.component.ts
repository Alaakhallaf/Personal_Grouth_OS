import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mindset',
  standalone: true,
  template: `
    <section class="page">
      <header class="page-header">
        <p class="eyebrow">Awareness</p>
        <h1>Mindset</h1>
        <p class="lede">
          Seven mindset pairs and a guided Awareness, Pause, Reframe entry.
        </p>
      </header>
      <div class="empty-state">
        <h2>No reflections yet</h2>
        <p>APR entries will be listed here so a pattern can be noticed without a diagnosis.</p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MindsetComponent {}
