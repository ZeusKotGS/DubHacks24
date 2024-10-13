import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Add from './pages/Add.jsx';
import MainLayout from './layouts/MainLayouts.jsx';


// declaring the router (must create new router for each new page and import the page above)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<MainLayout />}>
      <Route index element={<Home />}/>
      <Route path ='/add' element = {<Add />}/>
    </Route>
  )
);

// what is actually rendered
const App = () => {
  return <RouterProvider router={router}/>;
};

export default App
