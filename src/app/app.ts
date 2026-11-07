import { Component } from '@angular/core';
import { ProjectList } from '../features/projects/components/project-list/project-list';
import { UserCard } from '../features/projects/components/user-card/user-card';
import { USERS } from '../features/projects/data/data/projects.data';

@Component({
  selector: 'app-root',
  imports: [ProjectList, UserCard],
  templateUrl: './app.html',
})
export class App {
  users = USERS;
}
