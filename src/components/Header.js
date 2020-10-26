import React from 'react'
import './Header.scss'
import Logo from '../assets/noun_cloth_2129414.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className='header'>
            <div className='header__Left'>
                <img src={Logo} alt='logo'/>
                <span>E-Shop</span>
            </div>
            <div className='header__Middle'>
                <span>Men</span>
                <span>Women</span>
                <span>Kids</span>
            </div>
            <div className='header__Right'>
                <SearchIcon className='icon' style={{fontSize:'30px'}}/>
                <ShoppingCartOutlinedIcon className='icon' style={{fontSize:'30px'}}/>
                <MenuIcon  className='icon' style={{fontSize:'35px'}}/>
            </div>
        </div>
    )
}

export default Header
