import { Component, Input } from '@angular/core';
import { TitleCasePipe, LowerCasePipe, NgClass, NgStyle } from '@angular/common';
import { User } from '../../models/models/user.model';
import { InitialsPipe } from '../../../../app/shared/pipes/initials-pipe';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [TitleCasePipe, LowerCasePipe, NgClass, NgStyle, InitialsPipe],
  templateUrl: './user-card.html',
})
export class UserCard {
  @Input({ required: true }) user!: User;

  roleColors: Record<string, string> = {
    admin: '#ef4444',
    manager: '#3b82f6',
    developer: '#22c55e',
  };

  get avatarColor(): string {
    return this.roleColors[this.user.role] ?? '#6b7280';
  }
}
