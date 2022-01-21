import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => (
  <div className="header">
    <div className="navbar">
      <div className="navbar-left">
        <Link to='/'>
          <div className="navbar-item"><HomeIcon /></div>
        </Link>
        <Link to='/getir'>
          <div className="navbar-item"><span>getir</span></div>
        </Link>
        <Link to='/getiryemek'>
          <div className="navbar-item"><span>getir</span>yemek</div>
        </Link>
        <Link to='/getirbuyuk'>
          <div className="navbar-item"><span>getir</span>büyük</div>
        </Link>
        <Link to='/getirsu'>
          <div className="navbar-item"><span>getir</span>su</div>
        </Link>
      </div>
      <div className="navbar-right">
        <div className="navbar-item"><LanguageIcon style={{ "marginRight": "10px" }} />Türkçe(TR)</div>
        <div className="navbar-item"><CardGiftcardIcon style={{ "marginRight": "10px" }} />Kampanyalar</div>
        <div className="navbar-item"><PersonIcon style={{ "marginRight": "10px" }} />Profil</div>
      </div>
    </div>
  </div>
);

export default Header;
