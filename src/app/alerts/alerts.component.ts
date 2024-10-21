import { CommonModule } from '@angular/common';
import { Component,input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
  title= input<string>()
  message = input<string>()
  alertType = input<string>()
}
