import App from '../pages/App';
import Gift from '../pages/gift/_index';
import MyPage from '../pages/mypage/index';
import List from '../pages/list/index';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'gift/:id',
        element: <Gift />
      }
    ]
  },
  {
    path: '/mypage',
    element: <MyPage />
  },
  {
    path: '/list',
    element: <List />
  }
];

export default routes;
