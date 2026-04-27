import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="bg-gray-900 text-gray-400 py-3 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <span>{t("phone")}</span>
              <span>{t("email")}</span>
            </div>
            <div className="flex items-center gap-4">
              <select 
                className="bg-gray-900 text-gray-400 text-xs focus:outline-none hover:text-white transition"
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="es">ES Español</option>
                <option value="en">EN English</option>
                <option value="pt">PT Português</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg border-b-4 border-red-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-red-600 text-white rounded p-2 font-bold text-xl">
                MQ
              </div>
              <div>
                <h1 className="text-2xl font-bold">Mulero Quintero</h1>
                <p className="text-gray-400 text-xs">Materiales de Construcción</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 items-center">
              <Link href="/">
                <button className="hover:text-red-500 transition-colors duration-200 font-medium px-3 py-2 rounded">
                  {t("header.home")}
                </button>
              </Link>
              <Link href="/categorias">
                <button className="hover:text-red-500 transition-colors duration-200 font-medium px-3 py-2 rounded">
                  {t("header.products")}
                </button>
              </Link>
              <Link href="/blog">
                <button className="hover:text-red-500 transition-colors duration-200 font-medium px-3 py-2 rounded">
                  {t("header.blog")}
                </button>
              </Link>
              <Link href="/marcas">
                <button className="hover:text-red-500 transition-colors duration-200 font-medium px-3 py-2 rounded">
                  {t("header.brands")}
                </button>
              </Link>
              <Link href="/contacto">
                <button className="hover:text-red-500 transition-colors duration-200 font-medium px-3 py-2 rounded">
                  {t("header.contact")}
                </button>
              </Link>
              <Link href="/contacto">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold transition-colors duration-200 ml-4">
                  {t("header.budget")}
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:text-red-500 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-700 mt-4">
              <Link href="/">
                <a className="block hover:text-red-500 transition py-2 font-medium">{t("header.home")}</a>
              </Link>
              <Link href="/categorias">
                <a className="block hover:text-red-500 transition py-2 font-medium">{t("header.products")}</a>
              </Link>
              <Link href="/blog">
                <a className="block hover:text-red-500 transition py-2 font-medium">{t("header.blog")}</a>
              </Link>
              <Link href="/marcas">
                <a className="block hover:text-red-500 transition py-2 font-medium">{t("header.brands")}</a>
              </Link>
              <Link href="/contacto">
                <a className="block hover:text-red-500 transition py-2 font-medium">{t("header.contact")}</a>
              </Link>
              <Link href="/contacto">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold transition-colors duration-200 mt-4">
                  {t("header.budget")}
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
