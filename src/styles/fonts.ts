import { css } from 'styled-components'

export const font = (
  size: number,
  weight: number,
  lineHeight: number = 0,
) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${lineHeight || size * 1.5}px;
`

export const fontSize = {
  extraLarge: '36px',
  large: '24px',
  medium: '20px',
  regular: '15px',
  small: '11px',
}
