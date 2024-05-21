import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div><p>HOME</p>
    <UserButton afterSignOutUrl='/'></UserButton></div>
  )
}

export default Home