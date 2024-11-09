import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/HeroSection'
import Messages from '@/components/Messages'
import Navbar from '@/components/Navbar'
import Port from '@/components/Portfolio'
import Pricing from '@/components/Pricing'
import Project from '@/components/Project'
import Services from '@/components/Services'
import Staff from '@/components/Staff'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Services/>
      <Project/>
      <Staff/>
      <Port/>
      <Pricing/>
      <Testimonials/>
      <Messages/>
      <Footer/>
    </div>
  )
}

export default page
