
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './Routes/PrivateRoutes';

import { AuthProvider } from './Context/AuthContext';


function App() {

  return (
    <>
    <AuthProvider>
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
          }>
            
        </Route>

      </Routes>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
