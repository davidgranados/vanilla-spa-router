export const ROUTES = {};

export const setRoutes = (routes) => {
  // Arma el objeto ROUTES con las rutas agregadas

  // routes.forEach((route) => {
  //   ROUTES[route.path] = route.component;
  // });

  // Otra forma de hacer lo mismo
  routes.reduce((currentRoutes, newRoute) => {
    currentRoutes[newRoute.pathname] = newRoute.component;
    return currentRoutes;
  }, ROUTES);
};

export const getComponentByRoute = (pathname) => {
  // Si encuentra la ruta, retorna el componenteßå
  if (Object.keys(ROUTES).includes(pathname)) {
    return ROUTES[pathname];
  }

  // Si no encuentra la ruta, busca la ruta por defecto
  if (ROUTES['*']) {
    return ROUTES['*'];
  }

  // Si no encuentra la ruta por defecto, lanza un error
  throw new Error('No route found');
};

export const renderComponent = ({ rootElementId = 'root' } = {}) => {
  // Obtiene el componente por la ruta actual
  const component = getComponentByRoute(window.location.pathname);

  // Renderiza el componente en el elemento root
  const rootSection = document.getElementById(rootElementId);
  rootSection.innerHTML = '';
  rootSection.appendChild(component());
};

export const navigate = (pathname) => {
  // Cambia la ruta actual
  window.history.pushState({}, pathname, window.location.origin + pathname);

  // Renderiza el componente
  renderComponent();
};

export const handlePopState = () => {
  renderComponent();
};
