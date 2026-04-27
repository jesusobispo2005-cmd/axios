import { useForm } from "react-hook-form";
import { loginService } from "../services/user.service";

/**
 * Formulario de Login
 * Campos: email, password
 * Botón: Entrar
 */
export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    loginService(data)
  };

  return (
    <div className="card shadow">
      <div className="card-body p-4">
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Campo Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="form-control"
              id="email"
              placeholder="tu@email.com"
            />
          </div>

          {/* Campo Contraseña */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              {...register("password")}
              type="password"
              className="form-control"
              id="password"
              placeholder="Tu contraseña"
            />
          </div>

          {/* Botón Entrar */}
          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}