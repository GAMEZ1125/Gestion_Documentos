import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

// Importamos los componentes
const CreateUser = lazy(() => import('./components/users/CreateUser'));
const ShowUsers = lazy(() => import('./components/users/ShowUsers'));
const UpdateUser = lazy(() => import('./components/users/UpdateUser'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<ShowUsers />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<UpdateUser />} />
          <Route path="*" element={<Navigate to="/users" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
