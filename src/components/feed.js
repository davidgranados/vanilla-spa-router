import { navigate } from '../router.js';

const Feed = () => {
  const feedSection = document.createElement('section');
  const feedSectionTitle = document.createElement('h1');
  feedSectionTitle.textContent = 'Feed';

  const btnGoBack = document.createElement('button');
  btnGoBack.textContent = 'Volver';

  feedSection.appendChild(feedSectionTitle);
  feedSection.appendChild(btnGoBack);

  // Go to /register
  btnGoBack.addEventListener('click', () => navigate('/'));

  return feedSection;
};

export default Feed;
