import React, { useContext } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../store/FirebaseContext';

function Header() {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.style.display = 'flex';
    }
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.style.display = 'none';
    }
  };
  const UserCheck = () => {//User Login,Logout Check After Show Writer Page
    if(user){
      navigate('writer')
    }else{
      navigate('login')
    }
  }

  return (
    <div>
      <nav>
        <ul className='sidebar'>
          <li onClick={hideSidebar}>
            <a href="/#">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </a>
          </li>
          <li onClick={UserCheck}><span className='uniqe'>Share</span></li>
          <li><a href="/#">Discover</a></li>
          <li><a href="/#">Connect</a></li>
          <li>
            <Link to={'/login'}>
              login
            </Link>
          </li>
        </ul>
        <ul>
          <li className='heading'><a href="/#">MainIdea</a></li>
          <li className='hideOnMobile' onClick={UserCheck}><span className='uniqe'>Share</span></li>
          <li className='hideOnMobile'><a href="/#">Discover</a></li>
          <li className='hideOnMobile'><a href="/#">Connect</a></li>
          <li className='hideOnMobile'>
            <Link to={'/login'}>
              login
            </Link>
          </li>
          <li className='menu-button' onClick={showSidebar}>
            <a href="/#">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
