import styled, { css } from 'styled-components'
import texture from '../../img/oraculo/oraculo-textura.webp'
import aquarela from '../../img/aquarela-renata.webp'
import { Link } from '../../router.jsx'
import { Icon } from '../symbols/Symbols.jsx'
import { blogPosts } from '../../data/blogPosts.js'
import { ebooks, sitePages } from '../../data/sitePages.js'
import { cardMotion, Label, OutlineButton, PrimaryButton, Wrap } from '../shared/Shared.js'

const PageHero = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 27rem);
  align-items: center;
  gap: clamp(1.5rem, 4vw, 4rem);
  min-height: clamp(260px, 28vw, 420px);
  padding: clamp(2rem, 4vw, 4rem) var(--content-gutter);
  background: ${({ $textured }) => $textured
    ? `linear-gradient(105deg, #fffcf7f2 0%, #fffcf7e8 36%, #fffcf7cc 72%, #fffcf7bd 100%), url(${texture}) center 54% / cover no-repeat`
    : 'linear-gradient(105deg, #f0ece3 15%, var(--paper) 58%)'};
  border-bottom: 1px solid var(--line);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const HeroCopy = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    width: 6rem;
    height: 2px;
    margin-bottom: 1.25rem;
    background: var(--spectrum);
  }
`

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-bottom: 1.25rem;
  font-size: .875rem;
  font-weight: 600;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
`

const HeroTitle = styled.h1`
  font-size: clamp(2.4rem, 5vw, 4.6rem);
  letter-spacing: -.045em;
  line-height: 1.08;
`

const HeroLead = styled.p`
  max-width: 46ch;
  margin-top: 1.1rem;
  font-size: clamp(1.05rem, 1.5vw, 1.45rem);
  line-height: 1.5;
  color: var(--muted);
`

const HeroActions = styled.div`
  margin-top: 1.75rem;
`

const HeroImage = styled.img`
  width: 100%;
  max-height: 320px;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 50% 50% 6px 6px;

  ${({ $clean }) => $clean && css`
    width: min(100%, 27rem);
    max-height: none;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center 45%;
    border-radius: .4rem;
    box-shadow: 0 14px 32px #18384520;
    justify-self: end;
  `}

  @media (max-width: 760px) {
    max-width: 280px;
    justify-self: center;

    ${({ $clean }) => $clean && css`
      max-width: none;
      justify-self: start;
    `}
  }
`

const ContentBlock = styled.section`
  background: ${({ $tone }) => ($tone === 'cream' ? 'var(--cream)' : 'var(--paper)')};
  border-bottom: 1px solid var(--line);
  padding-block: clamp(2.5rem, 4.25vw, 4.75rem);
`

const Prose = styled(Wrap)`
  max-width: 82ch;

  h2 {
    margin-bottom: 1.25rem;
  }

  p {
    color: var(--muted);
    margin-bottom: 1.1rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
`

const SectionLayout = styled(Wrap)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(16rem, 26rem);
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3.5rem);

  ${({ $actions }) => $actions && css`
    grid-template-columns: minmax(0, 1fr) minmax(0, 40rem);
  `}

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
`

const SectionCopy = styled(Prose)`
  margin-inline: 0;
`

const SectionActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: .55rem;

  ${OutlineButton}, ${PrimaryButton} {
    flex: 0 1 auto;
    min-width: 0;
    padding-inline: .9rem;
    font-size: clamp(1rem, 1.1vw, 1.15rem);
    white-space: nowrap;
    line-height: 1.25;
    text-align: center;
  }

  svg {
    flex: none;
    width: 1.15rem;
    height: 1.15rem;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  @media (max-width: 600px) {
    ${OutlineButton}, ${PrimaryButton} {
      white-space: normal;
    }
  }
`

const Quote = styled.blockquote`
  margin: 2rem 0 0;
  padding: .25rem 0 .25rem 1.5rem;
  border-left: 3px solid var(--peach);
  color: var(--ink);
  font: 400 clamp(1.1rem, 1.7vw, 1.6rem)/1.5 var(--serif);

  cite {
    display: block;
    margin-top: .6rem;
    font: 600 .9rem/1.4 var(--sans);
    font-style: normal;
    color: var(--muted);
  }
`

const CtaBlock = styled.section`
  background: var(--cream);
  padding-block: clamp(2.5rem, 4vw, 4rem);
`

