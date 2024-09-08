import React from 'react'
import './Container.css'
export const Container = ({children}) => {
  return (
    <main className="container">
        {children}
    </main>
  )
}
