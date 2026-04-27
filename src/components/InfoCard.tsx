/**
 * Tarjeta de Info del Usuario
 * Muestra: avatar con iniciales, nombre, email
 * Botón: Cerrar Sesión (visual, sin función)
 */
export function InfoCard() {
  // Datos simulados (hardcodeados para maquetación)
  const nombre = 'Juan Pérez';
  const email = 'juan@ejemplo.com';

  // Obtener iniciales para el avatar
  const iniciales = nombre
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="card shadow">
      <div className="card-body text-center p-4">
        {/* Avatar circular */}
        <div
          className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3"
          style={{ width: '80px', height: '80px', fontSize: '2rem' }}
        >
          {iniciales}
        </div>

        {/* Nombre */}
        <h3 className="mb-1">{nombre}</h3>

        {/* Email */}
        <p className="text-muted mb-3">{email}</p>

        {/* Botón Cerrar Sesión */}
        <button type="button" className="btn btn-outline-secondary">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}