const CtaInner = styled(Wrap)`
  text-align: center;

  h2 {
    max-width: 22ch;
    margin: 0 auto 1.25rem;
  }

  p {
    max-width: 52ch;
    margin: 0 auto 1.75rem;
    color: var(--muted);
  }
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: .6rem;
  min-width: 0;
  padding: clamp(1.2rem, 2.5vw, 1.8rem);
  border: 1px solid var(--line);
  border-radius: .8rem;
  background: var(--paper);
  box-shadow: 0 6px 22px #1838450b;
  text-decoration: none;
  ${({ $index = 0 }) => cardMotion($index)}

  &:hover h3 {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  h3 {
    font-size: clamp(1.15rem, 1.8vw, 1.5rem);
  }

  p {
    color: var(--muted);
  }
`

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: .5rem;
  background: var(--cream);
`

const EbookGrid = styled(CardGrid)`
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(.85rem, 2vw, 1.5rem);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const EbookCard = styled(Card)`
  gap: .5rem;
  padding: clamp(1rem, 1.8vw, 1.35rem);

  h3 {
    font-size: clamp(1.05rem, 1.5vw, 1.3rem);
  }

  p:not(${Label}) {
    font-size: .92rem;
  }
`

const EbookCardImage = styled(CardImage)`
  aspect-ratio: 16 / 10;
`

const CardDate = styled.small`
  color: var(--violet);
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
`

const BlogCard = styled(Card)`
  position: relative;
  overflow: hidden;
  min-height: 15rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 auto;
    height: 3px;
    background: var(--spectrum);
  }

  h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    min-height: 2.6em;
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    overflow: hidden;
    margin: 0;
  }
`

const BlogCardLink = styled.span`
  margin-top: auto;
  color: var(--petrol);
  font-weight: 700;

  &::after {
    content: ' →';
  }
`

const Article = styled(Prose)`
  > p:first-child {
    font-family: var(--serif);
    font-size: clamp(1.15rem, 1.8vw, 1.5rem);
    line-height: 1.6;
    color: var(--ink);
  }
`

const Highlights = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: .8rem 0 .8rem 1.6rem;
    border-top: 1px solid var(--line);
    color: var(--muted);
    position: relative;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 1.35rem;
    width: .6rem;
    height: 2px;
    background: var(--peach);
  }
