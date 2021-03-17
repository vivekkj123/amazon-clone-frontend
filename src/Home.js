import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg' alt=''></img>
            <div className='home__row'>

                <Product id='392193' name='Apple iPhone 11 (128GB) - Black ' image='https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg'
                    price={69900.00}
                    rating={5}/>
                <Product id='586104' name='Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band ' image='https://images-na.ssl-images-amazon.com/images/I/71EoGntO5bL._SL1500_.jpg'
                    price={23900.00}
                    rating={5}/>
            </div>
            <div className='home__row'>
                <Product id='603807' name='Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black) ' image='https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg'
                    price={3499.00}
                    rating={4}/>
                <Product id='962294' name='Mediweave KN95 (Equivalent to N95, FFP2) Mask/Respirator,CE certified, Pack of 5 ' image='https://images-na.ssl-images-amazon.com/images/I/51lVFg1iKIL._SL1062_.jpg'
                    price={399.00}
                    rating={3}/>
                <Product id='502109' name='Ubuntu 20.04 LTS (Focal Fossa) Desktop - Install/Live USB (64-bit)  ' image='https://images-na.ssl-images-amazon.com/images/I/61%2B2V4OxsJL._SL1280_.jpg'
                    price={1099.00}
                    rating={4}/>
            </div>
            <div className='home__row'>
                <Product id='712370' name='Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver ' image='https://images-na.ssl-images-amazon.com/images/I/71sBGR6LZhL._SL1500_.jpg'
                    price={12999.00}
                    rating={4}/>
            </div>
            </div>
        </div>

    )
}

export default Home
