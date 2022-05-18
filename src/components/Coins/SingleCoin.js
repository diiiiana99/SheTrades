import React from 'react';
import './SingleCoin.css';
import { Fade } from 'react-reveal'
import Tilt from 'react-tilt'


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
    <Tilt>
    <div className='coin-container'>
  
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
    </div>
   </Tilt>
  );
};

export default Coin;