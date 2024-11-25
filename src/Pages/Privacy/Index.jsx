import React from 'react'
import Header from '../Home/header'
import Dashboard from './Dashboard'
import Policy from './Policy'
import Footer from '../Home/Footer'

export default function Index() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <Policy/>
      <Footer/>
    </>
  )
}