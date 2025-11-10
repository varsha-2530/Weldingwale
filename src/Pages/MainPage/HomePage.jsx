import React from 'react'
import HeroSection from '../../Components/HomePageSection/HeroSection'
import DoorstepServices from '../../Components/HomePageSection/DoorstepServices'
import OurServicesSection from '../../Components/HomePageSection/ServicesSection/OurServicesSection'
import ServicesSection from '../../Components/HomePageSection/ServicesSection/ServicesSection'
import FurnitureStoreSection from '../../Components/HomePageSection/FurnitureStoreSection'
import Testimonials from '../../Components/HomePageSection/CustomerTestimonials/Testimonials'


const HomePage = () => {
  return (
    <>
     <section>
       <HeroSection />
     </section>

     <section>
      <DoorstepServices />
     </section>

     <section>
      <OurServicesSection />  
     </section>

     <section>
      <ServicesSection />
     </section>

     <section>
      <FurnitureStoreSection />
     </section>

     <section>
      <Testimonials />
     </section>
    </>
  )
}   

export default HomePage
