import styled from 'styled-components'

const HiddenSvg = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
`

export function Icon({ name }) {
  return (
    <svg aria-hidden="true">
      <use href={`#${name}`} />
    </svg>
  )
}

export default function Symbols() {
  return (
    <HiddenSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <symbol id="calendar" viewBox="0 0 32 32">
        <rect x="4" y="7" width="24" height="22" rx="3" />
        <path d="M10 3v8m12-8v8M4 14h24" />
      </symbol>
      <symbol id="mail" viewBox="0 0 24 24">
        <rect x="2.5" y="5" width="19" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </symbol>
      <symbol id="telegram" viewBox="0 0 24 24">
        <path d="m3 11 18-7-4 16-6-5-3 3-1-5-4-2Zm4 2 10-6-6 8" />
      </symbol>
      <symbol id="instagram" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none" />
      </symbol>
      <symbol id="lotus" viewBox="0 0 64 52">
        <path d="M32 43C18 39 17 24 32 5c15 19 14 34 0 38Zm0 0C17 49 7 37 3 24c13-3 23 3 29 19Zm0 0c15 6 25-6 29-19-13-3-23 3-29 19ZM17 28c-3-5-4-11-4-17 6 2 11 5 14 9m20 8c3-5 4-11 4-17-6 2-11 5-14 9" />
      </symbol>
      <symbol id="people" viewBox="0 0 64 52">
        <circle cx="32" cy="13" r="8" />
        <circle cx="13" cy="19" r="6" />
        <circle cx="51" cy="19" r="6" />
        <path d="M16 43c0-11 6-17 16-17s16 6 16 17M3 43c0-10 4-15 13-15m45 15c0-10-4-15-13-15" />
      </symbol>
    </HiddenSvg>
  )
}
