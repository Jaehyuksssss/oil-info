import React, { ReactElement, useEffect } from 'react'

import TestIcon from '@public/assets/icon.svg'
import { RecoilRoot } from 'recoil'
import GlobalStyle from './styles/globalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginStore from './Pages/LoginStore'

interface Props {}

function App({}: Props): ReactElement {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
  useEffect(() => {
    setScreenSize()
  })
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<LoginStore />} path="/" />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
