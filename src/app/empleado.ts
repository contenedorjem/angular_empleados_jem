/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Esta interfaz define el modelo de datos para un Empleado
 */
export interface Empleado {
    id: string;         // Identificador único del empleado
    nombre: string;     // Nombre del empleado
    apellidos: string;  // Apellidos del empleado
    email: string;      // Correo electrónico del empleado
    sueldo: number;     // Sueldo del empleado
    categoria: string;  // Categoría del empleado
    cargo: string;      // Cargo del empleado
    antiguedad: number; // Antigüedad del empleado en años
}