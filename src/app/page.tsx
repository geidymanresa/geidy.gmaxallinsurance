"use client";

import { useState } from "react";

export default function Home() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const beneficios = [
    "Capacitación continua",
    "Soporte en español",
    "Acceso a mercados",
    "Herramientas de trabajo",
    "Procesos organizados",
    "Crecimiento profesional",
  ];

  const pasos = [
    {
      title: "Completa tu solicitud",
      text: "Envíanos tu información básica, ciudad, estado de residencia, licencias y experiencia.",
    },
    {
      title: "Revisamos tu perfil",
      text: "Evaluamos tu información para confirmar si encaja con el programa GMAX Agent.",
    },
    {
      title: "Te guiamos en la incorporación",
      text: "Si avanzas en el proceso, te explicamos los próximos pasos para comenzar con respaldo de GMAX All Insurance.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      {sent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
          <div className="max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
            <h2 className="text-2xl font-bold text-[#0D5DB8]">
              ¡Solicitud enviada correctamente!
            </h2>
            <p className="mt-4 text-gray-600">
              Hemos recibido tu información. Nuestro equipo revisará tu solicitud
              y te contactará pronto.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 rounded-full bg-[#F7B500] px-7 py-3 font-semibold text-white"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div>
          <p className="text-sm font-semibold text-[#F7B500]">
            GMAX All Insurance
          </p>
          <h1 className="text-3xl font-bold text-[#0D5DB8]">GMAX Agent</h1>
        </div>

        <a
          href="#solicitud"
          className="rounded-full bg-[#F7B500] px-6 py-3 font-semibold text-white shadow-md"
        >
          Conviértete en Agente
        </a>
      </header>

      <section className="bg-gradient-to-br from-white via-[#F5F9FF] to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 inline-block rounded-full border border-[#D9E8FA] bg-white px-5 py-2 text-sm font-semibold text-[#0D5DB8] shadow-sm">
              Un programa de GMAX All Insurance
            </p>

            <h2 className="text-4xl font-bold leading-tight text-[#0D5DB8] md:text-6xl">
              Trabaja como agente de seguros con el respaldo de GMAX All Insurance
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Capacitación, herramientas, soporte en español y acceso a mercados
              para ayudarte a crecer profesionalmente.
            </p>

            <a
              href="#solicitud"
              className="mt-8 inline-block rounded-full bg-[#F7B500] px-8 py-4 font-bold text-white shadow-lg transition hover:scale-105"
            >
              Aplicar Ahora
            </a>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-2xl">
            <p className="text-sm font-semibold text-[#F7B500]">
              Respaldado por
            </p>
            <h3 className="mt-2 text-4xl font-bold text-[#0D5DB8]">
              GMAX All Insurance
            </h3>
            <p className="mt-5 text-gray-600">
              GMAX Agent es un programa creado para brindar estructura,
              entrenamiento, herramientas y acompañamiento profesional a agentes
              de seguros.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="font-semibold text-[#F7B500]">Beneficios</p>
          <h2 className="mt-2 text-3xl font-bold text-[#0D5DB8] md:text-5xl">
            ¿Qué ofrece GMAX Agent?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Un entorno diseñado para agentes que buscan estructura, soporte y
            herramientas para avanzar en la industria.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {beneficios.map((beneficio) => (
            <div
              key={beneficio}
              className="rounded-3xl border border-[#E6EEF8] bg-white p-7 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7B500]/15 text-xl text-[#F7B500]">
                ✓
              </div>
              <h3 className="text-xl font-bold text-[#0D5DB8]">{beneficio}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F9FF] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold text-[#F7B500]">Proceso</p>
            <h2 className="mt-2 text-3xl font-bold text-[#0D5DB8] md:text-5xl">
              Avanza en tres pasos sencillos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              El proceso está diseñado para conocer tu perfil y explicarte cómo
              podrías integrarte al programa GMAX Agent.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {pasos.map((paso) => (
              <div key={paso.title} className="rounded-3xl bg-white p-8 shadow-md">
                <div className="mb-5 h-2 w-16 rounded-full bg-[#F7B500]" />
                <h3 className="text-2xl font-bold text-[#0D5DB8]">
                  {paso.title}
                </h3>
                <p className="mt-3 text-gray-600">{paso.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solicitud" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-gray-100 md:p-12">
          <h2 className="text-3xl font-bold text-[#0D5DB8]">
            Solicitud de Agente
          </h2>
          <p className="mt-3 text-gray-600">
            Completa este formulario para que podamos evaluar tu solicitud.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <input
              required
              className="rounded-xl border p-4"
              placeholder="Nombre completo"
            />

            <input
              required
              type="email"
              className="rounded-xl border p-4"
              placeholder="Correo electrónico"
            />

            <input
              required
              className="rounded-xl border p-4"
              placeholder="Número de teléfono"
            />

            <input
              required
              className="rounded-xl border p-4"
              placeholder="Ciudad donde vives"
            />

            <input
              required
              className="rounded-xl border p-4"
              placeholder="Estado de residencia en EE. UU."
            />

            <input
              className="rounded-xl border p-4"
              placeholder="NPN o número de licencia"
            />

            <div>
              <p className="mb-3 font-semibold text-[#0D5DB8]">
                Tipo de licencia. Puedes seleccionar más de una.
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "Property & Casualty",
                  "Personal Lines",
                  "Life & Health",
                  "Otra",
                ].map((licencia) => (
                  <label
                    key={licencia}
                    className="flex items-center gap-3 rounded-xl border p-4"
                  >
                    <input type="checkbox" className="h-5 w-5" />
                    <span>{licencia}</span>
                  </label>
                ))}
              </div>
            </div>

            <input
              className="rounded-xl border p-4"
              placeholder='Si seleccionaste "Otra", especifica cuál'
            />

            <input
              className="rounded-xl border p-4"
              placeholder="Estados donde tienes licencia activa como no residente"
            />

            <textarea
              rows={5}
              className="rounded-xl border p-4"
              placeholder="Cuéntanos brevemente sobre tu experiencia"
            />

            <button
              type="submit"
              className="rounded-full bg-[#F7B500] py-4 font-bold text-white shadow-lg transition hover:scale-105"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#0D5DB8] px-6 py-8 text-center text-sm text-white">
        © 2026 GMAX All Insurance. Programa GMAX Agent.
      </footer>
    </main>
  );
}
