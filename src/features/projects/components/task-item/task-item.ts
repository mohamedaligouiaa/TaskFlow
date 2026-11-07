import { Component, computed, input, output } from '@angular/core';
import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { Task } from '../../models/models/task.model';
import { TruncatePipe } from '../../../../app/shared/pipes/truncate-pipe';
import { DeadlinePipe } from '../../../../app/shared/pipes/deadline-pipe';
import { HighlightDirective } from '../../../../app/shared/directives/highlight';
import { OverdueDirective } from '../../../../app/shared/directives/overdue';
import { TooltipDirective } from '../../../../app/shared/directives/tooltip';
import { TaskStatusBadge } from '../../../../app/shared/components/task-status-badge/task-status-badge';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    DatePipe, NgClass, NgStyle, TruncatePipe, DeadlinePipe,
    HighlightDirective, OverdueDirective, TooltipDirective, TaskStatusBadge,
  ],
  templateUrl: './task-item.html',
})
export class TaskItem {
  task = input.required<Task>();
  showAssignee = input(false);
  assigneeName = input<string | null>(null);

  taskStatusChange = output<Task['status']>();
  taskDelete = output<void>();

  // ⚠ doit être déclaré AVANT nextStatusLabel
  private readonly nextStatus: Record<Task['status'], Task['status']> = {
    'En attente': 'En cours',
    'En cours': 'Terminé',
    'Terminé': 'En attente',
  };

  nextStatusLabel = computed(() => this.nextStatus[this.task().status]);

  changeStatus(event: Event): void {
    event.stopPropagation();
    this.taskStatusChange.emit(this.nextStatus[this.task().status]);
  }

  delete(event: Event): void {
    event.stopPropagation();
    this.taskDelete.emit();
  }

  borderClass(status: string): string {
    const map: Record<string, string> = {
      'Terminé':    'border-l-4 border-l-green-500',
      'En cours':   'border-l-4 border-l-blue-500',
      'En attente': 'border-l-4 border-l-gray-400',
    };
    return map[status] ?? 'border-l-4 border-l-gray-200';
  }

  progressStyle(): Record<string, string> {
    const widths: Record<Task['status'], string> = {
      'En attente': '10%',
      'En cours': '50%',
      'Terminé': '100%',
    };
    return { width: widths[this.task().status] };
  }
}
