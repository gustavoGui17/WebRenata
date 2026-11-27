import texture from '../../img/oraculo/oraculo-textura.webp'
import mandala from '../../img/mandalaVermelha.png'
import { Link } from '../../router.jsx'
import { PrimaryButton, TextLink } from '../shared/Shared.js'
import {
  Actions,
  Artwork,
  ContactSection,
  Copy,
  HeroGrid,
  Lead,
  ProductHero,
  ProductPage,
  SectionGrid,
  Steps,
  TintedSection,
  TextSection,
} from '../shared/ProductPage.js'

export default function StyledRitmos() {
  return (
    <ProductPage>
      <ProductHero $texture={texture} aria-labelledby="ritmos-title">
        <HeroGrid>
          <div>
            <h1 id="ritmos-title">Ritmos da vida: <em>tudo que respira tem um ritmo</em></h1>
            <Lead>Nós vivemos a partir do ritmo do dia e da noite, do sono e vigília e das estações do ano. A vida está repleta de ciclos que nos atravessam.</Lead>
            <TextLink as={Link} to="/ritmos-da-vida#ciclos">Conheça os ciclos</TextLink>
          </div>
          <Artwork>
            <img src={mandala} width="712" height="704" alt="Mandala em tons de vermelho" />
          </Artwork>
        </HeroGrid>
      </ProductHero>
      <TintedSection id="ciclos" aria-labelledby="ritmos-practice-title">
        <SectionGrid>
          <Copy>
            <h2 id="ritmos-practice-title">Os ciclos que nos atravessam</h2>
            <p>No ritmo da respiração, ao inspirar, a energia espiritual entra nos nossos pulmões e coração. No ritmo do dormir e acordar, vamos construindo nossa vida e futuro: o que vivemos no dia se torna a semente do futuro.</p>
          </Copy>
          <Steps>
            <div>
              <dt>Dia e noite</dt>
              <dd>Alternância entre cuidado, movimento e recolhimento.</dd>
            </div>
            <div>
              <dt>Estações do ano</dt>
              <dd>Cada tempo traz uma qualidade e um convite para a vida interior.</dd>
            </div>
            <div>
              <dt>Respiração</dt>
              <dd>O ritmo simples que sustenta a presença e a energia criativa.</dd>
            </div>
          </Steps>
        </SectionGrid>
      </TintedSection>
      <TextSection id="consciencia" aria-labelledby="ritmos-consciencia-title">
        <Copy>
          <h2 id="ritmos-consciencia-title">Ritmo e consciência</h2>
          <p>Temos também o ciclo dos pensamentos, impulsos que percorrem nosso corpo e usam nossa energia criativa. Eles podem nos fortalecer ou nos trazer desconforto.</p>
          <p>O despertar espiritual nos auxilia a clarear e nos tornarmos mais assertivos nas escolhas dos nossos hábitos e pensamentos.</p>
        </Copy>
        <Steps>
          <div>
            <dt>Os pensamentos</dt>
            <dd>Impulsos que percorrem o corpo e usam nossa energia criativa.</dd>
          </div>
          <div>
            <dt>Os hábitos</dt>
            <dd>Escolhas que podem nos fortalecer ou trazer desconforto.</dd>
          </div>
          <div>
            <dt>A natureza</dt>
            <dd>A sintonia com os ciclos como caminho de autoconhecimento e transformação.</dd>
          </div>
        </Steps>
      </TextSection>
      <ContactSection aria-labelledby="ritmos-contact-title">
        <SectionGrid>
          <Copy>
            <h2 id="ritmos-contact-title">Um caminho de autoconhecimento</h2>
            <p>Os ciclos da natureza, das estações, dos ritmos da vida e do nosso desenvolvimento humano e espiritual nos convidam a abrir corações e mentes.</p>
          </Copy>
          <Actions>
            <PrimaryButton as={Link} to="/#contato">Conversar sobre vivências</PrimaryButton>
            <TextLink as={Link} to="/antroposofia">Conheça o olhar antroposófico</TextLink>
          </Actions>
        </SectionGrid>
      </ContactSection>
    </ProductPage>
  )
}
