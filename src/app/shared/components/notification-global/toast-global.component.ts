import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '@core/utils/notification/notification.service';

@Component({
  selector: 'app-toast-global',
  imports: [CommonModule],
  templateUrl: './toast-global.component.html',
})
export class ToastGlobalComponent {
  readonly notification = inject(NotificationService);

  get type() {
    return this.notification.type() as 'success' | 'error' | 'info' | 'warning';
  }
  get message() {
    return this.notification.message() as string;
  }
  get visible() {
    return this.notification.visible() as boolean;
  }

  hide() {
    this.notification.visible.set(false);
  }
}
