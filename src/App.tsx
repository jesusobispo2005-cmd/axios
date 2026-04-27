import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/info" element={<InfoPage />} />
          {/* Redirección por defecto a login */}
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;