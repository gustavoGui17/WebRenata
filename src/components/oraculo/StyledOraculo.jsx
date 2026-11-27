import styled from 'styled-components'
import texture from '../../img/oraculo/oraculo-textura.webp'
import capa from '../../img/oraculo/oraculo-capa.webp'
import mandala from '../../img/oraculo/oraculo-mandala.webp'
import lua from '../../img/oraculo/oraculo-lua.webp'
import venus from '../../img/oraculo/oraculo-venus.webp'
import mercurio from '../../img/oraculo/oraculo-mercurio.webp'
import solPlaneta from '../../img/oraculo/oraculo-sol.webp'
import marte from '../../img/oraculo/oraculo-marte.webp'
import jupiter from '../../img/oraculo/oraculo-jupiter.webp'
import saturno from '../../img/oraculo/oraculo-saturno.webp'
import { Link } from '../../router.jsx'
import { Icon } from '../symbols/Symbols.jsx'
import { OutlineButton, PrimaryButton, TextLink } from '../shared/Shared.js'
import {
  Actions,
  CleanPhotoFrame,
  ContactSection,
  Copy,
  HeroGrid,
  Lead,
  PageLabel,
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

const QualitiesGrid = styled(SectionGrid)`
  grid-template-columns: minmax(0, .78fr) minmax(0, 1fr);
  gap: 1.2rem clamp(1.4rem, 4vw, 3.5rem);
  align-items: center;

  > div {
    grid-area: 1 / 2;
    align-self: end;
  }

  h2 {
    font-size: clamp(2.25rem, 3.7vw, 3.7rem);
  }

  p {
    font-size: 1.125rem;
  }

  @media (max-width: 760px) {
    grid-template-columns: minmax(0, 1fr);

    > div,
    img,
    ul {
      grid-area: auto;
    }
  }
`

const QualityMandala = styled.img`
  width: min(100%, 20rem);
  height: auto;
  grid-area: 1 / 1 / span 2;
  justify-self: center;

  @media (max-width: 760px) {
    width: min(68%, 15rem);
  }
`

const QualityList = styled(SeasonList)`
  grid-area: 2 / 2;
  align-self: start;
  font-size: 1.125rem;

  img {
    width: 2.6rem;
    height: 2.6rem;
    object-fit: contain;
  }
`

const planets = [
  { image: lua, label: 'Lua' },
  { image: venus, label: 'Vênus' },
  { image: mercurio, label: 'Mercúrio' },
  { image: solPlaneta, label: 'Sol' },
  { image: marte, label: 'Marte' },
  { image: jupiter, label: 'Júpiter' },
  { image: saturno, label: 'Saturno' },
]

export default function StyledOraculo() {
  return (
    <ProductPage>
      <ProductHero $texture={texture} aria-labelledby="oraculo-title">
        <Hero>
          <div>
            <PageLabel>Oráculo de Renata Lis</PageLabel>
            <h1 id="oraculo-title">Oráculo das <em>Estrelas Caminhantes</em></h1>
            <Lead>Cartas para refletir sobre diferentes maneiras de sentir e agir, inspiradas nas qualidades que a antroposofia associa aos sete planetas.</Lead>
            <Actions>
              <PrimaryButton href="https://pay.monetizze.com.br/DCD252284">Comprar o Oráculo</PrimaryButton>
              <TextLink as={Link} to="/oraculo#como-usar">Conheça as cartas</TextLink>
            </Actions>
            <PurchaseNote>Conjunto físico de cartas · Compra pela Monetizze</PurchaseNote>
          </div>
          <CleanPhotoFrame>
            <img src={capa} width="1024" height="1024" alt="Capa do Oráculo das Estrelas Caminhantes, com mandala sobre fundo multicolorido" fetchPriority="high" />
          </CleanPhotoFrame>
        </Hero>
      </ProductHero>
      <TextSection id="como-usar" aria-labelledby="oraculo-use-title">
        <Copy>
          <h2 id="oraculo-use-title">Uma carta pode abrir uma boa pergunta</h2>
          <p>Criei este oráculo a partir do meu trabalho com terapia e coaching. Uso as cartas nos atendimentos para conversar sobre atitudes, escolhas e formas de se relacionar que aparecem no cotidiano.</p>
        </Copy>
        <Steps>
          <div><dt>7 cartas de figuras</dt><dd>Apresentam as sete referências planetárias do oráculo.</dd></div>
          <div><dt>7 cartas de perguntas</dt><dd>Oferecem pontos de partida para a reflexão.</dd></div>
          <div><dt>98 cartas de atitudes</dt><dd>Convidam a observar diferentes maneiras de agir e se relacionar.</dd></div>
        </Steps>
      </TextSection>
      <TintedSection aria-labelledby="qualidades-title">
        <QualitiesGrid>
          <Copy>
            <h2 id="qualidades-title">As qualidades planetárias</h2>
            <p>No olhar da antroposofia, as sete referências planetárias convidam a observar qualidades que podem aparecer de maneiras diferentes na nossa vida.</p>
          </Copy>
          <QualityMandala src={mandala} width="1024" height="1024" alt="" loading="lazy" />
          <QualityList aria-label="Referências planetárias do Oráculo">
            {planets.map(({ image, label }) => (
              <li key={label}><img src={image} width="120" height="101" alt="" loading="lazy" />{label}</li>
            ))}
          </QualityList>
        </QualitiesGrid>
      </TintedSection>
      <ContactSection aria-labelledby="oraculo-contact-title">
        <SectionGrid>
          <Copy>
            <h2 id="oraculo-contact-title">Abra espaço para novas perguntas</h2>
            <p>Se tiver dúvidas sobre as cartas ou sobre como uso o Oráculo nos atendimentos, escreva para mim.</p>
          </Copy>
          <Actions>
            <PrimaryButton href="https://pay.monetizze.com.br/DCD252284">Comprar o Oráculo</PrimaryButton>
            <OutlineButton href="mailto:contato@renatalis.com.br?subject=D%C3%BAvida%20sobre%20o%20Or%C3%A1culo">
              <Icon name="mail" /> Escrever para Renata
            </OutlineButton>
          </Actions>
        </SectionGrid>
      </ContactSection>
    </ProductPage>
  )
}
