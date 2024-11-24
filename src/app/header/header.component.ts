
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  profile?: User | undefined | null;
  logoPath: string = 'assets/logo.png';
  

  constructor( private authservice: AuthService, private router:Router){
    this.authservice.isAuthenticated$.subscribe(isAuthenticated =>{
      if(isAuthenticated){
        this.router.navigate(['/mapas'])
      }
    })
    this.authservice.user$.subscribe({
      next:(profile)=> this.profile =profile
    })
  }

  login(){
    this.authservice.loginWithRedirect()
  }

  logout(){
    this.authservice.logout({ returnTo: window.location.origin} as any)
  }

}
