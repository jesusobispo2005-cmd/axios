import { RegisterForm } from '../components/RegisterForm';

/**
 * Página de Register
 * Solo renderiza el formulario de registro
 */
export function RegisterPage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}