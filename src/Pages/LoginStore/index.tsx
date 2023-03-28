import React from 'react'
import styled from 'styled-components'
import LoginInput from './Components/LoginInput'
import LoginTitle from './Components/LoginInput'

export default function LoginStore() {
  return (
    <LoginContainer>
      <LoginWrapper>
        <TitleContiner>
          <img src="public/assets/title.png" alt="" />
        </TitleContiner>
        <InputContainer>
          <LoginInput />
        </InputContainer>
      </LoginWrapper>
    </LoginContainer>
  )
}
export const LoginContainer = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TitleContiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const LoginWrapper = styled.div`
  gap: 3rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
