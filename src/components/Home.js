import React from 'react';

function Home(props){
    
    return(
        <div>
            <h1>Home Component</h1>
            <div className="add-to-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjZRboMWVBgq6MBDW3yQ0dRg6_DOduDyQdw&usqp=CAU" />
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeX2xm0hH1u6xnDtjc5eS1OE6H1jz7GP0ktF18HIvovuqA_weHxwNSTQXwqfLcMEgPoqY&usqp=CAU" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
