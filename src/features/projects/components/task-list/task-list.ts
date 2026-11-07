import { Component, input, output } from '@angular/core';
import { Task } from '../../models/models/task.model';
import { User } from '../../models/models/user.model';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItem],
  templateUrl: './task-list.html',
})
export class TaskList {
  tasks = input.required<Task[]>();
  showAssignee = input(false);
  users = input<User[]>([]);
  taskDelete = output<number>();
  taskStatusChange = output<{ taskId: number; status: Task['status'] }>();

  assigneeName(task: Task): string | null {
    return this.users().find(u => u.id === task.assigneeId)?.name ?? null;
  }
}
