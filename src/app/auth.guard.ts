/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Este guardia de autenticación verifica si el usuario está autenticado antes de permitir el acceso a ciertas rutas
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  // Método que se ejecuta para verificar si el usuario puede acceder a una ruta
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Obtiene el usuario del almacenamiento local
    const userItem = localStorage.getItem('user');
    if (userItem) {
      const user = JSON.parse(userItem);
      // Si el usuario existe y tiene un token, se permite el acceso
      if (user && user.token) {
        return true;
      }
    }
    // Si el usuario no está autenticado, se redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
    return false;
  }
}