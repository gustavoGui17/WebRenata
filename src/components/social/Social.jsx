import styled, { css } from 'styled-components'
import { Icon } from '../symbols/Symbols.jsx'

const SocialList = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ $compact }) => ($compact ? '.6rem' : '1.4rem')};

  a {
    display: inline-grid;
    place-items: center;
    text-decoration: none;
    width: 30px;
    height: 35px;
    font-size: 1.8rem;
    line-height: 1;

    ${({ $compact }) =>
      $compact &&
      css`
        border: 1px solid #c7d8cc;
        border-radius: 50%;
        width: 42px;
        height: 42px;
        font-size: 1.15rem;

        &:hover {
          background: #e5eee3;
        }
      `}
  }

  svg {
    width: ${({ $compact }) => ($compact ? '1.2rem' : '28px')};
    height: ${({ $compact }) => ($compact ? '1.2rem' : '28px')};
  }
`

const instagram = (
  <a href="https://www.instagram.com/renataliscoach/" aria-label="Instagram">
    <Icon name="instagram" />
  </a>
)

const linkedin = (
  <a href="https://www.linkedin.com/in/renata-lis-bellinello" aria-label="LinkedIn">
    <b aria-hidden="true">in</b>
  </a>
)

export default function Social({ compact = false }) {
  return (
    <SocialList $compact={compact} role={compact ? 'group' : undefined} aria-label={compact ? 'Redes sociais da Renata' : undefined}>
      {compact ? instagram : linkedin}
      {compact ? linkedin : instagram}
      {compact && (
        <a href="https://t.me/joinchat/AAAAAEYHq4LBmMCBt-x8gw" aria-label="Telegram">
          <Icon name="telegram" />
        </a>
      )}
    </SocialList>
  )
}
