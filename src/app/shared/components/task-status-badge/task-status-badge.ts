import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Task } from '../../../../features/projects/models/models/task.model';

@Component({
  selector: 'app-task-status-badge',
  standalone: true,
  imports: [NgClass],
  template: `
    <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1"
      [ngClass]="{
        'bg-slate-100/80 text-slate-700 ring-slate-200': status() === 'En attente',
        'bg-sky-100/80 text-sky-700 ring-sky-200': status() === 'En cours',
        'bg-emerald-100/80 text-emerald-700 ring-emerald-200': status() === 'Terminé'
      }">
      <span class="h-1.5 w-1.5 rounded-full"
        [ngClass]="{
          'bg-slate-400': status() === 'En attente',
          'bg-sky-500 animate-pulse': status() === 'En cours',
          'bg-emerald-500': status() === 'Terminé'
        }"></span>
      {{ status() }}
    </span>
  `,
})
export class TaskStatusBadge {
  status = input.required<Task['status']>();
}
