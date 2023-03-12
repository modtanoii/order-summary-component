import React from 'react';
import Card from './Card'
import './OrderSummary.css'
import HeaderBG from '../images/illustration-hero.svg'
import MusicIcon from '../images/icon-music.svg'

const OrderSummary = () => {
  return (
    <Card>
            <div className="header">
                <img src={HeaderBG} alt="" />
            </div>

            <div className="content">
                <h2 className='title'>Order Summary</h2>
                <p className='text'>You can now listen to millions of songs, audiobooks, and podcasts on any 
                device anywhere you like!</p>

                <div className="order-plan">
                    <img src={MusicIcon} alt="" />
                    <p>Annual Plan</p>
                    <p className='text'>$59.99/year</p>
                    <p><a href="/">Change</a></p>
                </div>

                <div className="proceed-btn">
                    <p>Proceed to Payment</p>
                </div>

                <div className="cancel-btn">
                    <p>Cancel Order</p>
                </div>
            </div>
    </Card>
  );
};

export default OrderSummary;