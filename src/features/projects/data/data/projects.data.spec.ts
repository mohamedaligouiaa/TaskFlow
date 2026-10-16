import { Project } from '../../models/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Projet 1',
    description: 'Description du projet 1',
    status: 'En cours',
    tasks: [
      { id: 1, title: 'Tâche 1', priority: 'Haute', status: 'En attente' },
      { id: 2, title: 'Tâche 2', priority: 'Moyenne', status: 'En cours' },
    ],
  },
  {
    id: 2,
    name: 'Projet 2',
    description: 'Description du projet 2',
    status: 'Terminé',
    tasks: [
      { id: 3, title: 'Tâche 3', priority: 'Basse', status: 'Terminé' },
    ],
  },
  {
    id: 3,
    name: 'Projet 3',
    description: 'Un projet sans tâche (pour tester @if)',
    status: 'En attente',
    tasks: [],
  },
];
