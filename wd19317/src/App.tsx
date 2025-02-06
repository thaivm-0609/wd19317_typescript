import { useRoutes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';

const routeConfigs = [ //khai báo danh sách router
  { //router home
    path: '/', //đường dẫn
    element: <Homepage/>, //file sẽ được hiển thị ra khi truy cập vào path
  },
  { //router detail
    path: '/detail/:id',
    element: <Detail/>,
  },
  { //router register
    path: '/register',
    element: <Register/>,
  },
  { //router login
    path: '/login',
    element: <Login/>,
  },
  {
    path: '*', //các đường dẫn không tồn tại sẽ chạy vào đây
    element: <NotFound/>,
  }
]

function App() {
  const routes = useRoutes(routeConfigs);

  return <div>{routes}</div>;
}

export default App
