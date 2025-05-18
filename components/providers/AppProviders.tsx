import { ThemeProvider } from 'next-themes'
import React from 'react'

const AppProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider attribute={"class"} defaultTheme='light' enableSystem={false}>
        {children}
    </ThemeProvider>
  )
}

export default AppProviders