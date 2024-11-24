import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
  provideAuth0({
      domain: 'dev-0pyfbugcm6q8sd0a.us.auth0.com',
      clientId: 'eRYhQoLZaGhm2Vt9CYQcQzq3VffxxnwW',
      authorizationParams: {
      redirect_uri: window.location.origin,
      audience:'https://dev-0pyfbugcm6q8sd0a.us.auth0.com/api/v2/',
      scope:'openid profile email offline_acess',
      },
      useRefreshTokens: true,
      cacheLocation:'localstorage'
  })]
};
