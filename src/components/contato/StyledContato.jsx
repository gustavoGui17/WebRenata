import styled from 'styled-components'
import Social from '../social/Social.jsx'
import { Icon } from '../symbols/Symbols.jsx'
import { Label, Wrap } from '../shared/Shared.js'

const ContactSection = styled.section`
  border-top: 1px solid #d9e3d2;
  background: var(--cream);
  color: var(--ink);

  ${Label} {
    color: var(--violet);
  }
`

const ContactGrid = styled(Wrap)`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 30rem);
  gap: clamp(2rem, 6vw, 7rem);
  align-items: center;
  padding-block: clamp(3rem, 6vw, 6rem) clamp(2rem, 4vw, 4rem);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
`

const ContactIntro = styled.div`
  h2 {
    max-width: 17ch;
    line-height: 1.23;
  }

  h2 span {
    position: relative;
    display: inline-block;
  }

  h2 svg {
    position: absolute;
    left: 0;
    bottom: -.07em;
    width: 100%;
    height: .22em;
    fill: var(--peach);
  }
`

const IntroText = styled.p`
  max-width: 50ch;
  margin-top: 1.25rem;
  color: var(--muted);
`

const ContactOptions = styled.div`
  border: 1px solid #dee6da;
  border-radius: 1.15rem;
  background: var(--paper);
  color: var(--ink);
  padding: clamp(1.1rem, 2.6vw, 2.25rem);

  h3 {
    margin-bottom: .9rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    border-top: 1px solid #d9ddcd;
  }

  a {
    display: grid;
    grid-template-columns: 1.9rem minmax(0, 1fr);
    align-items: center;
    gap: .9rem;
    padding: .8rem .35rem;
    text-decoration: none;

    &:hover {
      background: #fffdf6;

      strong {
        text-decoration: underline;
        text-underline-offset: 4px;
      }
    }
  }

  svg {
    width: 1.65rem;
    height: 1.65rem;
    color: var(--violet);
  }

  strong,
  small {
    display: block;
  }

  small {
    font-size: .9rem;
    color: var(--muted);
  }
`

const ContactFooter = styled(Wrap)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: .75rem 2rem;
  border-top: 1px solid #d9dfd3;
  padding-block: 1.2rem;
`

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  text-underline-offset: 4px;
  overflow-wrap: anywhere;

  svg {
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
    color: #28576a;
  }
`

const options = [
  {
    icon: 'lotus',
    title: 'Atendimento individual',
    text: 'Converse sobre seu momento e o que você quer trabalhar.',
    subject: 'Atendimento%20individual',
  },
  {
    icon: 'calendar',
    title: 'Workshops',
    text: 'Consulte as próximas datas e vivências.',
    subject: 'Workshops',
  },
  {
    icon: 'people',
    title: 'Para equipes',
    text: 'Conte o que você gostaria de desenvolver com sua equipe.',
    subject: 'Para%20equipes',
  },
]

export default function StyledContato() {
  return (
    <ContactSection id="contato" aria-labelledby="contact-title">
      <ContactGrid>
        <ContactIntro>
          <Label>Contato</Label>
          <h2 id="contact-title">
            <span>Vamos conversar<svg viewBox="0 0 370 31" preserveAspectRatio="none" aria-hidden="true"><path d="M0 12c70 49 255-41 370 5C251-16 73 70 0 12Z" /></svg></span> sobre o que você está buscando?
          </h2>
          <IntroText>
            Se você está repensando uma escolha ou quer criar uma experiência para sua equipe, me conte um pouco do seu momento. A partir daí, podemos conversar sobre o próximo passo.
          </IntroText>
        </ContactIntro>
        <ContactOptions>
          <h3>Como posso ajudar?</h3>
          <ul>
            {options.map(({ icon, title, text, subject }) => (
              <li key={title}>
                <a href={`mailto:contato@renatalis.com.br?subject=${subject}`}>
                  <Icon name={icon} />
                  <span><strong>{title}</strong><small>{text}</small></span>
                </a>
              </li>
            ))}
          </ul>
        </ContactOptions>
      </ContactGrid>
      <ContactFooter>
        <EmailLink href="mailto:contato@renatalis.com.br">
          <Icon name="mail" /> contato@renatalis.com.br
        </EmailLink>
        <Social compact />
      </ContactFooter>
    </ContactSection>
  )
}
