import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../../../app/core/services/project';
import { UserService } from '../../../../app/core/services/user.service';
import { Project } from '../../models/models/project.model';
import { Task } from '../../models/models/task.model';
import { User } from '../../models/models/user.model';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [FormsModule, ProjectCard],
  templateUrl: './project-list.html',
})
export class ProjectList implements OnInit {
  private projectService = inject(ProjectService);
  private userService = inject(UserService);

  projects = signal<Project[]>([]);
  users = signal<User[]>([]);
  searchTerm = signal('');
  taskFilter = signal<'all' | 'En cours' | 'Terminé'>('all'); // bonus
  filters: { value: 'all' | 'En cours' | 'Terminé'; label: string }[] = [
  { value: 'all', label: 'Toutes' },
  { value: 'En cours', label: 'En cours' },
  { value: 'Terminé', label: 'Terminées' },
];
  filteredProjects = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    return this.projects().filter(p => p.name.toLowerCase().includes(term));
  });

  ngOnInit(): void {
    // Partie 5 : on garde exactement la récupération RxJS du TP2
    this.projectService.getProjects().subscribe(projects => this.projects.set(projects));
    this.userService.getUsers().subscribe(users => this.users.set(users));
  }

  onProjectSelected(project: Project): void {
    console.log(project);
  }

  /** Partie 4 : mise à jour immuable */
  onTaskStatusChange(e: { projectId: number; taskId: number; status: Task['status'] }): void {
    this.projects.update(list =>
      list.map(p =>
        p.id !== e.projectId
          ? p
          : { ...p, tasks: p.tasks.map(t => (t.id === e.taskId ? { ...t, status: e.status } : t)) }
      )
    );
  }

  /** Bonus : suppression d'une tâche */
  onTaskDelete(e: { projectId: number; taskId: number }): void {
    this.projects.update(list =>
      list.map(p =>
        p.id !== e.projectId ? p : { ...p, tasks: p.tasks.filter(t => t.id !== e.taskId) }
      )
    );
  }
}
