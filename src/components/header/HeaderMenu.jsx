import { useState } from 'react'
import HeaderMenuMobile from './HeaderMenuMobile.jsx'

export default function HeaderMenuJSX(props) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 640 ? true : false
  )
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuOpening = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="flex justify-between h-16 w-full p-5 fixed z-10 backdrop-blur-lg border-b border-josa-dark-green">
        <a href="/" className="h-full">
          {props.logo}
        </a>

        {
          // Check if it is mobile to show the desktop menu or the menu button
          isMobile ? (
            <button onClick={handleMenuOpening} className="">
              {props.menu}
            </button>
          ) : (
            <>{props.menuDesktop}</>
          )
        }
      </header>

      {
        // If it is mobile checks if it is open to show the mobile Rendering
        isMenuOpen ? <HeaderMenuMobile /> : <></>
      }
    </>
  )
}
