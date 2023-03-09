// import { onAuthStateChange } from './lib/firebase.js';
import Home from './components/home.js';
import Register from './components/register.js';
import Feed from './components/feed.js';
import NotFound from './components/404.js';

import {
  // navigate,
  setRoutes,
  handlePopState,
  renderComponent,
} from './router.js';

// Creamos un arreglo de rutas
const routes = [
  {
    pathname: '/',
    component: Home,
  },
  {
    pathname: '/register',
    component: Register,
  },
  {
    pathname: '/feed',
    component: Feed,
  },
  {
    pathname: '*', // ruta por defecto
    component: NotFound,
  },
];

// agregamos las rutas al router
setRoutes(routes);

// si no renderizamos el primer componente
// con auhtStateChange
renderComponent();

// si renderizamos el primer componente
// con auhtStateChange
// onAuthStateChange(
//   (user) => {
//     if (user) {
//       navigate('/feed');
//     } else {
//       navigate('/');
//     }
//   },
// );

// agregamos el evento popstate para que
// podamos volver atras en el navegador
window.onpopstate = handlePopState;
