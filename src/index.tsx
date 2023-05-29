import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {RoutesPage} from './routes';

createRoot(document.querySelector("#root") as HTMLElement).render(
  <BrowserRouter>
    <RoutesPage/>
  </BrowserRouter>
)