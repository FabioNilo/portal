import { Routes } from '@angular/router';
import { CrimeMapComponent } from './crime-map/crime-map.component';
import { HeroComponent } from './hero/hero.component';
import { LayoutComponent } from './layout/layout.component';
import { TipsComponent } from './tips/tips.component';
import { FormLoginComponent } from './form/form-login/form-login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: "home", component: HeroComponent},
          {path:"map",component:CrimeMapComponent},
          {path:"dicas",component:TipsComponent},
          {path:'login',component:FormLoginComponent},
          {path:'cadastro', component:RegisterComponent}
          
          // Aqui o senhor pode adicionar novas rotas que vão compartilhar o header e o footer.
        ],
      },
    ];

