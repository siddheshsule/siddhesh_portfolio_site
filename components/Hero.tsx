import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import Profile from './Profile'
import About from './About'

const Hero = () => {
  return (
    <div>
        <div>
          <Profile />
          <About />
        </div>
        <BackgroundBeams />
    </div>
  )
}

export default Hero