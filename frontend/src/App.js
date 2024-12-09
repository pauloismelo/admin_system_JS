
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './Routes/PrivateRoutes';

import { AuthProvider } from './Context/AuthContext';
import CategoryAdd from './pages/CategoryAdd';
import Category from './pages/Category';


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
            <Route path='/dashboard/category' element={<PrivateRoute><Category/></PrivateRoute>}>
              <Route path='/dashboard/category/add' element={<PrivateRoute><CategoryAdd/></PrivateRoute>}/>
            </Route>
            
        </Route>

      </Routes>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
