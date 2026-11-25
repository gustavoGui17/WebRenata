import styled from 'styled-components'
import logo from '../../img/logo-renata.webp'
import { Link } from '../../router.jsx'

const BrandLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: .65rem;
  flex: none;
  font: 400 clamp(1.45rem, 2.8vw, 2.75rem)/1 var(--sans);
  letter-spacing: .105em;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  small {
    display: block;
    margin-top: .55rem;
    font: 500 clamp(.62rem, .95vw, .93rem)/1 var(--sans);
    letter-spacing: .16em;
  }

  img {
    width: clamp(56px, 7vw, 108px);
    height: auto;
    mix-blend-mode: multiply;
  }
`

export default function Brand() {
  return (
    <BrandLink to="/#inicio">
      <span>Renata Lis <small>Coaching com Arte</small></span>
      <img src={logo} width="580" height="249" alt="" />
    </BrandLink>
  )
}
