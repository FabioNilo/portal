import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AlertsComponent } from '../alerts/alerts.component';
import { CrimeMapComponent } from '../crime-map/crime-map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AlertsComponent, CrimeMapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
