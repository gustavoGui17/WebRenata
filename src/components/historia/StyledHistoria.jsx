import styled from 'styled-components'
import aquarela from '../../img/aquarela-renata.webp'
import portrait from '../../img/renata-historia.webp'
import { Link } from '../../router.jsx'
import { Label, PrimaryButton, Section, TextLink, Wrap } from '../shared/Shared.js'
import { Actions, ContactSection, Copy, SectionGrid } from '../shared/ProductPage.js'

const HeroSection = styled.section`
  background: var(--cream);
  border-bottom: 1px solid var(--line);
`

const Cover = styled(Wrap)`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);
  align-items: center;
  gap: clamp(2.5rem, 8vw, 9rem);
  padding-block: clamp(2.5rem, 5vw, 5rem);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
`

const CoverCopy = styled.div`
  max-width: 40rem;

  h1 {
    max-width: 13ch;
    font-size: clamp(3rem, 5.45vw, 5.8rem);
    line-height: 1.04;

    em {
      display: block;
      color: var(--petrol);
      white-space: normal;
    }
  }

  @media (max-width: 760px) {
    h1 {
      font-size: clamp(2.65rem, 9.8vw, 4rem);
    }
  }
`

const StoryLabel = styled(Label)`
  color: var(--magenta);
`

const CoverLead = styled.p`
  max-width: 39ch;
  margin: 1.4rem 0 1.65rem;
  font-size: clamp(1.05rem, 1.65vw, 1.35rem);
  color: var(--muted);
`

const Portrait = styled.figure`
  position: relative;
  width: min(100%, 28rem);
  justify-self: end;
  margin: 0 0 .85rem;
  padding-right: 1.15rem;

  &::before {
    content: '';
    position: absolute;
    inset: 1.15rem 0 -.85rem 1.15rem;
    background: linear-gradient(#fffcf76b, #fffcf76b), url(${aquarela}) center / cover;
  }

  img {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: 760px) {
    justify-self: start;
  }
`

const Timeline = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 1.75rem 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    border-top: 1px solid #c2cabc;
    padding: 1rem 1.25rem 0 0;

    &::before {
      content: '';
      position: absolute;
      width: .65rem;
      height: .65rem;
      border-radius: 50%;
      background: var(--magenta);
      top: -.35rem;
      left: 0;
    }

    &:nth-child(2)::before {
      background: var(--blue);
    }

    &:nth-child(3)::before {
      background: var(--green);
    }

    &:nth-child(4)::before {
      background: var(--peach);
    }
  }

  span {
    color: var(--petrol);
    font-size: .9rem;
    font-weight: 700;
  }

  h3 {
    margin-block: .35rem .5rem;
  }

  p {
    max-width: 25ch;
    color: var(--muted);
  }

  @media (max-width: 760px) {
    display: block;
    margin-top: 1.3rem;

    li {
      border-top: 0;
      border-left: 1px solid #c2cabc;
      padding: 0 0 1.15rem 1rem;

      &::before {
        top: .4rem;
        left: -.35rem;
      }
    }

    p {
      max-width: none;
    }
  }
`

const ReadingSection = styled.section`
  background: var(--mist);
`

const ReadingGrid = styled(Wrap)`
  display: grid;
  grid-template-columns: minmax(0, .74fr) minmax(0, 1.26fr);
  gap: clamp(1.5rem, 6vw, 6rem);
  align-items: start;
  padding-block: clamp(2.5rem, 4.25vw, 4.75rem);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const Story = styled.div`
  display: grid;
  gap: 1.15rem;
  max-width: 65ch;
  font-size: 1.07rem;
  line-height: 1.75;

  p:first-child {
    font-family: var(--serif);
    font-size: 1.2rem;
    line-height: 1.6;
  }
`

const Player = styled.div`
  display: flex;
  align-items: center;
  gap: .85rem;
  margin-top: 1.3rem;
  padding: .9rem 1rem;
  max-width: 23rem;
  border: 1px solid var(--line);
  border-radius: .7rem;
  background: var(--paper);

  button {
    display: grid;
    place-items: center;
    flex: 0 0 44px;
    height: 44px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    color: white;
    background: var(--petrol);

    &:disabled {
      opacity: .72;
      cursor: default;
    }
  }

  p {
    color: var(--muted);
    font-size: .875rem;
  }
`

const milestones = [
  { year: '1990', title: 'Administração', text: 'Formação pela FAAP e uma década de experiência na área financeira.' },
  { year: '1998–1999', title: 'Terapia floral', text: 'Primeiros estudos em antroposofia e especialização em Terapia Floral pelo IBEHE.' },
  { year: '2008–2010', title: 'Arte e formação', text: 'Coordenação de projetos e produção artesanal em uma iniciativa de capacitação de costureiras em Osasco.' },
  { year: '2017', title: 'Coaching', text: 'Formação pelo IBC e integração da arte ao trabalho de desenvolvimento humano.' },
]

