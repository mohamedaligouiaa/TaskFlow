import { Component, input, output } from '@angular/core';
import { Project } from '../../models/models/project.model';
import { TaskList } from '../task-list/task-list';
import { badgeClass } from '../../../../shared/utils/status-style';

@Component({
  selector: 'app-project-card',
  imports: [TaskList],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  project = input.required<Project>();
  projectSelected = output<Project>();

  protected readonly badgeClass = badgeClass;

  selectProject(): void {
    this.projectSelected.emit(this.project());
  }
}
