import './Card.css';
import logo from './imgs/logo.svg'
import karzina from './imgs/icon-cart.svg'
import avatar from './imgs/image-avatar.png'
import one from './imgs/image-product-1.jpg'
import two from './imgs/image-product-1-thumbnail.jpg'
import three from './imgs/image-product-2-thumbnail.jpg'
import four from './imgs/image-product-3-thumbnail.jpg'
import five from './imgs/image-product-4-thumbnail.jpg'
import { useState } from 'react';





function Card() {
   
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        setCount(count - 1)
    };


  return (
    <div>
      <header>
        <nav>
            <div className="menu">
                <img src={logo} alt="" />

                <ul class="nav-content">
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>


            <div class="nav-div2">
                <img src={karzina} alt="" />
                <span className='karzina'>{count}</span>
                <img className='avatar' src={avatar} alt="" />
            </div>

        </nav>
        <div class="line"></div>    
    </header>
    

    <section>
        <div className="section-content">
          
            <div className="images">
                
                <div>
                <img className='imgssss' src={one} alt="" />
                </div>

                <div className="images-imgs">
                    <img className='imgss' src={two} alt="" />
                    <img className='imgss' src={three} alt="" />
                    <img className='imgss' src={four} alt="" />
                    <img className='imgss' src={five} alt="" />



                </div>

            </div>
           
            <div className="text">
                <p className="text-p">Sneaker Company</p>
                <h1>Fall Limited Edition Sneakers</h1>

                <p className='textss'>
                  These low-profile sneakers are your perfect casual wear <br />
                  companion. Featuring a durable rubber outer sole, they’ll <br />
                  withstand everything the weather can offer. <br />
                </p>

                <div className="dollar-x">
                    <p className="dollar"> $125.00</p>
                    <button className="dollar-xx">
                        <span>50%</span>
                    </button>
                </div>

                <del className="del">$250.00</del>

                <div className="btn">
                    <div className='div__div'>
                    <button className="btn-1">
                        <h2 onClick={decrement}>--</h2>
                        <span>{count}</span>
                        <h2 onClick={increment}>+</h2>
                    </button>   
                    </div>

                    <button className="btn-2">
                    <img className='add' src={karzina} alt="" />
                        <span className='add_text'>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    </section>



    </div>
  );
};

export default Card;
