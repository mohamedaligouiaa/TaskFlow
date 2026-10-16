import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../../models/models/project.model';
import { ProjectService } from '../../../../app/core/services/project';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project-list',
  imports: [FormsModule, ProjectCard],
  templateUrl: './project-list.html',
})
export class ProjectList implements OnInit {
  private readonly projectService = inject(ProjectService);

  // Partie 10 : la liste des projets est un signal
  projects = signal<Project[]>([]);

  // Partie 11 : le texte de recherche est un signal
  searchTerm = signal('');

  // Partie 11 : projets filtrés, recalculés automatiquement
  filteredProjects = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    return this.projects().filter((project) =>
      project.name.toLowerCase().includes(term)
    );
  });

  // Partie 12 : abonnement explicite à l'Observable
  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects.set(projects);
    });
  }

  // Partie 6 : réception de l'événement envoyé par ProjectCard
  onProjectSelected(project: Project): void {
    console.log(project);
  }
}
