import React, {useState, useEffect} from 'react';
import './SingleCoin.css';
import axios from 'axios';
import { Fade } from 'react-reveal'
import {Link} from 'react-router-dom'

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => 

{
 
  return (
    <div className='coin-container'>
    <Link to='/singlecoin'>
      <div className='coin-row'>
      <Fade left>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        </Fade>
        <Fade right>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
        </Fade>
      </div>
      </Link>
      

    </div>
  );
};

export default Coin;