export default function HarinaPasionPage() {
  const imagenes = [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b"
  ];
  return (
    <div
      className="min-h-screen text-gray-800 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.92), rgba(255,240,245,0.92)), url('https://images.unsplash.com/photo-1519864600265-abb23847ef2c?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-pink-200 via-pink-100 to-white py-20 px-6 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-white shadow-xl rounded-full px-6 py-3 mb-6">
            <span className="text-pink-600 font-bold text-lg">🍰 Postres Peruanos Artesanales</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-pink-700 mb-6">
            Harina & Pasión
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Tortas, bocaditos dulces y salados, cheesecake, tres leches,
            selva negra y mucho más. Hecho con amor y sabor peruano.
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl max-w-3xl mx-auto mb-10 text-left border border-pink-200">
            <h3 className="text-2xl font-bold text-pink-700 mb-4 text-center">
              📌 Información Importante
            </h3>

            <div className="space-y-3 text-lg text-gray-700">
              <p>
                🕒 <span className="font-bold">Horario de atención:</span><br />
                Lunes a Domingo de 11:00 AM a 9:00 PM
              </p>

              <p>
                🚚 <span className="font-bold">Envíos:</span><br />
                Los envíos se pagan aparte. El cliente debe cubrir la ida y vuelta del Uber.
              </p>

              <p>
                🏪 <span className="font-bold">Recojo en tienda:</span><br />
                También puedes recoger tu pedido directamente en tienda sin costo adicional.
              </p>

              <p>
                📍 <span className="font-bold">Ubicación:</span><br />
                Plaza Puerto Rubio 19, Calle de Peña Rubia.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://wa.me/34633144612"
              className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg"
            >
              📲 WhatsApp: 633 14 46 12
            </a>

            <a
              href="tel:+34614221450"
              className="bg-pink-600 hover:bg-pink-700 transition text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg"
            >
              ☎️ Llamar: 614 22 14 50
            </a>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-700 mb-4">
            Nuestros Postres
          </h2>
          <p className="text-gray-600 text-lg">
            Elaboraciones frescas y personalizadas para cada ocasión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="sandbox:/mnt/data/42037.jpg"
              alt="Tarta Real Madrid"
              className="h-72 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-pink-700 mb-2">
                Tartas Temáticas
              </h3>
              <p className="text-gray-600">
                Diseños personalizados para niños, fútbol, princesas y más.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="sandbox:/mnt/data/42036.jpg"
              alt="Tarta Dinosaurios"
              className="h-72 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-pink-700 mb-2">
                Diseños Infantiles
              </h3>
              <p className="text-gray-600">
                Tortas creativas y coloridas para cumpleaños especiales.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="sandbox:/mnt/data/42035.jpg"
              alt="Tarta Número"
              className="h-72 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-pink-700 mb-2">
                Tartas de Números
              </h3>
              <p className="text-gray-600">
                Decoraciones elegantes con frutas, macarons y detalles únicos.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src="sandbox:/mnt/data/42034.jpg" alt="Capibara" className="rounded-3xl shadow-xl h-96 w-full object-cover" />
          <img src="sandbox:/mnt/data/42028.jpg" alt="Tarta elegante" className="rounded-3xl shadow-xl h-96 w-full object-cover" />
          <img src="sandbox:/mnt/data/42027.jpg" alt="Tarta safari" className="rounded-3xl shadow-xl h-96 w-full object-cover" />
          <img src="sandbox:/mnt/data/42026.jpg" alt="Spiderman" className="rounded-3xl shadow-xl h-96 w-full object-cover" />
          <img src="sandbox:/mnt/data/42025.jpg" alt="Tarta rosa" className="rounded-3xl shadow-xl h-96 w-full object-cover" />
          <img src="sandbox:/mnt/data/42024.jpg" alt="Princess cake" className="rounded-3xl shadow-xl h-96 w-full object-cover" />
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-16 px-6 bg-pink-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-pink-700 mb-4">
              🎥 Nuestros Trabajos en Video
            </h2>
            <p className="text-lg text-gray-700">
              Mira algunos de nuestros diseños y decoraciones especiales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <video
              controls
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover bg-black"
            >
              <source src="sandbox:/mnt/data/VID-20260517-WA0031.mp4" type="video/mp4" />
            </video>

            <video
              controls
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover bg-black"
            >
              <source src="sandbox:/mnt/data/VID-20260517-WA0023.mp4" type="video/mp4" />
            </video>

            <video
              controls
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover bg-black"
            >
              <source src="sandbox:/mnt/data/VID-20260517-WA0028.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-pink-700 mb-10">
            Lo que ofrecemos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-pink-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-pink-700">
                🎂 Tortas Especiales
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• Tarta de Chocolate</li>
                <li>• Tarta Tres Leches</li>
                <li>• Selva Negra</li>
                <li>• Tarta Helada</li>
                <li>• Cheesecake</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-pink-700">
                🧁 Productos de Repostería
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• Bases para tortas</li>
                <li>• Cajas para repostería</li>
                <li>• Impresiones comestibles</li>
                <li>• Toppers personalizados</li>
                <li>• Insumos de repostería</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-600 to-pink-400 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">
            Haz tu pedido hoy
          </h2>

          <p className="text-xl mb-6">
            Escríbenos por WhatsApp y te ayudamos con tu pedido personalizado.
          </p>

          <div className="bg-white/20 border border-white/30 rounded-3xl p-5 max-w-3xl mx-auto mb-10 backdrop-blur-sm">
            <p className="text-lg md:text-xl leading-relaxed">
              💬 Los precios de las tartas y postres pueden variar según el tamaño,
              diseño y personalización. Para consultar precios y pedidos,
              comunícate directamente con la dueña.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="https://wa.me/34633144612"
              className="bg-white text-pink-700 px-8 py-4 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition"
            >
              📱 633 14 46 12
            </a>

            <a
              href="https://wa.me/34614221450"
              className="bg-white text-pink-700 px-8 py-4 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition"
            >
              📱 614 22 14 50
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-lg font-semibold">
          © 2026 Harina & Pasión — Postres Peruanos Artesanales
        </p>
        <p className="text-gray-400 mt-2">
          Hecho con amor y mucha pasión 💖
        </p>

        <p className="text-pink-300 mt-2 font-medium">
          Atención personalizada por Eberilda Valenzuela
        </p>
      </footer>
    </div>
  );
}
