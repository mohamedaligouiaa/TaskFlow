import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../../features/projects/models/models/user.model';
import { USERS } from '../../../features/projects/data/data/projects.data';

@Service()
export class UserService {
  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUserById(id: number): Observable<User | undefined> {
    return of(USERS.find(u => u.id === id));
  }
}
