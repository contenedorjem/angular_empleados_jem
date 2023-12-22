/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Esta interfaz define el modelo de datos para un Usuario
 */

export interface User {
    nick: string;  // Nickname del usuario
    pass: string;  // Contraseña del usuario
    token: string; // Token de autenticación del usuario
}