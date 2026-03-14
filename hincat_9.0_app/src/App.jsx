import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { NavigationProvider, useNavigation } from './context/NavigationContext'
import LoaderTransition from './components/loaderTransition'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import DashboardPage from './pages/DashboardPage'

function AppRoutes() {
  const { showLoader } = useNavigation()
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      {showLoader && <LoaderTransition />}
    </>
  )
}

function App() {
  return (
    <AuthProvider>
      <NavigationProvider>
        <AppRoutes />
      </NavigationProvider>
    </AuthProvider>
  )
}

export default App
