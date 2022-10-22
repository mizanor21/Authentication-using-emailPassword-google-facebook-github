import React from 'react';
import backgroundImg from '../assets/img/bg.png'

const Home = () => {
    return (
        <div className='flex items-center justify-center container mx-auto'>
            <img className='w-1/3 ' src={backgroundImg} alt="" />
        </div>
    );
};

export default Home;