const story = [
  'Quando eu era criança, gostava de ficar perto das minhas avós enquanto elas costuravam. Via nascer vestidos pelas mãos delas e, dos pedaços de tecido que sobravam, as colchas que depois cobriam nossas camas. Também gostava de brincar de escritório e de observar a natureza. Naquela época, eu ainda não imaginava como essas curiosidades voltariam a se encontrar.',
  'Me formei em Administração pela FAAP e trabalhei por dez anos na área financeira. Foi um período de muito aprendizado, mas, com o tempo, cresceu em mim a vontade de trabalhar mais de perto com as pessoas. Em 1998, comecei a estudar terapia floral e conheci a antroposofia. Na Califórnia, onde estudei os florais, o patchwork também ganhou um novo lugar na minha vida.',
  'Por muitos anos, a terapia floral e a costura caminharam juntas. Na Orallegra, criei peças de patchwork e dei aulas de costura criativa. Também participei de um projeto de capacitação em Osasco, coordenando a produção de peças artesanais. Nessas experiências, pude ver como o trabalho com as mãos dá a cada pessoa uma maneira própria de se expressar.',
  'Quando concluí minha formação em coaching, em 2017, encontrei uma forma de reunir essas experiências. Hoje, nos atendimentos individuais, construo o percurso com cada pessoa, a partir daquilo que ela quer compreender ou mudar. Nos grupos, a costura, o desenho e as reflexões sobre os ritmos do ano ajudam a abrir conversas que às vezes são difíceis de começar só com palavras.',
]

export default function StyledHistoria() {
  return (
    <div>
      <HeroSection aria-labelledby="history-title">
        <Cover>
          <CoverCopy>
            <StoryLabel>Renata Lis</StoryLabel>
            <h1 id="history-title">Um pouco da <em>minha história</em></h1>
            <CoverLead>Quando criança, eu via minhas avós transformarem retalhos em colchas. Anos depois, a costura encontrou um novo lugar na minha vida e passou a fazer parte do meu trabalho com pessoas.</CoverLead>
            <Actions>
              <PrimaryButton as={Link} to="/minha-historia#trajetoria">Leia minha história</PrimaryButton>
              <TextLink as={Link} to="/minha-historia#marcos">Veja a linha do tempo</TextLink>
            </Actions>
          </CoverCopy>
          <Portrait>
            <img src={portrait} width="738" height="1108" alt="Renata Lis de pé, com roupa clara e um colar, em um ambiente iluminado" fetchPriority="high" />
          </Portrait>
        </Cover>
      </HeroSection>
      <Section id="marcos" aria-labelledby="milestones-title">
        <h2 id="milestones-title">Marcos da minha trajetória</h2>
        <Timeline>
          {milestones.map(({ year, title, text }) => (
            <li key={year}><span>{year}</span><h3>{title}</h3><p>{text}</p></li>
          ))}
        </Timeline>
      </Section>
      <ReadingSection id="trajetoria" aria-labelledby="story-title">
        <ReadingGrid>
          <div>
            <h2 id="story-title">Minha história, nas minhas palavras</h2>
            <Player>
              <button type="button" disabled aria-label="Reproduzir a narração quando estiver disponível" aria-describedby="history-audio-status">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M8 4.5v15l12-7.5z" /></svg>
              </button>
              <div><strong>Ouça minha história</strong><p id="history-audio-status">Gravação em breve</p></div>
            </Player>
          </div>
          <Story>
            {story.map((text) => <p key={text}>{text}</p>)}
            <p>
              Foi desse trabalho que nasceram a <TextLink as={Link} to="/journal">Jornada das Quatro Estações Interiores</TextLink> e o <TextLink as={Link} to="/oraculo">Oráculo das Estrelas Caminhantes</TextLink>. O que mais me alegra, em cada encontro, é ver alguém reconhecer algo de si e encontrar seu próprio jeito de expressar isso.
            </p>
          </Story>
        </ReadingGrid>
      </ReadingSection>
      <ContactSection aria-labelledby="history-contact-title">
        <SectionGrid>
          <Copy>
            <h2 id="history-contact-title">Vamos conversar?</h2>
            <p>Se quiser conhecer meu trabalho ou conversar sobre um atendimento, escreva para mim.</p>
          </Copy>
          <Actions>
            <PrimaryButton as={Link} to="/#contato">Entre em contato</PrimaryButton>
            <TextLink as={Link} to="/#caminhos">Conheça meu trabalho</TextLink>
          </Actions>
        </SectionGrid>
      </ContactSection>
    </div>
  )
}
