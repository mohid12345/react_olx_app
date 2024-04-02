import React, { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';

function Header() {
  const Navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)//for log out from firebase
  const handleLoginClick = ()=>{
    user ? Navigate('/') : Navigate('/login');
  }
  const handleCreateClick = ()=>{
    user ? Navigate('/Create') : Navigate('/login');
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage" onClick={handleLoginClick}>
          <span style={{cursor:'pointer'}} >{user ? user.displayName : 'Login'}</span>
          <hr />
        </div>
        {user && <span style={{cursor:'pointer'}} onClick={()=>{
          firebase.auth().signOut()
          Navigate('/login')
        }}>Logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={handleCreateClick}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
