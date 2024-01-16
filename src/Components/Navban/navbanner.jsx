import React from 'react';
import './Navbanner.css';
import Profile from '../../assets/IMG_20231105_191819_182.jpg';
import Logo from '../../assets/IMG_20231104_010107_045.jpg';
import { Link } from 'react-router-dom'

function navbanner() {
  return (
    <>
      <div className="container">
        <div class="sidebar">
          <div class="head">
            <img src={Logo} alt="Image1" />
            <div class="detials">
              <ul>
                <li><i class="fa fa-home" aria-hidden="true"></i>Home</li>
                <li><i class="fas fa-search"></i>Search</li>
                <li><i class="fa-solid fa-pen"></i>Write</li>
                <li><i class="fa-regular fa-heart"></i>Like</li>
              </ul>
              <div class="profile">
                <img src={Profile} alt="Image2" />
              </div>
            </div>
          </div >
        </div >
        <div className="Posts">
          <div className="explore">
            <button className='foryou-btn'>
              foryou
              <button className='explore-btn'>explore</button>
            </button>
          </div>
        </div>
      </div>

      <nav class="sm-navbar">
        <div class="icon-logo"><img src={Logo} alt="Image3" /></div>
        <h3 class="logo">Mainidea</h3>

        <ul class="settings">
          <li><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 9.11V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.11C21 7 21 7 19 5.65L13.5 2.47C12.68 1.99 11.33 1.99 10.5 2.47L5 5.65C3 7 3 7 3 9.11Z"
              stroke="#164757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#164757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg></li>
        </ul>

        <ul class="mobile-list">
          <Link to={'/'}>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
              <path
                d="M25.5007 21.3773V14.057C25.5007 12.9581 25.0617 11.9034 24.2635 11.148C23.3279 10.2626 22.0298 9.06798 20.9818 8.23133C18.9993 6.64872 18.01 5.35565 15.6412 5.35565C13.2725 5.35565 12.2831 6.64872 10.3007 8.23133C9.25267 9.06798 7.95454 10.2626 7.01889 11.148C6.2207 11.9034 5.78175 12.9581 5.78175 14.057V21.3773C5.78175 22.7386 6.88531 23.4773 8.24662 23.4773H11.7608C12.2667 23.4773 12.6768 23.0672 12.6768 22.5613V18.5883V17.7082C12.6768 16.0494 14.0215 14.7046 15.6803 14.7046C17.3391 14.7046 18.6839 16.0494 18.6839 17.7082V18.5883V22.5613C18.6839 23.0672 19.094 23.4773 19.5999 23.4773H23.0358C24.3971 23.4773 25.5007 22.7386 25.5007 21.3773Z"
                stroke="#073B4C" stroke-width="1.74809" />
            </svg></li>
          </Link>

          <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path
              d="M20.3052 19.7257C21.83 18.1935 22.7724 16.0812 22.7724 13.7489C22.7724 9.06919 18.9788 5.27557 14.2991 5.27557C9.61942 5.27557 5.82581 9.06919 5.82581 13.7489C5.82581 18.4285 9.61942 22.2221 14.2991 22.2221C16.6464 22.2221 18.7707 21.2677 20.3052 19.7257ZM20.3052 19.7257L25.2887 24.7092"
              stroke="#073B4C" stroke-width="1.74809" stroke-linecap="round" />
          </svg></li>

          <Link to={'/writer'}>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                d="M15.1298 6.06107H11.6947C8.65921 6.06107 6.19849 8.52179 6.19849 11.5572V18.4275C6.19849 21.4629 8.65921 23.9237 11.6947 23.9237H18.5649C21.6004 23.9237 24.0611 21.4629 24.0611 18.4275V14.9924M15.5704 14.4916L23.2788 6.78325"
                stroke="#073B4C" stroke-width="1.74809" stroke-linecap="round" />
            </svg></li>
          </Link>

          <li><svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <path
              d="M22.9374 7.10078C19.9105 4.65978 16.8154 7.10077 15.7023 8.22281C14.5892 7.10077 11.4941 4.65978 8.46724 7.10078C5.44036 9.54177 4.78252 14.6068 9.02379 18.8822C13.2651 23.1576 15.7023 23.9314 15.7023 23.9314C15.7023 23.9314 18.1396 23.1576 22.3809 18.8822C26.6222 14.6068 25.9643 9.54177 22.9374 7.10078Z"
              stroke="#073B4C" stroke-width="1.74809" />
          </svg></li>
        </ul>
      </nav>

    </>
  )
}

export default navbanner;