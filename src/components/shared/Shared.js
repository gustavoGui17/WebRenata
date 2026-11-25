import styled, { css, keyframes } from 'styled-components'

const cardReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: none;
  }
`

export const cardMotion = (index = 0) => css`
  animation: ${cardReveal} .45s ease both;
  animation-delay: ${Math.min(index, 12) * 35}ms;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--petrol);
    box-shadow: 0 12px 28px #18384518;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;

    &:hover {
      transform: none;
    }
  }
`

export const Wrap = styled.div`
  margin-inline: var(--content-gutter);
  text-align: start;
`

export const Section = styled.section`
  margin-inline: var(--content-gutter);
  text-align: start;
  padding-block: clamp(2.5rem, 4.25vw, 4.75rem);
`

export const Label = styled.p`
  font-size: .875rem;
  letter-spacing: .13em;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--violet);
  margin-bottom: 1rem;
`

export const TextLink = styled.a`
  font-weight: 700;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
  transition: color .2s ease;

  &:hover {
    color: #27667e;
  }
`

export const Button = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: .65rem;
  border: 1px solid transparent;
  border-radius: 999px;
  min-height: 48px;
  padding: .6em clamp(.85rem, 1.5vw, 1.65rem);
  font-size: clamp(.95rem, 1.22vw, 1.3rem);
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
  transition: background-color .2s ease, color .2s ease, filter .2s ease, border-color .2s ease;

  svg {
    width: clamp(22px, 1.8vw, 32px);
    height: clamp(22px, 1.8vw, 32px);
  }
`

export const PrimaryButton = styled(Button)`
  background: var(--magenta);
  color: #fff7f8;

  &:hover {
    filter: brightness(.9);
  }
`

export const OutlineButton = styled(Button)`
  border-color: var(--petrol);
  color: var(--petrol);

  &:hover {
    background: #f2f8ed;
  }
`
