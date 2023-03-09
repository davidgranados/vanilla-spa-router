/** @type {Object.<string, function>} */
const ROUTES = {}

/**
 *
 * @returns {Object.<string, function>}
 */
export const getRoutes = () => structuredClone(ROUTES)

/**
 *
 * @param {Array.<{pathname: string, component: function}>} routes
 */
export const setRoutes = (routes) => {
  // Arma el objeto ROUTES con las rutas agregadas

  // routes.forEach((route) => {
  //   ROUTES[route.path] = route.component;
  // });

  // Otra forma de hacer lo mismo
  routes.reduce((currentRoutes, newRoute) => {
    // eslint-disable-next-line semi
    currentRoutes[newRoute.pathname] = newRoute.component
    return currentRoutes
  }, ROUTES)
}

/**
 *
 * @param {string} pathname
 * @returns
 */
export const getComponentByRoute = (pathname) => {
  // Si encuentra la ruta, retorna el componenteßå
  if (Object.keys(ROUTES).includes(pathname)) {
    return ROUTES[pathname]
  }

  // Si no encuentra la ruta, busca la ruta por defecto
  if (ROUTES['*']) {
    return ROUTES['*']
  }

  // Si no encuentra la ruta por defecto, lanza un error
  throw new Error('No route found')
}

/**
 *
 * @param {string} rootElementId
 * @param {function} component
 * @returns
 */
export const renderComponent = (rootElementId = 'root', component = null) => {
  const rootSection = document.getElementById(rootElementId)
  rootSection.innerHTML = ''

  if (component) {
    // Renderiza el componente en el elemento root
    rootSection.appendChild(component())
    return
  }

  // Obtiene el componente por la ruta actual
  const pathnameComponent = getComponentByRoute(window.location.pathname)

  // Renderiza el componente en el elemento root
  rootSection.appendChild(pathnameComponent())
}

/**
 *
 * @param {string} pathname
 */
export const navigate = (pathname) => {
  // Cambia la ruta actual
  window.history.pushState({}, pathname, window.location.origin + pathname)

  // Renderiza el componente
  renderComponent()
}

export const handlePopState = () => {
  renderComponent()
}
