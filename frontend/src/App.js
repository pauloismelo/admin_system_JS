
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

import Article from './pages/articles/Article';
import ArticleList from './pages/articles/List';
import ArticleAdd from './pages/articles/Add';
import ArticleEdit from './pages/articles/Edit';
import User from './pages/users/User';
import UserList from './pages/users/List';
import UserAdd from './pages/users/Add';
import UserEdit from './pages/users/Edit';
import Home from './pages/Home';


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
            <Route path='/dashboard/home' element={<PrivateRoute><Home/></PrivateRoute>}/>

            <Route path='/dashboard/category' element={<PrivateRoute><Category/></PrivateRoute>}>
              <Route path='/dashboard/category/add' element={<PrivateRoute><CategoryAdd/></PrivateRoute>}/>
              <Route path='/dashboard/category/list' element={<PrivateRoute><CategoryList/></PrivateRoute>}/>
              <Route path='/dashboard/category/edit/:id' element={<PrivateRoute><CategoryEdit/></PrivateRoute>}/>
            </Route>

            <Route path='/dashboard/article' element={<PrivateRoute><Article/></PrivateRoute>}>
              <Route path='/dashboard/article/list' element={<PrivateRoute><ArticleList/></PrivateRoute>}/>
              <Route path='/dashboard/article/add' element={<PrivateRoute><ArticleAdd/></PrivateRoute>}/>
              <Route path='/dashboard/article/edit/:id' element={<PrivateRoute><ArticleEdit/></PrivateRoute>}/>
            </Route>

            <Route path='/dashboard/user' element={<PrivateRoute><User/></PrivateRoute>}>
              <Route path='/dashboard/user/list' element={<PrivateRoute><UserList/></PrivateRoute>}/>
              <Route path='/dashboard/user/add' element={<PrivateRoute><UserAdd/></PrivateRoute>}/>
              <Route path='/dashboard/user/edit/:id' element={<PrivateRoute><UserEdit/></PrivateRoute>}/>
            </Route>
            
        </Route>

      </Routes>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
