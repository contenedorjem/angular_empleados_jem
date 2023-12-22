/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Este servicio de autenticación proporciona un usuario hardcodeado para la autenticación
 */

import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Usuario hardcodeado con credenciales válidas
  private user: User = {
    nick: 'EvidenAdmin',
    pass: 'admin1234',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs'
  };

  // Método para obtener el usuario
  getUser(): Observable<User> {
    // Almacena las credenciales del usuario en el almacenamiento local
    localStorage.setItem('user', JSON.stringify(this.user));
    // Devuelve el usuario hardcodeado
    return of(this.user);
  }
}