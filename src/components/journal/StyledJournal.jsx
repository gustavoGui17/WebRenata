import styled from 'styled-components'
import texture from '../../img/oraculo/oraculo-textura.webp'
import journalDetail from '../../img/journal-detalhe.webp'
import flor from '../../img/estacao-flor.webp'
import sol from '../../img/estacao-sol.webp'
import folha from '../../img/estacao-folha.webp'
import floco from '../../img/estacao-floco.webp'
import { Link } from '../../router.jsx'
import { Icon } from '../symbols/Symbols.jsx'
import { OutlineButton, PrimaryButton, TextLink } from '../shared/Shared.js'
import {
  Actions,
  ContactSection,
  Copy,
  HeroGrid,
  Lead,
  PageLabel,
  PhotoFrame,
  ProductHero,
  ProductPage,
  PurchaseNote,
  SectionGrid,
  SeasonList,
  Steps,
  TextSection,
  TintedSection,
} from '../shared/ProductPage.js'

const Hero = styled(HeroGrid)`
  align-items: center;
`

const seasons = [
  { image: flor, label: 'Primavera' },
  { image: sol, label: 'Verão' },
  { image: folha, label: 'Outono' },
  { image: floco, label: 'Inverno' },
]

export default function StyledJournal() {
  return (
    <ProductPage>
      <ProductHero $texture={texture} aria-labelledby="journal-title">
        <Hero>
          <div>
            <PageLabel>Journal de Renata Lis</PageLabel>
            <h1 id="journal-title">Jornada das Quatro <em>Estações Interiores</em></h1>
            <Lead>Uma agenda e um diário de reflexão no mesmo caderno, para organizar seus dias e perceber o que muda em você ao longo do ano.</Lead>
            <Actions>
              <PrimaryButton href="https://pay.monetizze.com.br/DSL193678">Comprar o Journal</PrimaryButton>
              <TextLink as={Link} to="/journal#como-usar">Conheça por dentro</TextLink>
            </Actions>
            <PurchaseNote>Caderno físico · Compra pela Monetizze</PurchaseNote>
          </div>
          <PhotoFrame>
            <img src={journalDetail} width="610" height="750" alt="Cadernos físicos da Jornada das Quatro Estações Interiores, com capas coloridas e encadernação em espiral" fetchPriority="high" />
          </PhotoFrame>
        </Hero>
      </ProductHero>
      <TextSection id="como-usar" aria-labelledby="journal-use-title">
        <Copy>
          <h2 id="journal-use-title">Entre os compromissos, um espaço para você</h2>
          <p>Criei o Journal para reunir duas práticas que cabem no mesmo dia: planejar o que precisa ser feito e reservar um momento para perceber como você está vivendo tudo isso.</p>
        </Copy>
        <Steps>
          <div><dt>Planeje</dt><dd>Organize seus compromissos e prioridades na agenda.</dd></div>
          <div><dt>Registre</dt><dd>Anote experiências, perguntas e percepções do cotidiano.</dd></div>
          <div><dt>Revisite</dt><dd>Volte às suas anotações quando a estação mudar e observe o que ganhou ou perdeu importância.</dd></div>
        </Steps>
      </TextSection>
      <TintedSection aria-labelledby="seasons-title">
        <SectionGrid>
          <Copy>
            <h2 id="seasons-title">As quatro estações interiores</h2>
            <p>As festas cristãs, vistas pelo olhar da antroposofia, inspiram pausas e reflexões ao longo do ano. No Journal, reuni temas dos meus e-books sobre essas festas para acompanhar a prática diária.</p>
          </Copy>
          <SeasonList aria-label="Estações do ano">
            {seasons.map(({ image, label }) => (
              <li key={label}><img src={image} width="96" height="96" alt="" />{label}</li>
            ))}
          </SeasonList>
        </SectionGrid>
      </TintedSection>
      <ContactSection aria-labelledby="journal-contact-title">
        <SectionGrid>
          <Copy>
            <h2 id="journal-contact-title">Leve o Journal para o seu dia a dia</h2>
            <p>Se tiver dúvidas sobre o caderno, escreva para mim ou acompanhe a Jornada no Instagram.</p>
          </Copy>
          <Actions>
            <PrimaryButton href="https://pay.monetizze.com.br/DSL193678">Comprar o Journal</PrimaryButton>
            <OutlineButton href="https://www.instagram.com/quatroestacoesinteriores/" target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" /> Instagram do Journal
            </OutlineButton>
            <OutlineButton href="mailto:contato@renatalis.com.br?subject=D%C3%BAvida%20sobre%20o%20Journal">
              <Icon name="mail" /> Escrever para Renata
            </OutlineButton>
          </Actions>
        </SectionGrid>
      </ContactSection>
    </ProductPage>
  )
}
