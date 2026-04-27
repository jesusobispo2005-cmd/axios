/**
 * Formulario de Registro
 * Campos: nombre, email, password, confirmar password
 * Botón: Registrarse
 */
export function RegisterForm() {
  return (
    <div className="card shadow">
      <div className="card-body p-4">
        <h2 className="text-center mb-4">Registrarse</h2>

        {/* Campo Nombre */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Tu nombre"
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
      </div>
    </div>
  );
}