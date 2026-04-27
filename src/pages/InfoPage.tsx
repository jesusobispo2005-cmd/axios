import { InfoCard } from '../components/InfoCard';

/**
 * Página de Info
 * Solo renderiza la tarjeta con datos del usuario
 */
export function InfoPage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <InfoCard />
        </div>
      </div>
    </div>
  );
}