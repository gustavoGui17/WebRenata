import styled from 'styled-components'
import { Link } from '../../router.jsx'
import { Label, Section, TextLink } from '../shared/Shared.js'

const Offerings = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.7rem;
  margin-top: 2.2rem;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 390px) {
    grid-template-columns: 1fr;
  }
`

const accents = ['magenta', 'blue', 'green', 'peach', 'yellow']

const Offering = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid var(--line);
  padding-top: 1.35rem;
  --accent: var(--${({ $accent }) => accents[$accent]});

  &::before {
    content: '';
    width: min(100%, 5.5rem);
    height: 3px;
    margin-bottom: .65rem;
    background: var(--accent);
  }

  p {
    color: var(--muted);
    margin: 1rem 0 1.35rem;
  }

  a {
    margin-top: auto;
  }
`

const offerings = [
  {
    title: 'Terapia floral e antroposofia',
    text: 'Minha formação em terapia floral e meu estudo da antroposofia ampliam o olhar que levo ao atendimento individual.',
    link: '/#sobre',
    linkText: 'Conheça minha trajetória',
  },
  {
    title: 'Cultura organizacional',
    text: 'Experiências em grupo para cultivar a escuta, a colaboração e a criatividade no trabalho.',
    link: '/#contato',
    linkText: 'Conversar sobre sua equipe',
    id: 'organizacional',
  },
  {
    title: 'Coaching',
    text: 'Encontros para entender o que você quer mudar, organizar prioridades e dar forma aos próximos passos.',
    link: '/coaching',
    linkText: 'Sobre o coaching',
  },
  {
    title: 'Patchwork',
    text: 'Na costura criativa, a escolha dos tecidos e o trabalho com as mãos abrem espaço para experimentar e se expressar.',
    link: '/patchwork',
    linkText: 'Sobre a costura criativa',
  },
  {
    title: 'Ritmos da vida',
    text: 'Reflexões e vivências a partir das estações, das festas do ano e dos ciclos que atravessamos.',
    link: '/ritmos-da-vida',
    linkText: 'Sobre os ritmos da vida',
  },
]

export default function StyledCaminhos() {
  return (
    <Section id="caminhos">
      <Label>Meu trabalho</Label>
      <h2>Desenvolvimento humano com arte</h2>
      <Offerings>
        {offerings.map(({ title, text, link, linkText, id }, index) => (
          <Offering key={title} id={id} $accent={index}>
            <h3>{title}</h3>
            <p>{text}</p>
            <TextLink as={Link} to={link}>{linkText}</TextLink>
          </Offering>
        ))}
      </Offerings>
    </Section>
  )
}
