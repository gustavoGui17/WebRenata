import styled from 'styled-components'
import flor from '../../img/estacao-flor.webp'
import sol from '../../img/estacao-sol.webp'
import folha from '../../img/estacao-folha.webp'
import floco from '../../img/estacao-floco.webp'
import { Link } from '../../router.jsx'

const PillarsSection = styled.section`
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: 1.03fr .98fr 1.22fr .95fr;
  padding: clamp(1.45rem, 2.6vw, 3rem) var(--content-gutter) clamp(1.8rem, 3.25vw, 3.8rem);
  background: var(--cream);

  a {
    display: flex;
    gap: clamp(.7rem, 1.5vw, 1.65rem);
    align-items: flex-start;
    padding: .2rem clamp(.7rem, 2.5vw, 2.7rem);
    text-decoration: none;
    border-left: 1px solid var(--line);
    font-size: clamp(.91rem, 1.15vw, 1.16rem);
    line-height: 1.24;

    &:first-child {
      padding-left: 0;
      border-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    &:hover strong {
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    img {
      flex: 0 0 clamp(37px, 3.6vw, 54px);
      width: clamp(37px, 3.6vw, 54px);
      height: auto;
      aspect-ratio: 1;
      object-fit: contain;
    }

    strong {
      display: block;
      margin: .14rem 0 .45rem;
      font-size: clamp(1.04rem, 1.55vw, 1.6rem);
      letter-spacing: -.03em;
    }
  }

  @media (max-width: 1050px) {
    a {
      padding-inline: 1.1rem;
    }
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    padding: .65rem var(--content-gutter);

    a {
      padding: .9rem .5rem;
      border: 0;

      &:first-child {
        padding-left: .5rem;
      }

      &:nth-child(n+3) {
        border-top: 1px solid var(--line);
      }
    }
  }

  @media (max-width: 390px) {
    a {
      gap: .42rem;
    }

    img {
      width: 32px;
      flex-basis: 32px;
    }
  }
`

const pillars = [
  { image: flor, title: 'Coaching', text: 'Desenvolvimento integral de pessoas e líderes.', to: '/#caminhos' },
  { image: sol, title: 'Arte', text: 'Expressão, presença e autoconhecimento.', to: '/patchwork' },
  { image: folha, title: 'Cultura Organizacional', text: 'Times mais humanos, criativos e engajados.', to: '/#organizacional' },
  { image: floco, title: 'Jornada Interna', text: 'Práticas e ferramentas para mais propósito, equilíbrio e realização.', to: '/journal' },
]

export default function StyledPillars() {
  return (
    <PillarsSection aria-label="Áreas de atuação">
      {pillars.map(({ image, title, text, to }) => (
        <Link key={title} to={to}>
          <img src={image} width="96" height="96" alt="" />
          <span><strong>{title}</strong>{text}</span>
        </Link>
      ))}
    </PillarsSection>
  )
}
