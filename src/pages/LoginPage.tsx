import { LoginForm } from '../components/LoginForm';

/**
 * Página de Login
 * Solo renderiza el formulario de login
 */
export function LoginPage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}