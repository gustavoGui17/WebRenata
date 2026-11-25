import styled from 'styled-components'
import journal from '../../img/journal-renata.webp'
import oraculo from '../../img/oraculo-renata.webp'
import { Link } from '../../router.jsx'
import { cardMotion, Label, OutlineButton, Wrap } from '../shared/Shared.js'

const CreationsSection = styled.section`
  border-block: 1px solid var(--line);
  background: var(--cream);
`

const CreationsInner = styled(Wrap)`
  padding-block: clamp(2.5rem, 4.25vw, 4.75rem);
`

const Intro = styled.p`
  margin: .7rem 0 clamp(1.6rem, 3vw, 2.6rem);
  color: var(--muted);
  text-wrap: balance;
  width: fit-content;
`

const CreationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 3vw, 2.5rem);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const CreationCard = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: .8rem;
  background: var(--paper);
  box-shadow: 0 6px 22px #1838450b;
  ${({ $index = 0 }) => cardMotion($index)}

  > img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1.9;
    object-fit: cover;
    object-position: center 55%;
  }
`

const CreationCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(1.2rem, 3vw, 2.4rem);
  flex: 1;

  ${Label} {
    margin: 0 0 .55rem;
    color: var(--petrol);
  }

  h3 {
    font-size: clamp(1.35rem, 2.35vw, 2.2rem);
  }

  p:not(${Label}) {
    margin: .85rem 0 1.3rem;
    color: var(--muted);
    max-width: 58ch;
  }

  ${OutlineButton} {
    margin-top: auto;
    border-color: #a9bbb4;

    &:hover {
      border-color: var(--petrol);
    }
  }
`

const creations = [
  {
    image: journal,
    alt: 'Cadernos da Jornada das Quatro Estações Interiores',
    label: 'Journal',
    title: 'Jornada das Quatro Estações Interiores',
    text: 'Criei este caderno físico para unir agenda e diário de reflexão. Ao longo das quatro estações, as festas cristãs, vistas pela antroposofia, são um ponto de partida para observar o que você vive e registrar suas percepções no dia a dia.',
    link: '/journal-quatroestacoesinteriores',
    linkText: 'Conheça o Journal',
  },
  {
    image: oraculo,
    alt: 'Cartas do Oráculo das Estrelas Caminhantes',
    label: 'Oráculo',
    title: 'Oráculo das Estrelas Caminhantes',
    text: 'Inspiradas nas qualidades anímicas que a antroposofia associa aos sete planetas, as cartas convidam a refletir sobre diferentes maneiras de sentir e agir. Também uso o oráculo nos atendimentos de coaching e terapia.',
    link: '/oraculodasestrelascaminhantes',
    linkText: 'Conheça o Oráculo',
  },
]

export default function StyledCriacoes() {
  return (
    <CreationsSection id="criacoes" aria-labelledby="creations-title">
      <CreationsInner>
        <h2 id="creations-title">Criações da Renata</h2>
        <Intro>Duas criações para cultivar o autoconhecimento.</Intro>
        <CreationGrid>
          {creations.map(({ image, alt, label, title, text, link, linkText }, index) => (
            <CreationCard key={title} $index={index}>
              <img src={image} width="520" height="410" loading="lazy" alt={alt} />
              <CreationCopy>
                <Label>{label}</Label>
                <h3>{title}</h3>
                <p>{text}</p>
                <OutlineButton as={Link} to={link}>{linkText}</OutlineButton>
              </CreationCopy>
            </CreationCard>
          ))}
        </CreationGrid>
      </CreationsInner>
    </CreationsSection>
  )
}
