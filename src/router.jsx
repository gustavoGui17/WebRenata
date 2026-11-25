import { createContext, useContext, useEffect, useState } from 'react'

const RouteContext = createContext({ pathname: '/', navigate: () => {} })

const normalize = (value) => value.replace(/\/+$/, '') || '/'

const scrollToTarget = () => {
  const id = window.location.hash.slice(1)
  if (id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 0 })
  }
}

export function RouterProvider({ children }) {
  const [pathname, setPathname] = useState(() => normalize(window.location.pathname))

  useEffect(() => {
    const onPopState = () => {
      setPathname(normalize(window.location.pathname))
      setTimeout(scrollToTarget, 60)
    }
    window.addEventListener('popstate', onPopState)
    const timer = setTimeout(scrollToTarget, 100)
    return () => {
      window.removeEventListener('popstate', onPopState)
      clearTimeout(timer)
    }
  }, [])

  const navigate = (to) => {
    if (to === `${window.location.pathname}${window.location.hash}`) {
      scrollToTarget()
      return
    }
    window.history.pushState({}, '', to)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return <RouteContext.Provider value={{ pathname, navigate }}>{children}</RouteContext.Provider>
}

export function useRoute() {
  return useContext(RouteContext)
}

export function Link({ to, onClick, children, ...props }) {
  const { navigate } = useRoute()

  const handleClick = (event) => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    navigate(to)
  }

  return <a href={to} onClick={handleClick} {...props}>{children}</a>
}
