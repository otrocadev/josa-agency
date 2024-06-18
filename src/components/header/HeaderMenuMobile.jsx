export default function HeaderMenuMobile() {
  return (
    <div className="fixed z-20 w-full h-full mt-16 sm:flex justify-center items-center backdrop-blur-lg">
      <nav className="font-semibold flex flex-col gap-8 text-xl p-12">
        <a className="hover:scale-110" href="#services">
          Serveis
        </a>
        <a className="hover:scale-110" href="#procedure">
          Procediment
        </a>
        <a className="hover:scale-110" href="#team">
          Equip
        </a>
        <a className="hover:scale-110" href="#contact">
          Contacte
        </a>
      </nav>
    </div>
  )
}
