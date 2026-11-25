import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;1,400&display=swap');

  :root {
    color-scheme: light;
    --ink: #183845;
    --violet: #28576a;
    --red: #db2634;
    --magenta: #982978;
    --peach: #ed6527;
    --yellow: #f4ca12;
    --blue: #008fc0;
    --green: #318b48;
    --spectrum: linear-gradient(90deg, var(--magenta), var(--red), var(--peach), var(--yellow), var(--green), var(--blue));
    --product-colors: linear-gradient(105deg, #806680, #bf776c 23%, #be9150 48%, #749474 72%, #4d8f9e);
    --brand-bar: linear-gradient(#17283273, #17283273), var(--product-colors);
    --brand-footer: linear-gradient(#fffcf7db, #fffcf7db), var(--product-colors);
    --paper: #fffcf7;
    --cream: #f6f2ea;
    --mist: #edf0ea;
    --petrol: #214b54;
    --muted: #465c58;
    --line: #d7dfd2;
    --content-gutter: 4.6%;
    --serif: 'Libre Baskerville', Georgia, serif;
    --sans: 'DM Sans', system-ui, sans-serif;
  }

  @media (max-width: 1050px) {
    :root { --content-gutter: 3% }
  }

  @media (max-width: 760px) {
    :root { --content-gutter: 5% }
  }

  * { box-sizing: border-box }
  html { scroll-behavior: smooth }
  body { margin: 0; background: var(--paper); color: var(--ink); font: 1rem/1.6 var(--sans) }
  a { color: inherit }
  a:focus-visible { outline: 3px solid #286980; outline-offset: 5px }
  img { display: block; max-width: 100%; object-fit: cover }
  h1, h2, h3, p { margin: 0 }
  h1, h2, h3 { font-family: var(--serif); font-weight: 400; line-height: 1.14 }
  h2 { font-size: clamp(2.15rem, 4vw, 3.65rem); letter-spacing: -.04em }
  h3 { font-size: 1.45rem }
  svg use { fill: none; stroke: currentColor; stroke-width: 1.65; stroke-linecap: round; stroke-linejoin: round }
  [id] { scroll-margin-top: 12.5rem }

  @media (max-width: 760px) {
    [id] { scroll-margin-top: 11.5rem }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto }
  }
`

export default GlobalStyle
