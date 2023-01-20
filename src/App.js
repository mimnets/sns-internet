import logo from './logo.svg';
import './App.css';
import Main from './Layout/Main';
import { RouterProvider } from 'react-router';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="max-w-[1460px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
