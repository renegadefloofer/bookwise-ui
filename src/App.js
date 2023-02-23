import './App.css';
import mixpanel from 'mixpanel-browser';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Header from './components/Header';
import GetRecommendations from './pages/GetRecommendations';
import GiveRecommendations from './pages/GiveRecommendations';

// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production
mixpanel.init('1a25c9307bcebf003b4bd8f5b3ddc421', { debug: true });
mixpanel.track('Sign up');

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<GetRecommendations />} />
        <Route path="/getrecommendations/" element={<GetRecommendations />} />
        <Route path="/giverecommendations/">
          <Route index path=":promptID" element={<GiveRecommendations />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

const Root = () => {
  return (
    <>
      <div className="app">
        <div className="overlay">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default App;
