import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage';
import UserDetail from './routes/UserDetail'
import FormContainer from './components/Form/FormContainer';
import Autocomplete from './components/SearchBox/Autocomplete';
// import { loader as userLoader } from '../src/components/users/Users'

const searchOptionsArr = [
  'apple', 'banana', 'orange', 'grape', 'mango', 'pineapple', 'strawberry', 'watermelon', 'kiwi', 'pear', 'peach', 'cherry', 'lemon', 'lime', 'blueberry', 'raspberry', 'blackberry', 'apricot', 'avocado', 'coconut', 'fig', 'guava', 'jackfruit', 'lychee', 'mandarin', 'melon', 'nectarine', 'papaya', 'passionfruit', 'persimmon', 'plum', 'pomegranate', 'quince', 'starfruit', 'tangerine', 'tomato', 'cantaloupe', 'honeydew', 'durian', 'pomelo', 'tamarind',
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    forceRefresh: false,
  },
  {
    path: "/users/:id",
    element: <UserDetail />,
    // loader: userLoader,
  },

  {
    path: "/users/new",
    element: <FormContainer />,
  },

  {
    path: "/search",
    element: <Autocomplete options={searchOptionsArr} />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
