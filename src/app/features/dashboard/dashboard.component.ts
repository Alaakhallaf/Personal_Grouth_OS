import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_ITEMS } from '../../shared/navigation/nav-items';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  readonly focusCards = [
    {
      title: 'Active goals',
      hint: 'One to three areas in Active Focus',
      empty: 'No active goals yet. They will show here once Goals is in place.',
    },
    {
      title: 'Daily intention',
      hint: 'One sentence for how you want to approach today',
      empty: 'A daily intention will appear here from the planner.',
    },
    {
      title: "Today's priorities",
      hint: 'Up to three meaningful tasks',
      empty: 'Today’s short list will land here.',
    },
    {
      title: 'Habit snapshot',
      hint: 'Repeatable actions, without shame-based streaks',
      empty: 'Habits you keep alive will appear as a simple snapshot.',
    },
  ] as const;

  readonly sections = NAV_ITEMS.filter((item) => item.path !== '/');
}
