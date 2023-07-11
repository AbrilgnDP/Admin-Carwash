import { Navigate } from 'react-router-dom'
import {Login} from '../pages/Login'
import { Principal } from '../pages/Principal'
import Users from '../pages/Usuarios/Users'
import Services from '../pages/Services/Services'
import EditUser from '../pages/Usuarios/Edit'
import EditServices from '../pages/Services/Edit'
import TypeCar from '../pages/TypeCar/TypeCar'
import Categories from '../pages/Category/Categories'
import EditCategory from '../pages/Category/Edit'
import CreateCategory from '../pages/Category/Create'
import CreateTypeCar from '../pages/TypeCar/Create'
import EditTypeCar from '../pages/TypeCar/Edit'
import CreateServices from '../pages/Services/Create'




export const AllRoutes = [
  { type: 0, path: '/*', element: <Login/>},
  { type: 0, path: '/pruebas', element: <Users/>},
  
  { type: 1, path: '/', element: <Navigate to={"/Home"} /> },
  { type: 1, path: '/Home', element: <Principal/>},
  { type: 1, path: '/usuarios', element: <Users/>},
  { type: 1, path: '/usuarios/:id', element: <EditUser/>},

  { type: 1, path: '/servicios', element: <Services/>},
  { type: 1, path: '/servicios/:id', element: <EditServices/>},
  { type: 1, path: '/createService', element: <CreateServices/>},


  { type: 1, path: '/typeCar', element: <TypeCar/>},
  { type: 1, path: '/createTypeCar', element: <CreateTypeCar/>},
  { type: 1, path: '/typeCar/:id', element: <EditTypeCar/>},
  
  { type: 1, path: '/CategoriaServicios', element: <Categories/>},
  { type: 1, path: '/CrearCategoria', element: <CreateCategory/>},
  { type: 1, path: '/CategoriaServicios/:id', element: <EditCategory/>},
]