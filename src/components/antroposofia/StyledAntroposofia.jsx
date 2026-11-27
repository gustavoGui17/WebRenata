import texture from '../../img/oraculo/oraculo-textura.webp'
import mandala from '../../img/antroposofia-mandala.webp'
import { Link } from '../../router.jsx'
import { OutlineButton, TextLink } from '../shared/Shared.js'
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
} from '../shared/ProductPage.js'

export default function StyledAntroposofia() {
  return (
    <ProductPage>
      <ProductHero $texture={texture} aria-labelledby="antroposofia-title">
        <HeroGrid>
          <div>
            <h1 id="antroposofia-title">A antroposofia <em>no meu trabalho</em></h1>
            <Lead>Conheci a antroposofia em 1998, quando comecei a estudar terapia floral. Com o tempo, esse olhar passou a fazer parte de como observo os ritmos da natureza e as mudanças que vivemos ao longo da vida.</Lead>
            <TextLink as={Link} to="/antroposofia#na-pratica">Como esse olhar aparece na prática</TextLink>
          </div>
          <Artwork>
            <img src={mandala} width="1024" height="1024" alt="Mandala dourada" />
          </Artwork>
        </HeroGrid>
      </ProductHero>
      <TintedSection id="na-pratica" aria-labelledby="practice-title">
        <SectionGrid>
          <Copy>
            <h2 id="practice-title">Da observação à prática</h2>
            <p>Nos atendimentos, esse olhar faz parte das perguntas que levo às conversas sobre escolhas, atitudes e mudanças. Ele também inspirou dois recursos que criei para o autoconhecimento.</p>
          </Copy>
          <Steps>
            <div>
              <dt>Jornada das Quatro Estações Interiores</dt>
              <dd>No Journal, as estações e as festas do ano são pontos de partida para observar o cotidiano e registrar o que muda. <TextLink as={Link} to="/journal">Conheça o Journal</TextLink></dd>
            </div>
            <div>
              <dt>Oráculo das Estrelas Caminhantes</dt>
              <dd>No Oráculo, as qualidades planetárias inspiram cartas e perguntas sobre diferentes maneiras de sentir e agir. <TextLink as={Link} to="/oraculo">Conheça o Oráculo</TextLink></dd>
            </div>
          </Steps>
        </SectionGrid>
      </TintedSection>
      <ContactSection aria-labelledby="history-link-title">
        <SectionGrid>
          <Copy>
            <h2 id="history-link-title">Como esse olhar entrou na minha vida</h2>
          </Copy>
          <Actions>
            <OutlineButton as={Link} to="/minha-historia">Leia minha história</OutlineButton>
            <TextLink as={Link} to="/#contato">Entre em contato</TextLink>
          </Actions>
        </SectionGrid>
      </ContactSection>
    </ProductPage>
  )
}
