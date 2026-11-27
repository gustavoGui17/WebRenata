import styled from 'styled-components'
import aquarela from '../../img/aquarela-renata.webp'
import { Label, TextLink, Wrap } from './Shared.js'

export const ProductPage = styled.div`
  h1 {
    font-size: clamp(2.75rem, 4.5vw, 5rem);
    line-height: 1.06;
    letter-spacing: -.045em;
    text-wrap: pretty;
  }

  h1 em {
    color: var(--petrol);
    letter-spacing: inherit;
    white-space: normal;
  }

  h2 {
    font-size: clamp(2rem, 3.3vw, 3.3rem);
    text-wrap: pretty;
  }
`

export const ProductHero = styled.section`
  background: ${({ $texture }) => $texture
    ? `linear-gradient(105deg, #fffcf7f2 0%, #fffcf7e8 36%, #fffcf7cc 72%, #fffcf7bd 100%), url(${$texture}) center 54% / cover no-repeat`
    : 'var(--paper)'};
`

export const HeroGrid = styled(Wrap)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 27rem);
  gap: clamp(2rem, 6vw, 7rem);
  align-items: start;
  padding-block: clamp(2.6rem, 5vw, 5.5rem);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const PageLabel = styled(Label)`
  color: var(--magenta);
`

export const Lead = styled.p`
  max-width: 42ch;
  margin-block: 1.35rem 1.75rem;
  color: var(--muted);
  font-size: clamp(1.05rem, 1.5vw, 1.3rem);
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: .9rem 1.35rem;
`

export const PurchaseNote = styled.p`
  margin-top: .8rem;
  color: var(--muted);
  font-size: .875rem;
`

export const PhotoFrame = styled.figure`
  margin: 0;
  padding: clamp(.7rem, 1.6vw, 1.5rem);
  background: linear-gradient(#fffcf74d, #fffcf74d), url(${aquarela}) center / cover;

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1.08;
    object-fit: cover;
    object-position: center 54%;
  }
`

export const CleanPhotoFrame = styled(PhotoFrame)`
  margin: 0;
  padding: 0;
  background: none;
  width: min(100%, 27rem);
  justify-self: end;

  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center 45%;
    border-radius: .4rem;
    box-shadow: 0 14px 32px #18384520;
  }

  @media (max-width: 760px) {
    justify-self: start;
  }
`

export const Artwork = styled.figure`
  margin: 0;
  width: min(100%, 28rem);
  justify-self: center;
  align-self: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`

export const SectionGrid = styled(Wrap)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, .85fr);
  gap: clamp(1.75rem, 7vw, 7rem);
  align-items: start;
  padding-block: clamp(2.5rem, 4.25vw, 4.75rem);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const TextSection = styled(SectionGrid)`
  border-top: 1px solid var(--line);
`

export const TintedSection = styled.section`
  background: var(--mist);
  border-block: 1px solid var(--line);
`

export const ContactSection = styled.section`
  background: var(--cream);
`

export const Copy = styled.div`
  p {
    max-width: 52ch;
    margin-top: .9rem;
    color: var(--muted);
  }
`

export const Steps = styled.dl`
  display: grid;
  gap: .85rem;
  margin: 0;

  > div {
    border-top: 1px solid var(--line);
    padding-top: .7rem;
  }

  dt {
    font-family: var(--serif);
    font-size: 1.3rem;
    font-weight: 600;
  }

  dd {
    margin: .18rem 0 0;
    color: var(--muted);
  }

  ${TextLink} {
    margin-left: .3rem;
  }
`

export const SeasonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .8rem 1rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    gap: .55rem;
    align-items: center;
    padding: .6rem 0;
    border-bottom: 1px solid var(--line);
    font-weight: 600;
  }

  img {
    width: clamp(1.75rem, 4vw, 3.2rem);
    height: auto;
  }
`
