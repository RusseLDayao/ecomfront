import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/Popular/Popular'
import  Offers from '../components/Offers/Offers'
import  NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../NewsLetter/NewsLetter'


const NewDrop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default NewDrop ;