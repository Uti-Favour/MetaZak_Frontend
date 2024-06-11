import React from 'react'
import { useState, useEffect, useContext } from 'react'
const contents = [
    {
        icon: 'icon',
        title: 'Lorem ipsum dolor sit amet consectetur.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolorem sit veritatis neque officia illum optio tempora mollitia, enim quo consectetur quidem iure esse. Maiores quisquam ad explicabo animi, non obcaecati repudiandae aspernatur natus modi magni eum dolorum laudantium saepe, perspiciatis magnam consequatur assumenda sunt fugiat aliquam tempore error cumque!'
    },
    {
        icon: 'icon',
        title: 'Lorem ipsum dolor sit amet consectetur.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolorem sit veritatis neque officia illum optio tempora mollitia, enim quo consectetur quidem iure esse. Maiores quisquam ad explicabo animi, non obcaecati repudiandae aspernatur natus modi magni eum dolorum laudantium saepe, perspiciatis magnam consequatur assumenda sunt fugiat aliquam tempore error cumque!'
    },
    {
        icon: 'icon',
        title: 'Lorem ipsum dolor sit amet consectetur.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolorem sit veritatis neque officia illum optio tempora mollitia, enim quo consectetur quidem iure esse. Maiores quisquam ad explicabo animi, non obcaecati repudiandae aspernatur natus modi magni eum dolorum laudantium saepe, perspiciatis magnam consequatur assumenda sunt fugiat aliquam tempore error cumque!'
    }

]





const Hero = () => {
    const[{icon , title , description}] = contents;
  return (
   
    <>
     {contents.map((content) =>{
            <div>
                <div>{content.icon}</div>
            <h1 className='text-2xl font-bold'>{content.title}</h1>
            <h2 className='max-w-sm font-base'>{content.description}</h2>
          </div>
        })};
     
    </>
  )
}

export default Hero
