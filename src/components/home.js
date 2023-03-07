import { navigate } from '../router.js';

const Home = () => {
  const homeSection = document.createElement('section');
  const homeSectionTitle = document.createElement('h1');
  homeSectionTitle.textContent = 'Home';

  const btnHomeRegister = document.createElement('button');
  btnHomeRegister.textContent = 'Register';

  const btnHomeFeed = document.createElement('button');
  btnHomeFeed.textContent = 'Feed';

  homeSection.appendChild(homeSectionTitle);
  homeSection.appendChild(btnHomeRegister);
  homeSection.appendChild(btnHomeFeed);

  // Go to /register
  btnHomeRegister.addEventListener('click', async () => {
    navigate('/register');
  });
  // Go to /feed
  btnHomeFeed.addEventListener('click', async () => {
    navigate('/feed');
  });

  return homeSection;
};

export default Home;
