import { useState } from 'react'
import './App.css'
import heroImage from './assets/images/hero-image.jpg'
import esBuahKlasik from './assets/images/es-buah-klasik.jpg'
import esBuahSpesial from './assets/images/es-buah-spesial.jpg'
import logo from './assets/images/logo.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Es Buah Segar Guguak" className="h-14" />
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-green-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-green-800 hover:text-green-600 font-medium">Beranda</button>
            <button onClick={() => scrollToSection('menu')} className="text-green-800 hover:text-green-600 font-medium">Menu</button>
            <button onClick={() => scrollToSection('promo')} className="text-green-800 hover:text-green-600 font-medium">Promo</button>
            <button onClick={() => scrollToSection('about')} className="text-green-800 hover:text-green-600 font-medium">Tentang Kami</button>
            <button onClick={() => scrollToSection('contact')} className="text-green-800 hover:text-green-600 font-medium">Kontak</button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 py-2 shadow-lg">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-green-800 hover:text-green-600 font-medium py-2">Beranda</button>
              <button onClick={() => scrollToSection('menu')} className="text-green-800 hover:text-green-600 font-medium py-2">Menu</button>
              <button onClick={() => scrollToSection('promo')} className="text-green-800 hover:text-green-600 font-medium py-2">Promo</button>
              <button onClick={() => scrollToSection('about')} className="text-green-800 hover:text-green-600 font-medium py-2">Tentang Kami</button>
              <button onClick={() => scrollToSection('contact')} className="text-green-800 hover:text-green-600 font-medium py-2">Kontak</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="relative h-[80vh] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Es Buah Segar Guguak" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Es Buah Segar Guguak</h1>
            <p className="text-xl md:text-2xl text-white mb-8">Kesegaran Alami dari Kaki Bukit Pintu Angin</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Es%20Buah%20Segar%20Guguak"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pesan Sekarang
              </a>
              <button 
                onClick={() => scrollToSection('menu')}
                className="bg-white hover:bg-gray-100 text-green-800 font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Lihat Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">Menu Es Buah Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={esBuahKlasik} alt="Es Buah Klasik Guguak" className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-green-800">Es Buah Klasik Guguak</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">Rp15.000</span>
                </div>
                <p className="text-gray-600 mb-4">Kombinasi buah-buahan segar lokal (pepaya, nanas, semangka) dengan sirup gula aren khas Minang, susu kental manis, dan topping cincau hitam.</p>
                <a 
                  href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Es%20Buah%20Klasik%20Guguak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
            
            {/* Menu Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={esBuahSpesial} alt="Es Buah Spesial Pintu Angin" className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-green-800">Es Buah Spesial Pintu Angin</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">Rp20.000</span>
                </div>
                <p className="text-gray-600 mb-4">Kombinasi buah premium (alpukat, mangga, nanas, pepaya) dengan sirup gula aren, susu kental manis, topping kelapa muda dan taburan selasih.</p>
                <a 
                  href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Es%20Buah%20Spesial%20Pintu%20Angin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
            
            {/* Menu Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-orange-300 to-red-400 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Kubang Special</h3>
                  <p className="text-white">Terinspirasi dari ketenaran Martabak Kubang</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-green-800">Es Buah Kubang Special</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">Rp18.000</span>
                </div>
                <p className="text-gray-600 mb-4">Kombinasi buah segar dengan sirup gula merah, topping kolang-kaling dan nata de coco, serta taburan kacang tanah sangrai khas Kubang.</p>
                <a 
                  href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Es%20Buah%20Kubang%20Special"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
            
            {/* Menu Item 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-300 to-green-400 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Talago Segar</h3>
                  <p className="text-white">Terinspirasi dari Nagari VII Koto Talago</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-green-800">Es Buah Talago Segar</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">Rp17.000</span>
                </div>
                <p className="text-gray-600 mb-4">Kombinasi buah segar (semangka, melon, nanas) dengan sirup gula aren, topping nata de coco dan jelly, serta taburan selasih.</p>
                <a 
                  href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Es%20Buah%20Talago%20Segar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
            
            {/* Menu Item 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Sinamar</h3>
                  <p className="text-white">Terinspirasi dari Batang Sinamar yang mengalir di Guguak</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-green-800">Es Buah Sinamar</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">Rp16.000</span>
                </div>
                <p className="text-gray-600 mb-4">Kombinasi buah segar dengan sirup biru (menyimbolkan kesegaran air Sinamar), topping jelly biru dan nata de coco.</p>
                <a 
                  href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Es%20Buah%20Sinamar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
            
            {/* Menu Item 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-yellow-300 to-green-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Si Jambi</h3>
                  <p className="text-white">Untuk anak-anak, terinspirasi dari cerita rakyat Si Jambi dari Guguak</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-green-800">Es Buah Anak-anak "Si Jambi"</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">Rp12.000</span>
                </div>
                <p className="text-gray-600 mb-4">Porsi lebih kecil untuk anak-anak dengan buah-buahan yang disukai anak-anak dan topping jelly aneka warna.</p>
                <a 
                  href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Es%20Buah%20Anak-anak%20Si%20Jambi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
          
          {/* Paket Menu */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-green-800 mb-8">Paket Spesial</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-green-500">
                <div className="bg-green-500 py-3">
                  <h4 className="text-xl font-bold text-white text-center">Paket Keluarga</h4>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-green-800">4 porsi Es Buah Klasik Guguak</span>
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">Rp50.000</span>
                  </div>
                  <p className="text-gray-600 mb-4">Cocok untuk keluarga atau acara kumpul-kumpul kecil. Hemat 20% dibanding beli satuan!</p>
                  <a 
                    href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Paket%20Keluarga%20Es%20Buah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-2 px-4 rounded-full transition duration-300"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-green-500">
                <div className="bg-green-500 py-3">
                  <h4 className="text-xl font-bold text-white text-center">Paket Hajatan</h4>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-green-800">20 cup Es Buah Klasik (ukuran sedang)</span>
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">Rp200.000</span>
                  </div>
                  <p className="text-gray-600 mb-4">Cocok untuk acara syukuran, pengajian, atau pertemuan kecil. Hemat 30% dibanding beli satuan dan gratis pengantaran untuk area Guguak!</p>
                  <a 
                    href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Paket%20Hajatan%20Es%20Buah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-2 px-4 rounded-full transition duration-300"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section id="promo" className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">Penawaran Khusus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Promo 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-500">
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">Promo Pembukaan "Selamat Datang di Guguak"</h3>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Diskon 20% untuk semua menu selama minggu pertama pembukaan
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Gratis topping tambahan untuk 50 pembeli pertama setiap hari
                  </li>
                </ul>
                <div className="bg-yellow-100 text-yellow-800 text-sm p-3 rounded-lg">
                  Promo berlaku selama minggu pertama pembukaan
                </div>
              </div>
            </div>
            
            {/* Promo 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">Paket Hemat "Martabak & Es Buah"</h3>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Kolaborasi dengan penjual Martabak Kubang lokal
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    1 porsi Martabak Manis (setengah loyang) + 2 Es Buah Klasik Guguak
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Harga spesial Rp45.000 (hemat Rp10.000)
                  </li>
                </ul>
                <a 
                  href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Paket%20Hemat%20Martabak%20%26%20Es%20Buah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Pesan Paket Hemat
                </a>
              </div>
            </div>
            
            {/* Promo 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">Program Loyalitas "Langganan Segar"</h3>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Kartu loyalitas digital (melalui WhatsApp)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Beli 10 kali Es Buah, gratis 1 Es Buah Klasik Guguak
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Poin tambahan untuk ulang tahun pelanggan
                  </li>
                </ul>
                <a 
                  href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20bergabung%20dengan%20Program%20Loyalitas%20Langganan%20Segar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Gabung Program
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">Tentang Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Es Buah Segar Guguak</h3>
              <p className="text-gray-600 mb-4">
                Es Buah Segar Guguak menawarkan minuman segar berkualitas dengan menggunakan buah-buahan pilihan dan bahan-bahan alami. Kami menggabungkan resep tradisional dengan sentuhan modern untuk menciptakan pengalaman menyegarkan yang unik bagi masyarakat Guguak dan sekitarnya.
              </p>
              <p className="text-gray-600 mb-4">
                Terinspirasi dari kekayaan alam dan budaya Guguak, Kabupaten Lima Puluh Kota, Sumatera Barat, kami menciptakan berbagai varian Es Buah yang tidak hanya menyegarkan tetapi juga memiliki cerita di balik setiap resepnya.
              </p>
              <p className="text-gray-600 mb-6">
                Kami berkomitmen untuk selalu menggunakan buah-buahan segar dari pasar lokal Guguak dan sekitarnya, serta bahan-bahan berkualitas untuk memberikan pengalaman terbaik bagi pelanggan kami.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-800 mb-4">Keunggulan Kami</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Menggunakan buah-buahan segar dari pasar lokal Guguak</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Sirup gula aren asli dari produsen lokal</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Resep rahasia keluarga dengan sentuhan khas Minangkabau</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Proses pembuatan yang memperhatikan standar kebersihan</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Pelayanan dengan senyum dan keramahan khas Minangkabau</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Cara Pemesanan</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Pemesanan Langsung</h4>
                    <p className="text-gray-600">Kunjungi lokasi Es Buah Segar Guguak di Guguak, Kabupaten Lima Puluh Kota. Jam operasional: 10.00 - 21.00 WIB (setiap hari).</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Pemesanan via WhatsApp</h4>
                    <p className="text-gray-600">Pesan melalui WhatsApp ke nomor 0813 9040 3669. Format pemesanan: Nama - Alamat - Pesanan - Jumlah.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Pre-Order untuk Acara</h4>
                    <p className="text-gray-600">Pemesanan untuk acara/hajatan minimal H-2. Konsultasi menu dan jumlah porsi tersedia via WhatsApp.</p>
                  </div>
                </div>
                
                <a 
                  href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Es%20Buah%20Segar%20Guguak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-3 px-4 rounded-full transition duration-300 mt-8"
                >
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Pesan Sekarang via WhatsApp
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">Kontak Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-1">Alamat</h4>
                    <p className="text-gray-600">Nagari Guguak VIII Koto, Kecamatan Guguak, Kabupaten Lima Puluh Kota, Sumatera Barat</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-1">Jam Operasional</h4>
                    <p className="text-gray-600">Setiap Hari: 10.00 - 21.00 WIB</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-1">WhatsApp</h4>
                    <p className="text-gray-600">0813 9040 3669</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-1">Media Sosial</h4>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-gray-600 hover:text-green-600 transition duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-green-600 transition duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Es%20Buah%20Segar%20Guguak"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-3 px-4 rounded-full transition duration-300 mt-8"
              >
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hubungi Kami via WhatsApp
                </div>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Lokasi Kami</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                  <p className="text-gray-600">Peta Lokasi Es Buah Segar Guguak</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-green-800 mb-2">Petunjuk Arah</h4>
                <p className="text-gray-600 mb-4">
                  Lokasi kami berada di pusat Nagari Guguak VIII Koto, Kecamatan Guguak, Kabupaten Lima Puluh Kota, Sumatera Barat. Mudah dijangkau dari pusat kota Payakumbuh.
                </p>
                <p className="text-gray-600">
                  Untuk petunjuk arah lebih detail, silakan hubungi kami melalui WhatsApp di 0813 9040 3669.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logo} alt="Es Buah Segar Guguak" className="h-16 mb-4" />
              <p className="text-green-200 mb-4">
                Kesegaran Alami dari Kaki Bukit Pintu Angin
              </p>
              <p className="text-green-200">
                © {new Date().getFullYear()} Es Buah Segar Guguak. All rights reserved.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Menu Kami</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('menu')} className="text-green-200 hover:text-white transition duration-300">Es Buah Klasik Guguak</button></li>
                <li><button onClick={() => scrollToSection('menu')} className="text-green-200 hover:text-white transition duration-300">Es Buah Spesial Pintu Angin</button></li>
                <li><button onClick={() => scrollToSection('menu')} className="text-green-200 hover:text-white transition duration-300">Es Buah Kubang Special</button></li>
                <li><button onClick={() => scrollToSection('menu')} className="text-green-200 hover:text-white transition duration-300">Es Buah Talago Segar</button></li>
                <li><button onClick={() => scrollToSection('menu')} className="text-green-200 hover:text-white transition duration-300">Es Buah Sinamar</button></li>
                <li><button onClick={() => scrollToSection('menu')} className="text-green-200 hover:text-white transition duration-300">Es Buah Anak-anak "Si Jambi"</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Kontak</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-green-200">0813 9040 3669</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-green-200">Nagari Guguak VIII Koto, Kecamatan Guguak, Kabupaten Lima Puluh Kota</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-green-200">Setiap Hari: 10.00 - 21.00 WIB</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <a 
                  href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Es%20Buah%20Segar%20Guguak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-800 hover:bg-green-200 font-bold py-2 px-4 rounded-full transition duration-300 inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/6281390403669?text=Halo,%20saya%20ingin%20memesan%20Es%20Buah%20Segar%20Guguak"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition duration-300 z-50"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
