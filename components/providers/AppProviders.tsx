"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

const AppProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider attribute={"class"} defaultTheme='system' enableSystem={true}>
        {children}
    </ThemeProvider>
  )
}

export default AppProviders