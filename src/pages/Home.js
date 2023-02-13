import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import HouseList from '../components/HouseList'

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
     <Banner/>
     <HouseList/>
     <Footer/>
    </div>
  )
}

export default Home
