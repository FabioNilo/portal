import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrimeMapComponent } from "./crime-map/crime-map.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HeroComponent } from "./hero/hero.component";
import { TipsComponent } from './tips/tips.component';
import { FormLoginComponent } from './form/form-login/form-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrimeMapComponent, AlertsComponent, 
    HeaderComponent, FooterComponent, 
    HeroComponent,TipsComponent,FormLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portal';
}
