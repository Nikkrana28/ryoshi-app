import React from 'react'
import './../App.css'

function Subtop(props) {
    return (
        <div className='subtop'>
            <div className='icon-links'>
                <p> Read our <a className="goldpaper-link">Goldpaper, Aduit</a></p>
                <div className='icon'>
                    {/* <img className="soicalicon" src={icon1} />
                    <img className="soicalicon" src={icon2} />
                    <img className="soicalicon" src={icon3} />
                    <img className="soicalicon" src={icon4} />
                    <img className="soicalicon" src={icon5} />
                    <img className="soicalicon" src={icon6} /> */}

                </div>
            </div>

            <div className='pricing'>
                <div className='holders'>
                    <h3>30,422</h3>
                    <h6>Holders</h6>
                    <p style={{ fontSize: "10px" }}>A rapidly grwoing community with a common mission of going to the Moon</p>

                </div>
                <div className='holders'>
                    <h3>58,89%</h3>
                    <h6>Total Burn</h6>
                    <p style={{ fontSize: "10px" }}>Half of the supplu is burnt at launch, and 2% is burnt in each transaction</p>

                </div>
            </div>
        </div>
    )
}

export default Subtop

