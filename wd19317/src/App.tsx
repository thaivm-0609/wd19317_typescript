import { useRoutes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

const routeConfigs = [ //khai báo danh sách router
  {
    path: '/', //đường dẫn
    element: <Homepage/>, //file sẽ được hiển thị ra khi truy cập vào path
  },
  {
    path: '/details',
    element: <Detail/>,
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
