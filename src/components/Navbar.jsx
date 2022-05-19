import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as OffersIcon } from '../assets/svg/localOfferIcon.svg';
import { ReactComponent as HomeIcon } from '../assets/svg/exploreIcon.svg';
import { ReactComponent as ProfileIcon } from '../assets/svg/personOutlineIcon.svg';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatch = (path) => {
    if (path === location.pathname) return true;
  };

  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='navbarListItem' onClick={() => navigate('/')}>
            <HomeIcon
              fill={pathMatch('/') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatch('/')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Home
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/offers')}>
            <OffersIcon
              fill={pathMatch('/offers') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatch('/offers')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Offers
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/profile')}>
            <ProfileIcon
              fill={pathMatch('/profile') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatch('/profile')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Navbar;
