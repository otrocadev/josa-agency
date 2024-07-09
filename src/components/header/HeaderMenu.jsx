import { useState } from 'react'

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
            <button onClick={handleMenuOpening}>{props.menu}</button>
          ) : (
            <>{props.menuDesktop}</>
          )
        }
      </header>

      {
        // If it is mobile checks if it is open to render the mobile menu
        isMenuOpen ? (
          <div className="fixed z-20 w-full h-full mt-16 sm:flex justify-center items-center backdrop-blur-lg">
            <nav className="font-semibold flex flex-col gap-8 text-xl p-12">
              <a
                onClick={handleMenuOpening}
                className="hover:scale-110"
                href="#services"
              >
                Serveis
              </a>
              <a
                onClick={handleMenuOpening}
                className="hover:scale-110"
                href="#procedure"
              >
                Procediment
              </a>
              <a
                onClick={handleMenuOpening}
                className="hover:scale-110"
                href="#team"
              >
                Equip
              </a>
              <a
                onClick={handleMenuOpening}
                className="hover:scale-110"
                href="mailto:georgina@josa.cat"
              >
                Contacte
              </a>
            </nav>
          </div>
        ) : (
          <></>
        )
      }
    </>
  )
}
