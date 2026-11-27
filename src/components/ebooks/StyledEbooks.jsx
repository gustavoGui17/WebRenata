import styled from 'styled-components'
import texture from '../../img/oraculo/oraculo-textura.webp'
import ebook from '../../img/e-book.png'
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
  PurchaseNote,
  SectionGrid,
} from '../shared/ProductPage.js'
import { EbooksList } from '../page/StyledPage.jsx'

const BuyButton = styled(PrimaryButton).attrs({ as: 'button', type: 'button' })`
  font-family: inherit;
  cursor: pointer;
`

const EbooksHeroGrid = styled(HeroGrid)`
  grid-template-columns: minmax(0, 1fr) minmax(0, 31rem);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const EbookArtwork = styled(Artwork)`
  width: min(100%, 31rem);
`

export default function StyledEbooks() {
  return (
    <ProductPage>
      <ProductHero $texture={texture} aria-labelledby="ebooks-title">
        <EbooksHeroGrid>
          <div>
            <h1 id="ebooks-title">E-books: <em>guias de autoconhecimento</em></h1>
            <Lead>Guias de autoconhecimento que auxiliam o desenvolvimento e o encontro com sua verdadeira essência. Cada guia reúne reflexões, atividades e exercícios para vivenciar as épocas do ano com mais presença.</Lead>
            <Actions>
              <BuyButton>Comprar e-books</BuyButton>
              <TextLink as={Link} to="/ebooks#escolha-seu-guia">Ver e-books</TextLink>
            </Actions>
            <PurchaseNote>Guias digitais de autoconhecimento · Conheça todos os e-books</PurchaseNote>
          </div>
          <EbookArtwork>
            <img src={ebook} width="1200" height="1200" alt="Imagem dos e-books" />
          </EbookArtwork>
        </EbooksHeroGrid>
      </ProductHero>
      <EbooksList />
      <ContactSection aria-labelledby="ebooks-contact-title">
        <SectionGrid>
          <Copy>
            <h2 id="ebooks-contact-title">Escolha seu próximo guia</h2>
            <p>Conheça todos os e-books e encontre o caminho que combina com o seu momento.</p>
          </Copy>
          <Actions>
            <BuyButton>Comprar e-books</BuyButton>
            <TextLink as={Link} to="/#contato">Entre em contato</TextLink>
          </Actions>
        </SectionGrid>
      </ContactSection>
    </ProductPage>
  )
}
