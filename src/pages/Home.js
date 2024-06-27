import React from 'react'
import Slider from '../components/Slider'
import Coursers from '../components/Coursers'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div className='h-auto  py-2 '>
        <div className='h-3/4'>
        <Slider />
        </div>
        <Coursers />
        <Testimonial />
    </div>
  )
}

export default Home
