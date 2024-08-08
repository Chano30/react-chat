import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from './providers';
import { RouterProvider } from 'react-router-dom';
import router from './route';

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)