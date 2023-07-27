import React, { Component } from 'react';
class Card extends Component {
    render() {
        return (
            <>
                <div className="my-card text-white p-3 rounded-3 me-3" >
                    <img src="./public/images/image-equilibrium.jpg" />
                    <h2 className='pt-3'>first Card</h2>
                    <p>first project using vite</p>
                    <div className="card-info d-flex justify-content-between">
                        <span>0.041 ETH</span>
                        <span><i className="fa-regular fa-clock"></i> 3 days left</span>
                    </div>
                    <div className="card-footer d-flex  align-items-center mt-3">
                        <img src="./images/image-avatar.png"  />
                        <p className='mb-0 ms-3'>
                            creation of <a href="https://facebook.com" target='_blank'>Adam & Lawrence</a>
                        </p>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default Card;