/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Este archivo configura el proveedor de enrutamiento de la aplicación
 */

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Configuración de la aplicación que proporciona las rutas
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};