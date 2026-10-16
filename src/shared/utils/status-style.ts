import { TaskStatus } from '../../features/projects/models/models/task.model';

/** Classes Tailwind du badge (fond + texte) selon le statut. */
export function badgeClass(status: TaskStatus): string {
  switch (status) {
    case 'Terminé':
      return 'bg-green-100 text-green-700';
    case 'En cours':
      return 'bg-blue-100 text-blue-700';
    default:
      return 'bg-gray-200 text-gray-700';
  }
}

/** Classe Tailwind de la bordure latérale selon le statut. */
export function borderClass(status: TaskStatus): string {
  switch (status) {
    case 'Terminé':
      return 'border-green-500';
    case 'En cours':
      return 'border-blue-500';
    default:
      return 'border-gray-400';
  }
}
