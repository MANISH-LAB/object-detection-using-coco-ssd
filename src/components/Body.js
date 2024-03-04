import React from 'react'
import ImageForm from './ImageForm'
import Header from './Header'
import Footer from './Footer'
// import { ObjectDetection } from '@tensorflow-models/coco-ssd'

const Body = () => {
  return (
    <div>
        <Header/>
         <div className="">

         <ImageForm/>
         </div>
         <Footer/>
        
    </div>
  )
}

export default Body