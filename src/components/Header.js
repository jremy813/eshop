import React, { useState } from 'react'
import './Header.scss'
import Logo from '../assets/noun_cloth_2129414.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {

    const [clicked, setClicked] = useState(false)
    return (
        <div className='header'>
            <div className='header__Left'>
                <img src={Logo} alt='logo'/>
                <span>E-Shop</span>
            </div>
            <div className={`${clicked ? 'header__Middle ' : 'none'}`} >
            <ul>
                <CloseIcon onClick={()=> setClicked(!clicked)} className='close' />
                <li>Mens</li>
                <li>Womens</li>
                <li>Kids</li>
            </ul>
            </div>
            <div className='header__Right'>
                <SearchIcon className='icon' style={{fontSize:'30px'}}/>
                <ShoppingCartOutlinedIcon className='icon' style={{fontSize:'30px'}}/>
                <MenuIcon onClick={() => setClicked(!clicked)} className={`${clicked ? 'none' : 'icon'}`} style={{fontSize:'35px', position:'relative', zIndex:'10'}}/>
            </div>
        </div>
    )
}

export default Header
