import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import {useStateValue} from './StateProvider';
import { auth } from './firebase';

function Header() {
    
    const [{basket, user}] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut()
        }}
    return (
        <div className='header'>
        <Link to='/'>
            <img className='header__icon' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''></img>
        </Link>
        <div className='header__searchbar'>
            <input type='text'></input>
            <SearchIcon className='searchicon'/>
        </div>
        <div className='header__navigation'>
        <Link to={!user && '/login'}>
            <div onClick={handleAuthenticaton} className='header__link'>
                <p>
                <small>Hello, {!user?'Guest':user.email}</small>
                    <br></br>
                    <strong>{user?'Sign Out':'Sign In'}</strong>
                </p>
            </div>
            </Link>
            <Link to='/orders'>
            <div className='header__link'>
                <p>
                    <small>Returns</small>
                    <br></br>
                    <strong>&orders</strong>
                </p>
            </div>
            </Link>
            <div className='header__link'>
                <p>
                    <small>Your</small>
                    <br></br>
                    <strong>Prime</strong>
                </p>
            </div>
            <Link to='/checkout'>
                <div className='header__link'>
                    <p>
                        <ShoppingCartIcon className='shoppingcart'/>
                        <span> {
                            basket?.length
                        }</span>
                    </p>
                </div>
            </Link>
        </div>
    </div>)
}

export default Header