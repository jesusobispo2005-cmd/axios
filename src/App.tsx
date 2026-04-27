import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProtectedRoute } from './components/ProtectedRoute';
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
          {/* Rutas públicas */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

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