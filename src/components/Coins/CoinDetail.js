import React from 'react'


const CoinDetail = ({data}) => {
    return (
        <div className='coin-row'>
            <p>{data.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={data.image} alt='' />
                <p>{data.symbol.toUpperCase()}</p>
            </div>
            <p>${data.current_price.toLocaleString()}</p>
            <p>{data.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide-mobile'>${data.total_volume.toLocaleString()}</p>
            <p className='hide-mobile'>${data.market_cap.toLocaleString()}</p>
        </div>
    )
}

export default CoinDetail
