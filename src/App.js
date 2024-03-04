
import Body from './components/Body';
import { createBrowserRouter,Outlet, RouterProvider } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
function App() {
  const appRoot=createBrowserRouter([
    {
        path:"/",
        element:<Body/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
  }
])
  return (
    <div>
      <Provider store={appStore}>
      <RouterProvider router={appRoot}/>
      </Provider>
    </div>
   );
}


export default App;
