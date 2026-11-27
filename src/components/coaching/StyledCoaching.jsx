import texture from '../../img/oraculo/oraculo-textura.webp'
import mandala from '../../img/mandalaLaranja.png'
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

export default function StyledCoaching() {
  return (
    <ProductPage>
      <ProductHero $texture={texture} aria-labelledby="coaching-title">
        <HeroGrid>
          <div>
            <h1 id="coaching-title">O coaching como <em>parceria de desenvolvimento</em></h1>
            <Lead>Coaching é uma metodologia que reúne ferramentas de desenvolvimento e gerenciamento do comportamento humano para ampliar horizontes, ganhar clareza e gerar mudanças positivas e duradouras.</Lead>
            <TextLink as={Link} to="/coaching#o-que-faz">Veja o que acontece no processo</TextLink>
          </div>
          <Artwork>
            <img src={mandala} width="748" height="740" alt="Mandala em tons de laranja" />
          </Artwork>
        </HeroGrid>
      </ProductHero>
      <TintedSection id="o-que-faz" aria-labelledby="coaching-practice-title">
        <SectionGrid>
          <Copy>
            <h2 id="coaching-practice-title">O que o coaching faz</h2>
            <p>O objetivo é o aprendizado e o desenvolvimento contínuo: fortalecer habilidades, ampliar a percepção sobre si e organizar os próximos passos. É uma relação de parceria, em que cada pessoa encontra suas próprias respostas.</p>
            <p>Na prática, o processo ajuda a transformar intenção em movimento, com mais presença, autonomia e confiança nas escolhas.</p>
          </Copy>
          <Steps>
            <div>
              <dt>Ampliar horizontes</dt>
              <dd>Observar diferentes caminhos e possibilidades antes de escolher.</dd>
            </div>
            <div>
              <dt>Ganhar clareza</dt>
              <dd>Reconhecer o que importa agora e definir prioridades com mais segurança.</dd>
            </div>
            <div>
              <dt>Sustentar a mudança</dt>
              <dd>Acompanhar os passos e ajustar o que for preciso ao longo do percurso.</dd>
            </div>
          </Steps>
        </SectionGrid>
      </TintedSection>
      <TextSection id="encontros" aria-labelledby="coaching-encontros-title">
        <Copy>
          <h2 id="coaching-encontros-title">Individual e em grupo</h2>
          <p>No coaching individual, construo um percurso personalizado para que cada pessoa desenvolva sua expressão autêntica e autônoma.</p>
          <p>Nos encontros em grupo, a gente se autoconhece no outro.</p>
        </Copy>
        <Steps>
          <div>
            <dt>Coaching individual</dt>
            <dd>Um percurso personalizado para desenvolver expressão autêntica e autônoma.</dd>
          </div>
          <div>
            <dt>Encontros em grupo</dt>
            <dd>Nas trocas, escutas e falas, nos desenvolvemos e nos reencontramos.</dd>
          </div>
          <div>
            <dt>Recursos da arte</dt>
            <dd>A costura, o olhar da terapia artística e o ritmo das festas cristãs para aflorar a essência.</dd>
          </div>
        </Steps>
      </TextSection>
      <ContactSection aria-labelledby="coaching-contact-title">
        <SectionGrid>
          <Copy>
            <h2 id="coaching-contact-title">Vamos conversar?</h2>
            <p>Se você está repensando uma escolha ou quer criar uma experiência para sua equipe, me conte um pouco do seu momento.</p>
          </Copy>
          <Actions>
            <PrimaryButton as={Link} to="/#contato">Conversar sobre um processo</PrimaryButton>
            <TextLink as={Link} to="/minha-historia">Conheça minha trajetória</TextLink>
          </Actions>
        </SectionGrid>
      </ContactSection>
    </ProductPage>
  )
}
