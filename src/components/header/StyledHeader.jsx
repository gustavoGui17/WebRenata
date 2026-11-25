import styled from 'styled-components'
import Brand from '../brand/Brand.jsx'
import Social from '../social/Social.jsx'
import { Icon } from '../symbols/Symbols.jsx'
import { Link } from '../../router.jsx'

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 6px 22px #18384512;
`

const Topbar = styled.div`
  background: var(--brand-bar);
  color: #fff9f7;
`

const TopInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 7.35%;
  padding-right: 4%;
  min-height: clamp(48px, 3.85vw, 64px);

  @media (max-width: 760px) {
    padding-inline: 5%;
  }
`

const Workshops = styled(Link)`
  display: flex;
  align-items: center;
  gap: .7rem;
  text-decoration: none;
  text-transform: uppercase;
  font-size: clamp(.75rem, 1.2vw, 1.15rem);
  font-weight: 600;

  svg {
    width: 34px;
    height: 34px;
  }

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`

const HeaderBar = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 7.35%;
  padding-right: 4%;
  min-height: clamp(94px, 8.14vw, 132px);
  background: #fffcf7;
  gap: 2rem;

  @media (max-width: 1050px) {
    gap: 1.1rem;
  }

  @media (max-width: 760px) {
    min-height: auto;
    flex-direction: column;
    align-items: flex-start;
    padding-inline: 5%;
    padding-block: 1.3rem 1rem;
    gap: 1.15rem;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(.7rem, 2vw, 2rem);
  width: 68%;
  padding-left: 4.25%;
  border-left: 1px solid var(--ink);
  font-size: clamp(.9rem, 1.44vw, 1.38rem);
  font-weight: 600;

  a {
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }

  @media (max-width: 1050px) {
    width: auto;
    flex: 1;
    gap: .8rem;
    padding-left: 2%;
  }

  @media (max-width: 760px) {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-left: 0;
    padding-left: 0;
    gap: .35rem 1rem;
    font-size: .95rem;

    a {
      padding-block: .3rem;
    }
  }
`

export default function StyledHeader() {
  return (
    <HeaderWrapper id="inicio">
      <Topbar>
        <TopInner>
          <Social />
          <Workshops to="/#contato">
            <Icon name="calendar" /> Atendimentos e workshops
          </Workshops>
        </TopInner>
      </Topbar>
      <HeaderBar>
        <Brand />
        <Nav aria-label="Navegação principal">
          <Link to="/#sobre">Sobre</Link>
          <Link to="/#caminhos">Coaching</Link>
          <Link to="/journal-quatroestacoesinteriores">Journal</Link>
          <Link to="/oraculodasestrelascaminhantes">Oráculo</Link>
          <Link to="/ebooks">E-books</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/#contato">Contato</Link>
        </Nav>
      </HeaderBar>
    </HeaderWrapper>
  )
}