`

function Hero({ eyebrow, title, lead, image, backTo = '/', backLabel = 'Início', action, textured = false, cleanImage = false }) {
  return (
    <PageHero $textured={textured}>
      <HeroCopy>
        <Breadcrumb>
          <Link to={backTo}>{backLabel}</Link>
          <span aria-hidden="true">/</span>
          <span>{title}</span>
        </Breadcrumb>
        <Label>{eyebrow}</Label>
        <HeroTitle>{title}</HeroTitle>
        <HeroLead>{lead}</HeroLead>
        {action && <HeroActions>{action}</HeroActions>}
      </HeroCopy>
      {image && <HeroImage src={image} alt="" $clean={cleanImage} />}
    </PageHero>
  )
}

function Cta({ title, text, to, label }) {
  return (
    <CtaBlock>
      <CtaInner>
        <h2>{title}</h2>
        <p>{text}</p>
        <OutlineButton as={Link} to={to}>{label}</OutlineButton>
      </CtaInner>
    </CtaBlock>
  )
}

export function NotFoundView() {
  return (
    <>
      <Hero eyebrow="Página não encontrada" title="Não encontramos esta página" lead="O endereço pode ter mudado. Você pode voltar ao início e navegar pelas páginas do site." />
      <Cta title="Voltar ao início" text="Conheça o trabalho da Renata e encontre o que procura." to="/" label="Ir para a página inicial" />
    </>
  )
}

function EbooksList() {
  return (
    <ContentBlock $tone="cream" id="escolha-seu-guia">
      <Prose>
        <h2>Escolha seu guia</h2>
      </Prose>
      <Wrap>
        <EbookGrid>
          {ebooks.map((ebook, index) => (
            <EbookCard key={ebook.slug} to={`/ebooks/${ebook.slug}`} $index={index}>
              {ebook.image && <EbookCardImage src={ebook.image} alt="" />}
              <Label>{ebook.free ? 'Gratuito' : 'E-book'}</Label>
              <h3>{ebook.title}</h3>
              <p>{ebook.lead}</p>
            </EbookCard>
          ))}
        </EbookGrid>
      </Wrap>
    </ContentBlock>
  )
}

function BlogList() {
  return (
    <ContentBlock $tone="cream">
      <Prose>
        <h2>Últimas reflexões</h2>
      </Prose>
      <Wrap>
        <CardGrid>
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} to={`/blog/${post.slug}`} $index={index}>
              {post.date && <CardDate>{post.date}</CardDate>}
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <BlogCardLink>Ler artigo</BlogCardLink>
            </BlogCard>
          ))}
        </CardGrid>
      </Wrap>
    </ContentBlock>
  )
}

export function PageView({ slug }) {
  const page = sitePages[slug]
  if (!page) return <NotFoundView />

  return (
    <>
      <Hero eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} textured={slug === 'ebooks' || slug === 'blog'} cleanImage={slug === 'ebooks' || slug === 'blog'} />
      {slug === 'ebooks' && <EbooksList />}
      {page.sections.map((section, index) => (
        <ContentBlock key={section.title} $tone={index % 2 ? 'cream' : 'paper'}>
          <SectionLayout $actions={Boolean(section.actions)}>
            <SectionCopy>
              <h2>{section.title}</h2>
              {section.paragraphs.map((text) => <p key={text}>{text}</p>)}
            </SectionCopy>
            {section.actions && (
              <SectionActions>
                {section.actions.map((action) => {
                  const ActionButton = action.primary ? PrimaryButton : OutlineButton
                  return action.href
                    ? (
                      <ActionButton
                        key={action.label}
                        href={action.href}
                        target={action.external ? '_blank' : undefined}
                        rel={action.external ? 'noopener noreferrer' : undefined}
                      >
                        {action.icon && <Icon name={action.icon} />}
                        {action.label}
                      </ActionButton>
                    )
                    : <ActionButton key={action.label} as="button" type="button">
                      {action.icon && <Icon name={action.icon} />}
                      {action.label}
                    </ActionButton>
                })}
              </SectionActions>
            )}
          </SectionLayout>
        </ContentBlock>
      ))}
      {page.quote && (
        <ContentBlock $tone={page.sections.length % 2 ? 'cream' : 'paper'}>
          <Prose>
            <Quote>
              {page.quote}
              {page.quoteAuthor && <cite>{page.quoteAuthor}</cite>}
            </Quote>
          </Prose>
        </ContentBlock>
      )}
      {slug === 'blog' && <BlogList />}
      {slug !== 'ebooks' && (
        <Cta
          title="Vamos conversar?"
          text="Se você está repensando uma escolha ou quer criar uma experiência para sua equipe, me conte um pouco do seu momento."
          to={page.cta.to}
          label={page.cta.label}
        />
      )}
    </>
  )
}

export function EbookView({ slug }) {
  const ebook = ebooks.find((item) => item.slug === slug)
  if (!ebook) return <NotFoundView />

  return (
    <>
      <Hero
        eyebrow={ebook.free ? 'E-book gratuito' : 'E-book'}
        title={ebook.title}
        lead={ebook.lead}
        image={ebook.image}
        textured
        cleanImage
        backTo="/ebooks"
        backLabel="E-books"
        action={
          <PrimaryButton href={ebook.buyLink} target="_blank" rel="noopener noreferrer">
            {ebook.price ? `Comprar por R$ ${ebook.price}` : 'Comprar'}
          </PrimaryButton>
        }
      />
      <ContentBlock>
        <Prose>
          <h2>O que você encontra</h2>
          <Highlights>
            {ebook.paragraphs.map((text) => <li key={text}>{text}</li>)}
          </Highlights>
        </Prose>
      </ContentBlock>
      {ebook.sections?.map((section, index) => (
        <ContentBlock key={section.title} $tone={index % 2 ? 'paper' : 'cream'}>
          <Prose>
            <h2>{section.title}</h2>
            <Highlights>
              {section.items.map((item) => <li key={item}>{item}</li>)}
            </Highlights>
          </Prose>
        </ContentBlock>
      ))}
      {ebook.quote && (
        <ContentBlock $tone={ebook.sections ? (ebook.sections.length % 2 ? 'paper' : 'cream') : 'cream'}>
          <Prose><Quote>{ebook.quote}</Quote></Prose>
        </ContentBlock>
      )}
    </>
  )
}

export function BlogPostView({ slug }) {
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) return <NotFoundView />

  return (
    <>
      <Hero
        eyebrow="Blog"
        title={post.title}
        lead={post.date ? `Publicado em ${post.date}` : 'Reflexões sobre o caminho e os ritmos da vida.'}
        image={aquarela}
        textured
        cleanImage
        backTo="/blog"
        backLabel="Blog"
      />
      <ContentBlock>
        <Article>
          {post.paragraphs.map((text) => <p key={text}>{text}</p>)}
        </Article>
      </ContentBlock>
      <Cta
        title="Vamos conversar?"
        text="Gostou da reflexão? Conte o que ela despertou em você."
        to="/#contato"
        label="Falar com a Renata"
      />
    </>
  )
}
