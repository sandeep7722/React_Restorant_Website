import React from 'react';

function Header() {
    return (
        <div id='main'>
            <div className='header-heading'>
                <h3>It's Greate time for a good taste of Burger.</h3>
                <h1><span>BURGER</span>FOR<br/>WEEK</h1>
                <p className='details'>A good restaurant sets a high standard 
                 for its food quality <br/> and ensures that guests receive the same quality with every meal.</p>
                <div className='header-btns'>
                    <a href='#' className='header-btn'>Order</a>

                </div>
            </div>
            
        </div>
    )
}

export default Header;
