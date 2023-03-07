import { navigate } from '../router.js';

const Register = () => {
  const registerSection = document.createElement('section');
  const registerSectionTitle = document.createElement('h1');
  registerSectionTitle.textContent = 'Register';

  const btnGoBack = document.createElement('button');
  btnGoBack.textContent = 'Volver';

  registerSection.appendChild(registerSectionTitle);
  registerSection.appendChild(btnGoBack);

  // Go to /register
  btnGoBack.addEventListener('click', () => navigate('/'));

  return registerSection;
};

export default Register;
