import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoalService } from '../../core/services/goal.service'; 
import { GoalDomain } from '../../core/models/goal.model';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss'
})
export class GoalsComponent {
  readonly goalService = inject(GoalService);

  // Form local state using signals
  newTitle = signal('');
  newDescription = signal('');
  newDomain = signal<GoalDomain>('Personal');
  newTargetDate = signal('');

  domains: GoalDomain[] = ['Career', 'Health', 'Personal', 'Learning', 'Finance'];

  onSubmit(): void {
    if (!this.newTitle().trim() || !this.newTargetDate()) return;

    this.goalService.addGoal({
      title: this.newTitle().trim(),
      description: this.newDescription().trim(),
      domain: this.newDomain(),
      status: 'active',
      targetDate: this.newTargetDate()
    });

    // Reset Form
    this.newTitle.set('');
    this.newDescription.set('');
    this.newDomain.set('Personal');
    this.newTargetDate.set('');
  }
}