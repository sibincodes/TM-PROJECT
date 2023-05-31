import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Router} from './routes';
import './index.css'

createRoot(document.querySelector("#root") as HTMLElement).render(
  <BrowserRouter>
    <Router/>
  </BrowserRouter>
)