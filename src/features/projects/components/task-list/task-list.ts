import { Component, input } from '@angular/core';
import { Task } from '../../models/models/task.model';
import { badgeClass, borderClass } from '../../../../shared/utils/status-style';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
})
export class TaskList {
  tasks = input.required<Task[]>();

  // Rend les fonctions utilisables dans le template
  protected readonly badgeClass = badgeClass;
  protected readonly borderClass = borderClass;
}
