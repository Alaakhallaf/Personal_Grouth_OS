export type GoalDomain = 'Career' | 'Health' | 'Personal' | 'Learning' | 'Finance';
export type GoalStatus = 'active' | 'completed' | 'archived';

export interface Goal {
  id: string;
  title: string;
  description: string;
  domain: GoalDomain;
  status: GoalStatus;
  targetDate: string;
  createdAt: string;
}