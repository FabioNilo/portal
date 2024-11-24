import { Routes } from '@angular/router';
import { CrimeMapComponent } from './crime-map/crime-map.component';
import { HeroComponent } from './hero/hero.component';
import { LayoutComponent } from './layout/layout.component';
import { TipsComponent } from './tips/tips.component';
import { FormLoginComponent } from './form/form-login/form-login.component';
import { RegisterComponent } from './register/register.component';
import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: "home", component: HeroComponent},
          {path:"map",component:CrimeMapComponent, canActivate:[authGuardFn]},
          {path:"dicas",component:TipsComponent,  canActivate:[authGuardFn]},
          {path:'login',component:FormLoginComponent},
          {path:'cadastro', component:RegisterComponent}
          
         
        ],
      },
    ];

