import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOverdue]',
  standalone: true
})
export class OverdueDirective {

  @Input() dueDate?: string | Date;
  @Input() done = false;

  @HostBinding('class')
  get overdueClasses(): string {
    if (!this.dueDate || this.done) {
      return '';
    }

    const due = new Date(this.dueDate);
    const today = new Date();

    // Comparer uniquement les dates, sans tenir compte des heures
    due.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const isOverdue =
      !isNaN(due.getTime()) && due < today;

    return isOverdue ? 'ring-2 ring-red-400/70 bg-red-50/70' : '';
  }
}
