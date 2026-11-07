
import { Project } from '../../models/models/project.model';
import { User } from '../../models/models/user.model';
import { Task } from '../../models/models/task.model';

export const USERS: User[] = [
  {
    id: 1,
    name: 'Amira Ben Salah',
    email: 'amira.bensalah@techvision.tn',
    role: 'Chef de projet',
    active: true
  },
  {
    id: 2,
    name: 'Karim Mansouri',
    email: 'karim.mansouri@techvision.tn',
    role: 'Développeur',
    active: true
  },
  {
    id: 3,
    name: 'Sarra Trabelsi',
    email: 'sarra.trabelsi@techvision.tn',
    role: 'Designer',
    active: true
  },
  {
    id: 4,
    name: 'Mehdi Gharbi',
    email: 'mehdi.gharbi@techvision.tn',
    role: 'Testeur',
    active: false
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Refonte du portail bancaire BIAT',
    description:
      'Modernisation du portail bancaire en ligne avec une nouvelle interface utilisateur, une gestion sécurisée des comptes et des services bancaires numériques.',
    status: 'En cours',
    startDate: '2026-08-25',
    budget: 85000,
    tasks: [
      {
        id: 1,
        title: 'Conception des maquettes UI/UX',
        priority: 'Haute',
        status: 'Terminé',
        dueDate: '2026-09-10',
        description:
          'Concevoir les maquettes haute fidélité du portail bancaire, incluant le tableau de bord client, la consultation des comptes et l’historique des transactions.'
      },
      {
        id: 2,
        title: 'Développement du tableau de bord client',
        priority: 'Moyenne',
        status: 'Terminé',
        dueDate: '2026-09-20',
        description:
          'Développer le tableau de bord permettant aux clients de consulter leurs soldes, leurs dernières opérations et leurs informations personnelles.'
      },
      {
        id: 5,
        title: 'Tests responsive et compatibilité mobile',
        priority: 'Basse',
        status: 'En attente',
        dueDate: '2026-11-15',
        description:
          'Vérifier le bon affichage du portail sur smartphones, tablettes et différents navigateurs.'
      },
      {
        id: 6,
        title: 'Intégration de l’API des comptes bancaires',
        priority: 'Moyenne',
        status: 'Terminé',
        dueDate: '2026-09-15',
        description:
          'Connecter le frontend aux services backend pour récupérer les soldes et les informations des comptes bancaires.'
      },
      {
        id: 10,
        title: 'Mise en place de la charte graphique',
        priority: 'Basse',
        status: 'Terminé',
        dueDate: '2026-09-05',
        description:
          'Appliquer les couleurs, typographies, composants et règles graphiques définis dans le design system.'
      },
      {
        id: 11,
        title: 'Documentation technique du portail',
        priority: 'Moyenne',
        status: 'Terminé',
        dueDate: '2026-09-25',
        description:
          'Rédiger la documentation technique des modules frontend, des endpoints API et des procédures de déploiement.'
      },
    ],
  },

  {
    id: 2,
    name: 'Plateforme e-commerce MyMarket',
    description:
      'Développement d’une plateforme de commerce électronique permettant aux commerçants de gérer leurs produits, leurs commandes, les paiements et les livraisons.',
    status: 'En cours',
    startDate: '2026-09-01',
    budget: 62000,
    tasks: [
      {
        id: 3,
        title: 'Développement du module de paiement',
        priority: 'Haute',
        status: 'En cours',
        dueDate: '2026-10-02',
        description:
          'Intégrer une passerelle de paiement sécurisée permettant aux clients de régler leurs commandes par carte bancaire, avec gestion des transactions et des retours de paiement.'
      },
      {
        id: 4,
        title: 'Création du catalogue produits',
        priority: 'Moyenne',
        status: 'En cours',
        dueDate: '2026-11-30',
        description:
          'Développer le catalogue produits avec catégories, filtres, recherche, prix, images et fiches détaillées.'
      },
      {
        id: 7,
        title: 'Développement de la gestion des commandes',
        priority: 'Haute',
        status: 'En cours',
        dueDate: '2026-12-10',
        description:
          'Mettre en place le suivi des commandes, la gestion des statuts, les notifications clients et l’historique des achats.'
      },
      {
        id: 8,
        title: 'Mise en place du système de livraison',
        priority: 'Moyenne',
        status: 'En attente',
        dueDate: '2026-10-01',
        description:
          'Intégrer les services de livraison, calculer les frais selon les zones géographiques et permettre le suivi des colis.'
      },
      {
        id: 9,
        title: 'Création de l’espace administrateur',
        priority: 'Basse',
        status: 'En attente',
        description:
          'Créer un espace administrateur permettant de gérer les utilisateurs, les produits, les commandes et les statistiques de vente.'
      },
      {
        id: 12,
        title: 'Tests de sécurité et validation des données',
        priority: 'Haute',
        status: 'En attente',
        dueDate: '2026-12-20',
        description:
          'Effectuer des tests de sécurité, vérifier les validations backend et identifier les vulnérabilités potentielles de la plateforme.'
      },
    ],
  },

  {
    id: 3,
    name: 'Application mobile de gestion médicale',
    description:
      'Conception d’une application mobile destinée aux patients pour la prise de rendez-vous médicaux, la consultation des dossiers et la réception des notifications.',
    status: 'En attente',
    startDate: '2026-11-01',
    budget: 45000,
    tasks: [],
  },
];

export const TASKS: Task[] = PROJECTS.flatMap(p => p.tasks);
