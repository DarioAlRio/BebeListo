"use strict";

const { GUIDES } = require("../data");
const { guideCard } = require("../lib");
const { pageHero } = require("../layout");

function guiasIndex() {
  const html = `
  ${pageHero({
    eyebrow: "Guías de compra",
    title: "Todas las guías",
    dek: "Criterios para elegir silla de coche, carrito, trona, vigilabebés y el resto de artículos de puericultura, sin recomendar una marca concreta.",
  })}
  <section class="section">
    <div class="wrap">
      <div class="card-grid">
        ${GUIDES.map(guideCard).join("\n")}
      </div>
    </div>
  </section>
  `;

  return {
    route: "guias/index.html",
    path: "/guias/",
    title: "Guías de compra",
    description: "Todas las guías de compra de BebeListo: sillas de coche, carritos, tronas, vigilabebés, cunas de viaje, portabebés, esterilizadores, básculas, hamacas y termómetros/humidificadores para bebé.",
    breadcrumbsItems: [{ label: "Inicio", href: "/" }, { label: "Guías de compra" }],
    html,
  };
}

module.exports = guiasIndex;
