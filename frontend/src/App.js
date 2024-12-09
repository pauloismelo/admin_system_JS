
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './Routes/PrivateRoutes';

import { AuthProvider } from './Context/AuthContext';
import CategoryAdd from './pages/CategoryAdd';


function App() {

  return (
    <>
    <AuthProvider>
    <Router>
      <Routes>
      <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
          }>
            <Route path='/dashboard/categoryadd' element={<PrivateRoute><CategoryAdd/></PrivateRoute>}/>
        </Route>

      </Routes>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
