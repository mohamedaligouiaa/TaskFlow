import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../../features/projects/models/models/project.model';
import { PROJECTS } from '../../../features/projects/data/data/projects.data';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }
}
