import { Navigate } from 'react-router-dom';

/**
 * PublicRoute
 * Si ya hay token → redirige a /info (usuario ya logueado no ve login/register)
 * Si no hay token → muestra el contenido (login o register)
 */
export function PublicRoute({ children }: { children: any }) {
  const token = localStorage.getItem('token');

  // Si hay token, redirigir a /info
  if (token) {
    return <Navigate to="/info" replace />;
  }

  // Si no hay token, mostrar el formulario (login o register)
  return children;
}