import ThemeToggleButton from "./ThemeToggleButton"

function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center px-4 md:px-14 py-8 md:py-6 shadow-lg bg-white dark:bg-darkBlue sticky top-0 z-50">
      <span className="text-lg md:text-xl lg:text-2xl font-extrabold">
        Where in the world?
      </span>

      <ThemeToggleButton />

    </nav>
  )
}

export default NavBar