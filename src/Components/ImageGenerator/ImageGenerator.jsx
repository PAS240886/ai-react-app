import React from 'react'
import { useState, useRef } from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'

const ImageGenerator = () => {

    const [image_url, setImage_url] = useState('/');
    let inputRef = useRef(null);

    const ImageGenerator = async () => {
        if (inputRef===''){
            return 0;
        }
        return 0;
    }


  return (
    <div className='ai-image-generator'>
        <div className='header'>AI IMAGE <span>GENERATOR</span></div>
        <div className='img-loading'>
            <div className='image'><img src={image_url==='/'?default_image:image_url}></img></div>
        </div>
      <div className='search-box'>
        <input type='text' ref={inputRef} className='search-input' placeholder='Describe What You Want To See'></input>
        <div className='generate-btn'>Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator
