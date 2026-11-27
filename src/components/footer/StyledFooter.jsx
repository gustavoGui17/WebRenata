import styled from 'styled-components'
import Brand from '../brand/Brand.jsx'
import Social from '../social/Social.jsx'
import { Link } from '../../router.jsx'
import { TextLink, Wrap } from '../shared/Shared.js'

const FooterSection = styled.footer`
  background: var(--brand-footer);
`

const FooterBar = styled(Wrap)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 112px;
  padding-block: 1.2rem;

  @media (max-width: 760px) {
    flex-wrap: wrap;
  }
`

export default function StyledFooter() {
  return (
    <FooterSection>
      <FooterBar>
        <Brand />
        <span>São Paulo, Brasil</span>
        <Social compact />
        <TextLink as={Link} to="/#inicio">Voltar ao início</TextLink>
      </FooterBar>
    </FooterSection>
  )
}
