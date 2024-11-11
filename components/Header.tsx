import Link from 'next/link'

interface HeaderProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export function Header({ activeSection, scrollToSection }: HeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-[#E2FF3F]">
          Denis Palma
        </Link>
        <div className="flex gap-6">
          {['about', 'work', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`transition-colors hover:text-[#E2FF3F] ${
                activeSection === section ? 'text-[#E2FF3F]' : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}
