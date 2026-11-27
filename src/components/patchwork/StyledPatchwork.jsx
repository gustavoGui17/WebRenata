import texture from '../../img/oraculo/oraculo-textura.webp'
import mandala from '../../img/mandalaRoxo.png'
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

export default function StyledPatchwork() {
  return (
    <ProductPage>
      <ProductHero $texture={texture} aria-labelledby="patchwork-title">
        <HeroGrid>
          <div>
            <h1 id="patchwork-title">Patchwork: <em>a costura como expressão</em></h1>
            <Lead>O Patchwork e a costura criativa nos conectam com a capacidade de trazer foco, atenção e criatividade para a vida. A costura como forma de expressão da alma.</Lead>
            <TextLink as={Link} to="/patchwork#o-que-revela">Veja o que a colcha revela</TextLink>
          </div>
          <Artwork>
            <img src={mandala} width="579" height="579" alt="Mandala em tons de roxo" />
          </Artwork>
        </HeroGrid>
      </ProductHero>
      <TintedSection id="costura-criativa" aria-labelledby="patchwork-practice-title">
        <SectionGrid>
          <Copy>
            <h2 id="patchwork-practice-title">Foco, atenção e criatividade</h2>
            <p>Transformar recortes de tecidos em peças de arte e de utilidade para o dia a dia é um caminho. Faz-se o projeto, estabelecem-se as cores, calculam-se as medidas e, com o olhar no papel do que será, partimos para a realização.</p>
          </Copy>
          <Steps>
            <div>
              <dt>O projeto</dt>
              <dd>Uma ideia ganha forma no papel antes de virar tecido.</dd>
            </div>
            <div>
              <dt>As cores</dt>
              <dd>A escolha das combinações revela o que queremos expressar.</dd>
            </div>
            <div>
              <dt>As medidas</dt>
              <dd>O cuidado com cada parte constrói o todo, retalho a retalho.</dd>
            </div>
          </Steps>
        </SectionGrid>
      </TintedSection>
      <TextSection id="o-que-revela" aria-labelledby="patchwork-revela-title">
        <Copy>
          <h2 id="patchwork-revela-title">O que a colcha revela</h2>
          <p>Podemos ver as pequenas partes e também o todo. A diversidade de cada tecido, das cores e suas combinações, revela a riqueza de todos os elementos no todo.</p>
          <p>A construção da colcha mostra muito de quem somos e como estamos: nosso ritmo, expectativas, paciência, atenção e como encaramos os desafios.</p>
        </Copy>
        <Steps>
          <div>
            <dt>As pequenas partes</dt>
            <dd>Cada retalho traz sua cor, sua textura e sua história.</dd>
          </div>
          <div>
            <dt>O todo</dt>
            <dd>A diversidade dos tecidos revela a riqueza de todos os elementos.</dd>
          </div>
          <div>
            <dt>O mundo interno</dt>
            <dd>Pouco a pouco, vai sendo impresso na arte que está sendo concretizada.</dd>
          </div>
        </Steps>
      </TextSection>
      <ContactSection aria-labelledby="patchwork-contact-title">
        <SectionGrid>
          <Copy>
            <h2 id="patchwork-contact-title">Um convite</h2>
            <p>O trabalho sempre busca unir o que em nós está separado. Encantamento é a palavra para esse caminho. Te convido a conhecer os encontros.</p>
          </Copy>
          <Actions>
            <PrimaryButton as={Link} to="/#contato">Conhecer os encontros</PrimaryButton>
            <TextLink as={Link} to="/minha-historia">Onde nasceu minha paixão pela costura</TextLink>
          </Actions>
        </SectionGrid>
      </ContactSection>
    </ProductPage>
  )
}
