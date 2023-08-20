
"use client"
import React from 'react'
import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
// import Portfolio from './components/portfolio'

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Footer/>
    {/* <Portfolio/> */}
    </>
  )
}
