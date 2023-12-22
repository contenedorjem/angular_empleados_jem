/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Este es el punto de entrada principal de la aplicación Angular
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Inicializa la aplicación Angular
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // Maneja cualquier error que ocurra durante la inicialización