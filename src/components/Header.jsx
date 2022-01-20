import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LanguageIcon from '@mui/icons-material/Language';
import {Link} from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="navbar">
    <div className="navbar-left">
    <Link to='/getir'>
      <div className="navbar-item"><span>getir</span></div>
      </Link>
      
      <Link to='/'>
      <div className="navbar-item"><span>getir</span>yemek</div>
      </Link>
      <div className="navbar-item"><span>getir</span>büyük</div>
      <div className="navbar-item"><span>getir</span>su</div>
    </div>
    <div className="navbar-right">
      <div className="navbar-item"><LanguageIcon style={{"marginRight":"10px"}} />Türkçe(TR)</div>
      <div className="navbar-item"><CardGiftcardIcon style={{"marginRight":"10px"}} />Kampanyalar</div>
      <div className="navbar-item"><PersonIcon style={{"marginRight":"10px"}} />Profil</div>
    </div>
    </div>
  </div>
);

export default Header;
