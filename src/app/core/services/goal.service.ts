import { Injectable, signal, computed, effect } from '@angular/core';
import { Goal, GoalStatus } from '../models/goal.model';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  private readonly STORAGE_KEY = 'pg_os_goals';

  // Signals State
  private goalsSignal = signal<Goal[]>(this.loadFromStorage());

  // Public Readonly Signals
  readonly goals = this.goalsSignal.asReadonly();
  
  readonly activeGoals = computed(() =>
    this.goalsSignal().filter((g) => g.status === 'active')
  );
  
  readonly completedGoals = computed(() =>
    this.goalsSignal().filter((g) => g.status === 'completed')
  );

  constructor() {
    // Sync with LocalStorage whenever signals change
    effect(() => {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.goalsSignal()));
    });
  }

  private loadFromStorage(): Goal[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  addGoal(goal: Omit<Goal, 'id' | 'createdAt'>): void {
    const newGoal: Goal = {
      ...goal,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    this.goalsSignal.update((current) => [newGoal, ...current]);
  }

  updateGoalStatus(id: string, status: GoalStatus): void {
    this.goalsSignal.update((current) =>
      current.map((g) => (g.id === id ? { ...g, status } : g))
    );
  }

  deleteGoal(id: string): void {
    this.goalsSignal.update((current) => current.filter((g) => g.id !== id));
  }
}
