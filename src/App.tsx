import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { routerBasename } from './config/assets'
import { localeFromPath, paths } from './config/routes'
import { ThemeProvider } from './context/ThemeProvider'
import { AboutPage } from './pages/About'
import { ContactPage } from './pages/Contact'
import { GalleryPage } from './pages/Gallery'
import { HomePage } from './pages/Home'
import { LegalPage } from './pages/Legal'
import { ServicesPage } from './pages/Services'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const scrollToHash = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      requestAnimationFrame(scrollToHash)
      const timer = window.setTimeout(scrollToHash, 80)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function NotFoundRedirect() {
  const { pathname } = useLocation()
  const home = paths[localeFromPath(pathname)].home
  return <Navigate to={home} replace />
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/o-mnie" element={<AboutPage />} />
          <Route path="/uslugi" element={<ServicesPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/polityka-prywatnosci" element={<LegalPage />} />
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/gallery" element={<GalleryPage />} />
          <Route path="/en/about" element={<AboutPage />} />
          <Route path="/en/services" element={<ServicesPage />} />
          <Route path="/en/contact" element={<ContactPage />} />
          <Route path="/en/privacy" element={<LegalPage />} />
          <Route path="*" element={<NotFoundRedirect />} />
        </Route>
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={routerBasename()}>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
