import { useEffect, useState } from 'react'

const SCROLL_OFFSET = 140

export function useScrollSpy(sectionHrefs: string[], defaultHref: string) {
  const [activeHref, setActiveHref] = useState(defaultHref)

  useEffect(() => {
    const sectionIds = sectionHrefs.map((href) => href.replace('#', ''))

    const resolveActive = () => {
      const scrollY = window.scrollY + SCROLL_OFFSET
      let current = defaultHref

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        const sectionTop = element.offsetTop
        if (scrollY >= sectionTop) {
          current = `#${id}`
        }
      }

      setActiveHref(current)
    }

    const onHashChange = () => {
      const hash = window.location.hash
      if (hash && sectionHrefs.includes(hash)) {
        setActiveHref(hash)
      }
    }

    resolveActive()
    window.addEventListener('scroll', resolveActive, { passive: true })
    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.removeEventListener('scroll', resolveActive)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [sectionHrefs, defaultHref])

  return activeHref
}
