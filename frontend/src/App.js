
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './Routes/PrivateRoutes';

import { AuthProvider } from './Context/AuthContext';

import Category from './pages/category/Category';
import CategoryAdd from './pages/category/Add';
import CategoryList from './pages/category/List';
import CategoryEdit from './pages/category/Edit';


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
              <Route path='/dashboard/category/list' element={<PrivateRoute><CategoryList/></PrivateRoute>}/>
              <Route path='/dashboard/category/edit/:id' element={<PrivateRoute><CategoryEdit/></PrivateRoute>}/>
            </Route>
            
        </Route>

      </Routes>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
