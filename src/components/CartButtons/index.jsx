import React from 'react';
import {UserCircleIcon,ShoppingCartIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import { useProductsContext } from '../../context/products_context';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
import { default_profile_image } from '../../utils/constants';

const CartButtons = () => {
  const { currentUser } = useUserContext();
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();

  return (
    <Wrapper>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        
        <span className='cart-container'>
          <ShoppingCartIcon style={{height:'30px', width:`27px`}}/>
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {!currentUser ? (
        <Link to='/login' className='auth-btn' onClick={closeSidebar}>
          <UserCircleIcon style={{height:'30px', width:`30px`}}/>
        </Link>
      ) : (
        <Link to='/profile' className='profile-btn' onClick={closeSidebar}>
          <img
            src={currentUser.photoURL || default_profile_image}
            alt='profile'
          />
        </Link>
      )}
    </Wrapper>
  );
};

export default CartButtons;
