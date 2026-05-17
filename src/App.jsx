import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function App() {
  const imagenes = [
    "/IMG-20260517-WA0007.jpg",
    "/IMG-20260517-WA0008.jpg",
    "/IMG-20260517-WA0009.jpg",
    "/IMG-20260517-WA0011.jpg",
    "/IMG-20260517-WA0013.jpg",
    "/IMG-20260517-WA0014.jpg",
    "/IMG-20260517-WA0015.jpg",
    "/IMG-20260517-WA0016.jpg",
    "/IMG-20260517-WA0017.jpg",
    "/IMG-20260517-WA0021.jpg"
  ];

  const videos = [
    "/VID-20260517-WA0031.mp4",
    "/VID-20260517-WA0023.mp4",
    "/VID-20260517-WA0028.mp4",
  ];

  return (
    <div className="app">

      {/* HERO */}
      <section className="hero">
        <div className="overlay">

          <h1>🍰 Harina & Pasión</h1>

          <p className="descripcion">
            Tortas con diseño, bocaditos dulces y salados, cheesecake, tres leches,
            selva negra y mucho más. Hecho con amor y sabor peruano.
          </p>

          <div className="info">
            <h2>📌 Información Importante</h2>

            <p>
              🕒 Horario de atención:<br />
              Lunes a Domingo de 11:00 AM a 9:00 PM
            </p>

            <p>
              🚚 Los envíos se pagan aparte.
              El cliente debe cubrir la ida y vuelta del Uber.
            </p>

            <p>
              🏪 También puedes recoger tu pedido directamente en tienda
              sin costo adicional.
            </p>
          </div>

          <div className="botones">
            <a
              href="https://wa.me/34633144612"
              target="_blank"
            >
              📲 WhatsApp
            </a>

            <a href="tel:+34614221450">
              ☎️ Llamar
            </a>
          </div>

        </div>
      </section>

      {/* GALERÍA */}
      <section className="galeria">

        <h2>🍰 Nuestros Postres</h2>

        <p className="texto">
          Elaboraciones frescas y personalizadas para cada ocasión.
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          grabCursor={true}
          centeredSlides={true}
        >
          {imagenes.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt="" className="img" />
            </SwiperSlide>
          ))}
        </Swiper>

      </section>

      {/* SERVICIOS */}
      <section className="servicios">

        <h2>✨ Lo que ofrecemos</h2>

        <div className="cards">

          <div className="card">
            <h3>🎂 Tortas Especiales</h3>

            <ul>
              <li>Tarta de Chocolate</li>
              <li>Tarta Tres Leches</li>
              <li>Selva Negra</li>
              <li>Tarta Helada</li>
              <li>Cheesecake</li>
            </ul>
          </div>

          <div className="card">
            <h3>🧁 Productos de Repostería</h3>

            <ul>
              <li>Bases para tortas</li>
              <li>Cajas para repostería</li>
              <li>Impresiones comestibles</li>
              <li>Toppers personalizados</li>
              <li>Insumos de repostería</li>
            </ul>
          </div>

        </div>

      </section>

      {/* VIDEOS */}
      <section className="videos">

        <h2>🎥 Nuestros Trabajos en Video</h2>

        <p className="texto">
          Mira algunos de nuestros diseños y decoraciones especiales.
        </p>

        <div className="videos-grid">
          {videos.map((video, i) => (
            <video
              key={i}
              controls
              className="video"
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
        </div>

      </section>

      {/* CONTACTO */}
      <section className="contacto">

        <h2>Haz tu pedido hoy</h2>

        <p>
          Escríbenos por WhatsApp y te ayudamos con tu pedido personalizado.
        </p>

        <div className="precios">
          Los precios de las tartas y postres pueden variar según el tamaño,
          diseño y personalización. Para consultar precios y pedidos,
          comunícate directamente con la dueña.
        </div>

        <div className="botones">
          <a
            href="https://wa.me/34633144612"
            target="_blank"
          >
            📱 633 14 46 12
          </a>

          <a
            href="https://wa.me/34614221450"
            target="_blank"
          >
            📱 614 22 14 50
          </a>
        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <p>
          © 2026 Harina & Pasión — Postres Peruanos Artesanales
        </p>

        <p>
          Hecho con amor y mucha pasión 💖
        </p>

        <p>
          Atención personalizada por Eberilda Valenzuela
        </p>

      </footer>

    </div>
  );
}