import styled from 'styled-components'
import { RouterProvider, useRoute } from './router.jsx'
import Symbols from './components/symbols/Symbols.jsx'
import StyledHeader from './components/header/StyledHeader.jsx'
import StyledHero from './components/hero/StyledHero.jsx'
import StyledPillars from './components/pillars/StyledPillars.jsx'
import StyledCriacoes from './components/criacoes/StyledCriacoes.jsx'
import StyledCaminhos from './components/caminhos/StyledCaminhos.jsx'
import StyledSobre from './components/sobre/StyledSobre.jsx'
import StyledContato from './components/contato/StyledContato.jsx'
import StyledFooter from './components/footer/StyledFooter.jsx'
import StyledAntroposofia from './components/antroposofia/StyledAntroposofia.jsx'
import StyledCoaching from './components/coaching/StyledCoaching.jsx'
import StyledPatchwork from './components/patchwork/StyledPatchwork.jsx'
import StyledRitmos from './components/ritmos/StyledRitmos.jsx'
import StyledEbooks from './components/ebooks/StyledEbooks.jsx'
import StyledBlog from './components/blog/StyledBlog.jsx'
import StyledHistoria from './components/historia/StyledHistoria.jsx'
import StyledJournal from './components/journal/StyledJournal.jsx'
import StyledOraculo from './components/oraculo/StyledOraculo.jsx'
import { BlogPostView, EbookView, NotFoundView, PageView } from './components/page/StyledPage.jsx'

const SkipLink = styled.a`
  position: absolute;
  top: 0;
  left: 1rem;
  padding: .5rem 1rem;
  background: white;
  transform: translateY(-120%);
  z-index: 20;

  &:focus {
    transform: none;
  }
`

function Landing() {
  return (
    <>
      <StyledHero />
      <StyledPillars />
      <StyledCriacoes />
      <StyledCaminhos />
      <StyledSobre />
      <StyledContato />
    </>
  )
}

function Routes() {
  const { pathname } = useRoute()
  const parts = pathname.split('/').filter(Boolean).map(decodeURIComponent)

  if (!parts.length) return <Landing />
  if (parts[0] === 'blog' && parts.length === 2) return <BlogPostView slug={parts[1]} />
  if (parts[0] === 'ebooks' && parts.length === 2) return <EbookView slug={parts[1]} />
  if (parts.length === 1) {
    if (parts[0] === 'antroposofia') return <StyledAntroposofia />
    if (parts[0] === 'coaching') return <StyledCoaching />
    if (parts[0] === 'patchwork') return <StyledPatchwork />
    if (parts[0] === 'ritmos-da-vida') return <StyledRitmos />
    if (parts[0] === 'ebooks') return <StyledEbooks />
    if (parts[0] === 'blog') return <StyledBlog />
    if (parts[0] === 'minha-historia') return <StyledHistoria />
    if (parts[0] === 'journal' || parts[0] === 'journal-quatroestacoesinteriores') return <StyledJournal />
    if (parts[0] === 'oraculo' || parts[0] === 'oraculodasestrelascaminhantes') return <StyledOraculo />
    return <PageView slug={parts[0]} />
  }
  return <NotFoundView />
}

export default function App() {
  return (
    <RouterProvider>
      <SkipLink href="#conteudo">Pular para o conteúdo</SkipLink>
      <Symbols />
      <StyledHeader />
      <main id="conteudo">
        <Routes />
      </main>
      <StyledFooter />
    </RouterProvider>
  )
}
