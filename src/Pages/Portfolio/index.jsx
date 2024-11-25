import React from 'react'
import Header from '../Home/header'
import Dashboard from './Dashboard'
import Portfolio from './Portfolio'
import Footer from '../Home/Footer'

export default function Index() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <Portfolio/>
      <Footer/>
    </>
  )
}
