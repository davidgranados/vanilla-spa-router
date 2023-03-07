import { navigate } from '../router.js';

const NotFound = () => {
  const notFoundSection = document.createElement('section');
  const notFoundSectionTitle = document.createElement('h1');
  notFoundSectionTitle.textContent = 'NotFound';

  const btnGoHome = document.createElement('button');
  btnGoHome.textContent = 'ir al Home';

  notFoundSection.appendChild(notFoundSectionTitle);
  notFoundSection.appendChild(btnGoHome);

  // Go to /register
  btnGoHome.addEventListener('click', () => navigate('/'));

  return notFoundSection;
};

export default NotFound;
