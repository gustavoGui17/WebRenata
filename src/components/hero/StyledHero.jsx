import styled from 'styled-components'
import heroPhoto from '../../img/retrato-abertura.webp'
import aquarela from '../../img/aquarela-renata.webp'
import { Icon } from '../symbols/Symbols.jsx'
import { Link } from '../../router.jsx'
import { OutlineButton, PrimaryButton } from '../shared/Shared.js'

const HeroSection = styled.section`
  position: relative;
  isolation: isolate;
  min-height: clamp(490px, 44vw, 740px);
  display: grid;
  grid-template-columns: 47% 53%;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(105deg, #f0ece3 15%, var(--paper) 58%);

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    inset: 0 0 0 42%;
    background: linear-gradient(90deg, var(--paper), #fffcf7d1 38%, #fffcf78c), url(${aquarela}) center 54% / cover no-repeat;
  }

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    min-height: auto;

    &::before {
      inset: 0;
      background-position: center 39%;
    }
  }
`

const HeroPhoto = styled.div`
  position: absolute;
  z-index: -1;
  inset: 0 auto 0 0;
  width: 52%;
  overflow: hidden;
  mask-image: linear-gradient(90deg, #000 75%, #000e 82%, #0009 90%, transparent 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 25%;
  }

  @media (max-width: 760px) {
    position: relative;
    inset: auto;
    width: 100%;
    order: 2;
    mask-image: linear-gradient(180deg, transparent, #000 12%);

    img {
      width: 100%;
      height: clamp(310px, 100vw, 530px);
      object-position: center 20%;
    }
  }
`

const HeroCopy = styled.div`
  grid-column: 2;
  padding: 3vw 4% 3.5vw clamp(0px, 1.4vw, 22px);

  &::before {
    content: '';
    display: block;
    width: 6rem;
    height: 2px;
    margin-bottom: 1.25rem;
    background: var(--spectrum);
  }

  @media (max-width: 760px) {
    width: 100%;
    padding: 2.2rem 5% 1.8rem;
  }
`

const Title = styled.h1`
  font-size: clamp(2.65rem, 5.35vw, 6rem);
  letter-spacing: -.052em;
  line-height: 1.075;

  em {
    position: relative;
    white-space: nowrap;
    letter-spacing: -.06em;

    svg {
      position: absolute;
      left: 24%;
      bottom: -.06em;
      width: 86%;
      height: .22em;
      overflow: visible;
      fill: var(--peach);
    }
  }

  @media (max-width: 760px) {
    font-size: clamp(2.15rem, 7.8vw, 4.3rem);
  }
`

const HeroText = styled.p`
  max-width: 38ch;
  margin: 1.15em 0 1.55em;
  font-size: clamp(1.1rem, 1.55vw, 1.7rem);
  line-height: 1.45;

  @media (max-width: 760px) {
    margin-block: 1.3rem;
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(.6rem, 1.42vw, 1.5rem);
  flex-wrap: wrap;

  @media (max-width: 760px) {
    gap: .65rem;
  }
`

export default function StyledHero() {
  return (
    <HeroSection aria-labelledby="hero-title">
      <HeroPhoto>
        <img src={heroPhoto} width="738" height="1107" alt="Renata Lis" />
      </HeroPhoto>
      <HeroCopy>
        <Title id="hero-title">
          Liderança humana<br />
          com <em>Propósito<svg viewBox="0 0 370 31" preserveAspectRatio="none" aria-hidden="true"><path d="M0 12c70 49 255-41 370 5C251-16 73 70 0 12Z" /></svg></em>
        </Title>
        <HeroText>
          Coaching para fazer escolhas com mais clareza e vivências criativas para equipes que querem trabalhar melhor juntas.
        </HeroText>
        <Actions>
          <PrimaryButton as={Link} to="/#sobre">
            <Icon name="lotus" /> Conheça meu propósito
          </PrimaryButton>
          <OutlineButton as={Link} to="/#contato">
            <Icon name="calendar" /> Agende seu atendimento
          </OutlineButton>
        </Actions>
      </HeroCopy>
    </HeroSection>
  )
}
