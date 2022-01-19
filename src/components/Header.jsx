import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LanguageIcon from '@mui/icons-material/Language';

const Header = () => (
  <div className="header">
    <div className="navbar">
    <div className="navbar-left">
      <div className="navbar-item"><span>getir</span></div>
      <div className="navbar-item"><span>getir</span>yemek</div>
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
