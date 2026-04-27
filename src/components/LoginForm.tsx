/**
 * Formulario de Login
 * Campos: email, password
 * Botón: Entrar
 */
export function LoginForm() {
  return (
    <div className="card shadow">
      <div className="card-body p-4">
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

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
            placeholder="Tu contraseña"
          />
        </div>

        {/* Botón Entrar */}
        <button type="submit" className="btn btn-primary w-100">
          Entrar
        </button>
      </div>
    </div>
  );
}