import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute
 * Si no hay token → redirige a /login
 * Si hay token → muestra el contenido (children)
 */
export function ProtectedRoute({ children }: { children:any }) {
  // Obtener token del localStorage
  const token = localStorage.getItem('token');

  // Si no hay token, redirigir a login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si hay token, mostrar el contenido
  return children;
}