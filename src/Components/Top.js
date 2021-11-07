import React from 'react'
import './../App.css'
import NFTimages from './../assets/images/ryoshinft.png'
import Subtop from './Subtop'

function Top() {

    // $('#auto_radius').circleType();
    return (
        <>
            <div className="main-front">
                <div className="ryoshi">
                    <h1 className="father">RYOSHI is SHIBA's <br /> older, wiser father </h1>
                    <p className='father-subheading'>Decentralized, Deflationanary, community token that is by the poeple, for tge poeple</p>

                    <div className="ryoshi-btns">
                        <button className="buy-on-ryoshiswap"> Buy on RyoshiSwap </button>
                        <button className='explor-ryoshi'>  Explore $RYOSHI </button>
                    </div>
                </div>

                <div className="ryoshi-nft-images">
                    <div>
                    {/* <span id="auto_radius"> Comming Soon - Coomming Soon - Comming Soon</span> */}
                    <img src={NFTimages} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Top
