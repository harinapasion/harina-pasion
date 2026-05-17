export default function HarinaPasionPage() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-pink-200 via-pink-100 to-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <div className="inline-block bg-white shadow-xl rounded-full px-6 py-3 mb-6">
            <span className="text-pink-600 font-bold text-lg">
              🍰 Postres Peruanos Artesanales
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-pink-700 mb-6">
            Harina & Pasión
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            Tortas, bocaditos dulces y salados, cheesecake,
            tres leches, selva negra y mucho más.
          </p>

          <div className="bg-white rounded-3xl p-6 shadow-xl max-w-3xl mx-auto mb-10 text-left">
            <h3 className="text-2xl font-bold text-pink-700 mb-4 text-center">
              📌 Información Importante
            </h3>

            <div className="space-y-3 text-lg text-gray-700">
              <p>
                🕒 <b>Horario:</b><br />
                Todos los días de 11:00 AM a 9:00 PM
              </p>

              <p>
                🚚 <b>Envíos:</b><br />
                Los envíos se pagan aparte.
                El cliente debe cubrir la ida y vuelta del Uber.
              </p>

              <p>
                🏪 <b>Recojo en tienda:</b><br />
                También puedes recoger tu pedido directamente en tienda.
              </p>

              <p>
                📍 <b>Ubicación:</b><br />
                Plaza Puerto Rubio 19, Calle de Peña Rubia
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://wa.me/34633144612"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg"
            >
              📲 WhatsApp
            </a>

            <a
              href="tel:+34614221450"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg"
            >
              ☎️ Llamar
            </a>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-700 mb-4">
            Nuestros Trabajos
          </h2>

          <p className="text-gray-600 text-lg">
            Diseños personalizados para cada ocasión 🎂
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
            alt="Torta"
            className="rounded-3xl shadow-xl h-80 w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1488477181946-6428a0291777"
            alt="Postre"
            className="rounded-3xl shadow-xl h-80 w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b"
            alt="Cupcakes"
            className="rounded-3xl shadow-xl h-80 w-full object-cover"
          />
        </div>
      </section>

      {/* PRECIOS */}
      <section className="bg-pink-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-pink-700 mb-6">
            💬 Consultar precios
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed">
            Los precios de las tartas y postres pueden variar
            según el tamaño, diseño y personalización.
            Para consultar precios y pedidos,
            comunícate directamente con la dueña.
          </p>

          <div className="mt-8 text-2xl font-bold text-pink-700">
            Eberilda Valenzuela
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-lg font-semibold">
          © 2026 Harina & Pasión
        </p>

        <p className="text-gray-400 mt-2">
          Postres Peruanos Artesanales 💖
        </p>
      </footer>
    </div>
  );
}