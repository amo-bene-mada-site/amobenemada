"use client";
import TaxBanner from "@/components/TaxBanner";

import { useState } from "react";

const HELLOASSO_DONATION_URL =
  "https://www.helloasso.com/associations/amo-bene-mada/formulaires/1";

const PRESET_AMOUNTS = [5, 10, 20, 50, 100];

export default function FaireUnDonPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10);
  const [customAmount, setCustomAmount] = useState("");

  const finalAmount =
    customAmount !== "" ? Number(customAmount) : selectedAmount ?? 0;

  const handleValidate = () => {
    if (!finalAmount || isNaN(finalAmount) || finalAmount <= 0) {
      alert("Merci de choisir ou saisir un montant valide 🙂");
      return;
    }

    // Ouvre le formulaire HelloAsso dans un nouvel onglet
    window.open(HELLOASSO_DONATION_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      <header className="space-y-3">
              <header className="space-y-3">
        <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
          Soutenir AMO BENE MADA
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Faire un don pour les enfants de Madagascar
        </h1>
        <p className="text-gray-700">
          Vos dons permettent de financer les repas, les fournitures scolaires
          et le fonctionnement de l&apos;école Saint François d&apos;Assise
          d&apos;Angodroabe, ainsi que d&apos;autres projets éducatifs en
          brousse.
        </p>

        <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-4 py-2 text-sm">
          <span className="rounded-full bg-white px-3 py-1 font-semibold text-emerald-700 border border-emerald-200">
            Don ponctuel
          </span>
          <span className="text-gray-500">ou</span>
          <span className="rounded-full bg-emerald-600 px-3 py-1 font-semibold text-white">
            Don mensuel
          </span>
        </div>
        <p className="text-xs text-gray-500">
          Sur la page HelloAsso, vous pourrez choisir de faire un don ponctuel
          ou de mettre en place un don mensuel.
        </p>
      </header>

      </header>
      <TaxBanner />

      {/* Bloc choix du montant */}
      <section className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          Choisissez votre montant
        </h2>
        <p className="text-gray-700">
          Cliquez sur un montant pour faire un don rapide, ou saisissez un autre
          montant de votre choix.
        </p>

        <div className="flex flex-wrap gap-3">
          {PRESET_AMOUNTS.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
              className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition ${
                selectedAmount === amount
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white text-emerald-700 border-emerald-300 hover:bg-emerald-50"
              }`}
            >
              {amount} €
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="customAmount"
            className="block text-sm font-medium text-gray-900"
          >
            Autre montant
          </label>
          <div className="flex gap-2 items-center">
            <input
              id="customAmount"
              type="number"
              min={1}
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="w-32 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Ex : 15"
            />
            <span className="text-sm text-gray-600">€</span>
          </div>
          <p className="text-xs text-gray-500">
            Vous pouvez laisser vide si vous choisissez un des montants proposés.
          </p>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleValidate}
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
          >
            Valider mon don
          </button>
          <p className="mt-2 text-xs text-gray-500">
            Vous serez redirigé vers une page de paiement sécurisée HelloAsso.
          </p>
        </div>
      </section>
        <div className="mt-4 rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 space-y-1">
          <p className="text-sm font-semibold text-amber-900">
            Le don mensuel : un geste simple, un impact durable
          </p>
          <p className="text-xs text-amber-900/90">
            Sur la page HelloAsso, vous pourrez choisir de faire un don ponctuel
            ou de mettre en place un don mensuel. Même un petit montant chaque
            mois nous aide à sécuriser les repas et la scolarité des enfants sur
            toute l&apos;année.
          </p>
        </div>

      {/* Bloc virement bancaire */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Faire un virement bancaire
        </h2>
        <p className="text-gray-700">
          Vous pouvez également effectuer un don par virement bancaire en
          utilisant les coordonnées suivantes :
        </p>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800 space-y-1">
          <p>
            <span className="font-semibold">Association :</span> AMO BENE MADA
          </p>
          <p>
            <span className="font-semibold">Adresse :</span> S/C SOAVINJANAHARY
            Angeline, 2 B route de Brest, 29000 Quimper
          </p>
          <p>
            <span className="font-semibold">RIB (IBAN) :</span> FR76 1290 6000
            4157 4652 6670 037
          </p>
          <p>
            <span className="font-semibold">BIC / SWIFT :</span> AGRIFRPP829
          </p>
          <p>
            <span className="font-semibold">Objet du virement :</span> Don AMO
            BENE MADA – Madagascar
          </p>
        </div>
      </section>

      {/* Bloc remerciements */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">
          Merci pour votre générosité
        </h2>
        <p className="text-gray-700">
          Il n&apos;y a pas de « petit » don : chaque participation nous aide à
          assurer un repas, un cahier ou une journée d&apos;école
          supplémentaire pour un enfant. Merci de tout cœur pour votre soutien.
        </p>
      </section>
    </main>
  );
}
