import { Component, computed, input, output } from '@angular/core';
import {
  UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe,
  DecimalPipe, KeyValuePipe, NgStyle,
} from '@angular/common';
import { Project } from '../../models/models/project.model';
import { Task } from '../../models/models/task.model';
import { User } from '../../models/models/user.model'; // adaptez le chemin
import { TaskList } from '../task-list/task-list';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe,
    DecimalPipe, KeyValuePipe, NgStyle, TaskList,
  ],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  project = input.required<Project>();
  users = input<User[]>([]);
  showAssignee = input(true);

  projectSelected = output<Project>();
  taskStatusChange = output<{ projectId: number; taskId: number; status: Task['status'] }>();
  taskFilter = input<'all' | 'En cours' | 'Terminé'>('all');
  taskDelete = output<{ projectId: number; taskId: number }>();

  visibleTasks = computed(() =>
    this.taskFilter() === 'all'
      ? this.project().tasks
      : this.project().tasks.filter(t => t.status === this.taskFilter())
  );

  onTaskDelete(taskId: number): void {
    this.taskDelete.emit({ projectId: this.project().id, taskId });
  }
  onTaskStatusChange(e: { taskId: number; status: Task['status'] }): void {
    this.taskStatusChange.emit({ projectId: this.project().id, ...e });
  }

  /** Nombre de tâches terminées */
  doneCount = computed(
    () => this.project().tasks.filter(t => t.status === 'Terminé').length
  );
  progress  = computed(() => {
  const total = this.project().tasks.length;
  return total === 0 ? 0 : this.doneCount() / total;   // évite la division par 0 (projet 4)
});
  /** Taux de réalisation entre 0 et 1 (0 si aucune tâche) */
  completionRate = computed(() => {
    const total = this.project().tasks.length;
    return total === 0 ? 0 : this.doneCount() / total;
  });

  /** Coût moyen par tâche (0 si aucune tâche) */
  averageCost = computed(() => {
    const total = this.project().tasks.length;
    return total === 0 ? 0 : this.project().budget / total;
  });

  /** Nombre de tâches par priorité */
  tasksByPriority = computed(() => {
    const result: Record<string, number> = { Basse: 0, Haute: 0, Moyenne: 0 };
    for (const t of this.project().tasks) result[t.priority]++;
    return result;
  });

  /** Couleur de la barre de progression */
  barColor = computed(() => {
    const pct = this.completionRate() * 100;
    if (pct < 34) return '#ef4444';
    if (pct <= 66) return '#f59e0b';
    return '#22c55e';
  });
}
