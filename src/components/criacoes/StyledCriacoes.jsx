import styled from 'styled-components'
import aquarela from '../../img/aquarela-renata.webp'
import mandala from '../../img/antroposofia-mandala.webp'
import journal from '../../img/journal-renata.webp'
import oraculo from '../../img/oraculo/oraculo-capa.webp'
import { Link } from '../../router.jsx'
import { cardMotion, Label, PrimaryButton, Wrap } from '../shared/Shared.js'

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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(.9rem, 2.5vw, 1.6rem);

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
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
`

const CoverImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: ${({ $position }) => $position || 'center 55%'};
`

const MandalaFrame = styled.figure`
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  margin: 0;
  background: linear-gradient(#fffcf7b5, #fffcf7b5), url(${aquarela}) center / cover;

  img {
    width: 72%;
    height: auto;
    object-fit: contain;
  }
`

const CreationCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(1rem, 1.7vw, 1.45rem);
  flex: 1;

  ${Label} {
    margin: 0 0 .55rem;
    color: var(--petrol);
  }

  h3 {
    font-size: clamp(1.35rem, 1.9vw, 1.85rem);
  }

  p:not(${Label}) {
    margin: .85rem 0 1.3rem;
    color: var(--muted);
    max-width: 58ch;
  }
`

const CreationButton = styled(PrimaryButton)`
  width: 100%;
  min-width: 0;
  margin-top: auto;
  white-space: normal;
  text-align: center;
  background: ${({ $tone }) => $tone};
  border-color: transparent;

  &:hover {
    filter: brightness(.94);
  }
`

const creations = [
  {
    image: mandala,
    mandala: true,
    alt: 'Mandala dourada',
    title: 'Antroposofia',
    text: 'A antroposofia faz parte de como observo os ritmos da natureza e as mudanças que vivemos. Esse olhar está presente nos meus atendimentos e também inspirou o Journal e o Oráculo.',
    link: '/antroposofia',
    linkText: 'Conheça meu olhar',
    tone: '#805619',
  },
  {
    image: journal,
    alt: 'Cadernos da Jornada das Quatro Estações Interiores',
    label: 'Journal',
    title: 'Jornada das Quatro Estações Interiores',
    text: 'Criei este caderno físico para unir agenda e diário de reflexão. Ao longo das quatro estações, as festas cristãs, vistas pela antroposofia, são um ponto de partida para observar o que você vive e registrar suas percepções no dia a dia.',
    link: '/journal',
    linkText: 'Conheça o Journal',
    tone: 'var(--petrol)',
  },
  {
    image: oraculo,
    position: 'center',
    alt: 'Capa do Oráculo das Estrelas Caminhantes, com mandala sobre fundo multicolorido',
    label: 'Oráculo',
    title: 'Oráculo das Estrelas Caminhantes',
    text: 'Inspiradas nas qualidades anímicas que a antroposofia associa aos sete planetas, as cartas convidam a refletir sobre diferentes maneiras de sentir e agir. Também uso o oráculo nos atendimentos de coaching e terapia.',
    link: '/oraculo',
    linkText: 'Conheça o Oráculo',
    tone: 'var(--magenta)',
  },
]

export default function StyledCriacoes() {
  return (
    <CreationsSection id="criacoes" aria-labelledby="creations-title">
      <CreationsInner>
        <h2 id="creations-title">Antroposofia e criações</h2>
        <Intro>O olhar que inspira meu trabalho e duas formas de vivê-lo no cotidiano.</Intro>
        <CreationGrid>
          {creations.map(({ image, mandala: isMandala, position, alt, label, title, text, link, linkText, tone }, index) => (
            <CreationCard key={title} $index={index}>
              {isMandala
                ? (
                  <MandalaFrame>
                    <img src={image} width="1024" height="1024" loading="lazy" alt={alt} />
                  </MandalaFrame>
                )
                : <CoverImage src={image} width="520" height="410" loading="lazy" alt={alt} $position={position} />}
              <CreationCopy>
                {label && <Label>{label}</Label>}
                <h3>{title}</h3>
                <p>{text}</p>
                <CreationButton as={Link} to={link} $tone={tone}>{linkText}</CreationButton>
              </CreationCopy>
            </CreationCard>
          ))}
        </CreationGrid>
      </CreationsInner>
    </CreationsSection>
  )
}
