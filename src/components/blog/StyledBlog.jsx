import styled from 'styled-components'
import texture from '../../img/oraculo/oraculo-textura.webp'
import blogImage from '../../img/blog.jpg'
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
} from '../shared/ProductPage.js'
import { BlogList } from '../page/StyledPage.jsx'

const HeroNote = styled.p`
  max-width: 52ch;
  margin: -.4rem 0 1.5rem;
  color: var(--muted);
`

const BlogArtwork = styled(Artwork)`
  width: min(100%, 31rem);
  padding: clamp(.6rem, 1.4vw, 1rem);
  background: #fff;
  border-radius: .6rem;
  box-shadow: 0 14px 32px #18384514;

  img {
    display: block;
    border-radius: .35rem;
  }
`

const ContactActions = styled(Actions)`
  margin-top: 1.5rem;
`

export default function StyledBlog() {
  return (
    <ProductPage>
      <ProductHero $texture={texture} aria-labelledby="blog-title">
        <HeroGrid>
          <div>
            <h1 id="blog-title">Blog: <em>reflexões para o caminho</em></h1>
            <Lead>Textos sobre os ritmos do ano, a arte, a antroposofia e o desenvolvimento humano, escritos a partir da escuta do cotidiano.</Lead>
            <HeroNote>Aqui você encontra perguntas, práticas e olhares para transformar a leitura em algo vivido. Escolha um tema e siga no seu ritmo.</HeroNote>
            <TextLink as={Link} to="/blog#ultimas-reflexoes">Leia as últimas reflexões</TextLink>
          </div>
          <BlogArtwork>
            <img src={blogImage} width="1667" height="1546" alt="Ilustração do blog da Renata Lis" fetchPriority="high" />
          </BlogArtwork>
        </HeroGrid>
      </ProductHero>
      <BlogList />
      <ContactSection aria-labelledby="blog-contact-title">
        <SectionGrid>
          <Copy>
            <h2 id="blog-contact-title">Vamos conversar?</h2>
            <p>Uma reflexão ganha outra forma quando é compartilhada. Se algum texto trouxe uma pergunta, me conte o que você está vivendo.</p>
            <p>Podemos seguir pela conversa individual, por um encontro com sua equipe ou pela leitura dos guias. Escolha o caminho que faz sentido agora.</p>
          </Copy>
          <div>
            <Steps>
              <div><dt>O que você está vivendo</dt><dd>Escreva sobre uma escolha, um tema ou uma pergunta que surgiu na leitura.</dd></div>
              <div><dt>Qual caminho combina</dt><dd>Atendimento individual, conversa com equipes ou os e-books de autoconhecimento.</dd></div>
              <div><dt>Próximos passos</dt><dd>Combinamos o formato e o momento que funcionam para você.</dd></div>
            </Steps>
            <ContactActions>
              <PrimaryButton as={Link} to="/#contato">Vamos conversar</PrimaryButton>
              <TextLink as={Link} to="/ebooks#escolha-seu-guia">Ver e-books</TextLink>
            </ContactActions>
          </div>
        </SectionGrid>
      </ContactSection>
    </ProductPage>
  )
}
