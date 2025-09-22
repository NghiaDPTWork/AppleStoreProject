import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <>
      {/* Header */}
      <Header></Header>

      {/* Content */}
      <App></App>

      {/* Footer */}
      <Footer></Footer>
  </>
)
