import React, { ReactElement, useEffect } from 'react'

import { RecoilRoot } from 'recoil'
import GlobalStyle from './styles/globalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SelectStore from './Pages/SelectStore'
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
          <Route element={<SelectStore />} path="/select" />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
