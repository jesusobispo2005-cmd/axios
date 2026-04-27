import { useForm } from "react-hook-form";
import { registerService } from "../services/users.service";
/**
 * Formulario de Registro
 * Campos: nombre, email, password, confirmar password
 * Botón: Registrarse
 */
export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit=(data:any)=>{
    registerService(data)
  }
  return (
    <div className="card shadow">
      <div className="card-body p-4">
        <h2 className="text-center mb-4">Registrarse</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Campo Nombre */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              {...register('nombre')}
              id="name"
              placeholder="Tu nombre"
            />
          </div>
          {/* Campo Apellido */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              {...register('apellido')}
              id="name"
              placeholder="Tu Apellido"
            />
          </div>
          {/* Campo Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              {...register('email')}
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
            {...register('password')}
              type="password"
              className="form-control"
              id="password"
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          {/* Campo Confirmar Contraseña */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Repite tu contraseña"
            />
          </div>

          {/* Botón Registrarse */}
          <button type="submit" className="btn btn-success w-100">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}