import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
<<<<<<< HEAD:LatestAngularApp/src/app/app.config.ts
    provideHttpClient(),
    provideRouter(routes)
=======
    provideRouter(routes),
    provideHttpClient()
>>>>>>> 5bd34f6fd5296530f7ab97ae57f28e968a3cd719:LatestAngular/src/app/app.config.ts
  ]
};
