import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrimeMapComponent } from "./crime-map/crime-map.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrimeMapComponent, AlertsComponent, HeaderComponent, FooterComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portal';
}
