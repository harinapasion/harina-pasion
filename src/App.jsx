import { useState } from "react";
import "./App.css";

export default function App() {

  const imagenes = [
    "/IMG-20260517-WA0007.jpg",
    "/IMG-20260517-WA0008.jpg",
    "/IMG-20260517-WA0009.jpg",
    "/IMG-20260517-WA00010.jpg",
    "/IMG-20260517-WA0011.jpg",
    "/IMG-20260517-WA0012.jpg",
    "/IMG-20260517-WA0013.jpg",
    "/IMG-20260517-WA0014.jpg",
    "/IMG-20260517-WA0015.jpg",
    "/IMG-20260517-WA0016.jpg",
    "/IMG-20260517-WA0017.jpg",
    "/IMG-20260517-WA0018.jpg",
    "/IMG-20260517-WA0019.jpg",
    "/IMG-20260517-WA0020.jpg",
    "/IMG-20260517-WA0021.jpg"
  ];

  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="app">

      {/* HERO */}
      <header className="hero">
        <h1>🍰 Harina & Pasión</h1>

        <p>
          Tortas, bocaditos dulces y salados, cheesecake, tres leches,
          selva negra y mucho más. Hecho con amor y sabor peruano.
        </p>

        <div className="botones">
          <a className="btn" href="https://wa.me/34633144612" target="_blank">
            WhatsApp 633 14 46 12
          </a>

          <a className="btn secundario" href="https://wa.me/34614221450" target="_blank">
            WhatsApp 614 22 14 50
          </a>
        </div>
      </header>

      {/* INFO */}
      <section className="info">

        <h2>📌 Información Importante</h2>

        <p><strong>Horario:</strong> Lunes a Domingo de 11:00 AM a 9:00 PM</p>

        <p>
          Los envíos se pagan aparte. El cliente debe cubrir la ida y vuelta del Uber.
        </p>

        <p>
          También puedes recoger tu pedido directamente en tienda sin costo adicional.
        </p>

        <p><strong>Ubicación:</strong> Plaza Puerto Rubio 19, Calle de Peña Rubia</p>

        <p><strong>Atención personalizada:</strong> Eberilda Valenzuela</p>

        <p style={{ marginTop: "15px" }}>
          Los precios de las tartas y postres pueden variar según el tamaño,
          diseño y personalización. Para consultar precios y pedidos,
          comunícate directamente con la dueña.
        </p>

      </section>

      {/* GALERÍA */}
      <section className="galeria">

        <h2>🍰 Nuestros Postres</h2>

        <p>
          Elaboraciones frescas y personalizadas para cada ocasión.
        </p>

        <div className="slider">

          <button onClick={anterior} className="flecha">◀</button>

          <img
            src={imagenes[index]}
            className="slider-img"
            alt="postre"
          />

          <button onClick={siguiente} className="flecha">▶</button>

        </div>
      </section>

      {/* TIPOS */}
      <section className="info">

        <h2>🎂 Lo que ofrecemos</h2>

        <p><strong>Tortas Especiales:</strong> chocolate, tres leches, selva negra, cheesecake</p>

        <p><strong>Repostería:</strong> bases, cajas, insumos, impresiones comestibles, toppers</p>

        <p>
          Diseños personalizados para niños, fútbol, princesas y más.
        </p>

      </section>

      {/* VIDEOS */}
      <section className="videos">

        <h2>🎥 Nuestros Trabajos</h2>

        <div className="gridVideos">

          <video controls>
            <source src="/VID-20260517-WA0031.mp4" type="video/mp4" />
          </video>

          <video controls>
            <source src="/VID-20260517-WA0023.mp4" type="video/mp4" />
          </video>

          <video controls>
            <source src="/VID-20260517-WA0028.mp4" type="video/mp4" />
          </video>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <p>© 2026 Harina & Pasión — Postres Peruanos Artesanales</p>

        <p>Hecho con amor y mucha pasión 💖</p>

        <p>Atención personalizada por Eberilda Valenzuela</p>

      </footer>

    </div>
  );
}