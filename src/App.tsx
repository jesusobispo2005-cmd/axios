import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProtectedRoute } from './components/ProtectedRoute';
import { PublicRoute } from './components/PublicRoute';
import { LoginPage, RegisterPage, InfoPage } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar siempre visible arriba */}
      <Navbar />

      {/* Contenido principal cambia según la ruta */}
      <main className="py-4">
        <Routes>
          {/* Rutas públicas: si ya está logueado → /info */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />

          {/* Ruta protegida: necesita token */}
          <Route
            path="/info"
            element={
              <ProtectedRoute>
                <InfoPage />
              </ProtectedRoute>
            }
          />

          {/* Redirección por defecto a login */}
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;