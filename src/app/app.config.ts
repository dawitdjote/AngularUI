import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule} from '@angular/common';
import { importProvidersFrom } from '@angular/core';


import { routes } from './app.routes';
//import { CommonModule } from 'node_modules/@angular/common/types/_common_module-chunk';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    
  ]
};
