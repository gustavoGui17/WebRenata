import styled from 'styled-components'
import aboutPhoto from '../../img/renata.webp'
import { Link } from '../../router.jsx'
import { Label, TextLink, Wrap } from '../shared/Shared.js'

const AboutSection = styled.section`
  background: var(--mist);

  strong {
    color: var(--ink);
    font-weight: 700;
  }

  ${TextLink} {
    color: #145675;
  }
`

const AboutGrid = styled(Wrap)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(13rem, 29vw, 27rem);
  gap: clamp(1.75rem, 4vw, 4rem);
  align-items: center;
  padding-block: clamp(2.5rem, 4.25vw, 4.75rem);

  > div {
    max-width: 82ch;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
`

const Lead = styled.p`
  font: 400 clamp(1.1rem, 1.5vw, 1.45rem)/1.5 var(--serif);
  color: var(--ink);
  margin-bottom: 1.25rem;
`

const AboutText = styled.p`
  color: var(--muted);
  margin: 1rem 0 1.35rem;
`

const AboutPhoto = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center 15%;
  justify-self: end;
  border-radius: 50%;

  @media (max-width: 760px) {
    width: min(75%, 320px);
    justify-self: center;
  }
`

export default function StyledSobre() {
  return (
    <AboutSection id="sobre">
      <AboutGrid>
        <div>
          <Label>Meu caminho</Label>
          <h2>Sou Renata Lis.</h2>
          <Lead>
            <strong>Da área financeira ao desenvolvimento humano</strong>, encontrei no coaching uma forma de reunir a arte e a antroposofia no trabalho com pessoas.
          </Lead>
          <AboutText>
            Sou formada em Administração e trabalhei por dez anos na área financeira. Em 1998, comecei minha formação em terapia floral e conheci a antroposofia. Na Califórnia, aprofundei minha relação com o patchwork, uma arte que começou a fazer parte da minha vida ainda criança, quando eu via minhas avós costurarem e transformarem sobras de tecido em colchas.
          </AboutText>
          <AboutText>
            Hoje, no coaching individual, construo um percurso com cada pessoa para que ela possa <strong>fazer escolhas com mais clareza e se expressar com autonomia</strong>. Nos encontros em grupo, trago <strong>a costura e o desenho como formas de expressão</strong>. Nos workshops, exploro os ritmos das festas do ano como ponto de partida para o autoconhecimento.
          </AboutText>
          <TextLink as={Link} to="/um-pouco-da-minha-historia">Um pouco da minha história</TextLink>
        </div>
        <AboutPhoto src={aboutPhoto} width="738" height="820" alt="Renata Lis" loading="lazy" />
      </AboutGrid>
    </AboutSection>
  )
}
