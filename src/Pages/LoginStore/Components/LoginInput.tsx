import { flex } from '@src/styles'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import styled from 'styled-components'

interface FormValues {
  password: string
  email: string
}

export default function LoginInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          placeholder="Please write here to Email address"
        />
        {errors.email && errors.email.type === 'required' && (
          <Error>이메일을 입력해주세요</Error>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <Error>잘못된 이메일 형식입니다</Error>
        )}

        <Input
          type="password"
          placeholder="Please write here to password"
          {...register('password', {
            required: 'password is required',
            minLength: {
              value: 6,
              message: '6글자 넘어야해요',
            },
          })}
        />
        {errors?.password?.message && <Error>{errors.password.message}</Error>}
        <Button
          type="submit"
          style={{
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: '18px',
            marginTop: '20px',
          }}
        >
          Next
        </Button>
      </Form>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          color: '#4E6EAD',
          fontSize: '13px',
          marginTop: '20px',
        }}
      >
        혹시 계정이 없다면..?
      </div>
    </div>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  gap: 0.5rem;
`
const Input = styled.input`
  width: 343px;
  height: 53px;
  border: 2px solid black;
`

const Button = styled.button`
  margin-top: 10px;
  width: 343px;
  height: 40px;
  background: black;
  height: 52px;
  border-radius: 6px;
`

const Error = styled.span`
  color: red;
`
