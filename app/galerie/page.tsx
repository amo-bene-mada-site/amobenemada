import Link from "next/link";

export default function GaleriePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* En-tête */}
      <header className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-emerald-600 uppercase">
          Témoignages en images
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Galerie photos & vidéos
        </h1>
        <p className="text-gray-700 max-w-3xl">
          Découvrez le quotidien des enfants de l&apos;école Saint François
          d&apos;Assise d&apos;Angodroabe, les projets en cours et les actions
          rendues possibles grâce à votre générosité.
        </p>
      </header>

      {/* Bloc Infos pratiques */}
      <section className="grid gap-6 lg:grid-cols-[2fr,1fr] items-start">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Comment sont ajoutées les photos ?
          </h2>
          <p className="text-gray-700">
            Pour le moment, les photos et vidéos sont ajoutées directement par
            l&apos;équipe d&apos;AMO BENE MADA, à partir des retours reçus du
            terrain (Angodroabe) et des bénévoles en France.
          </p>
          <p className="text-gray-700">
            Si vous disposez de photos ou de vidéos liées à nos actions
            (visites, événements, collectes, etc.), vous pouvez nous les envoyer
            afin que nous les ajoutions à cette galerie.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:amobenemada@gmail.com?subject=Photos%20pour%20la%20galerie%20AMO%20BENE%20MADA"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
            >
              Envoyer des photos par e-mail
            </a>
            <Link
              href="/projets"
              className="inline-flex items-center justify-center rounded-full border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition"
            >
              Voir les projets en cours
            </Link>
          </div>
        </div>

        {/* Encadré info / transparence */}
        <aside className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 space-y-2 text-sm text-emerald-900">
          <h3 className="font-semibold text-emerald-900">
            Respect des enfants et du droit à l’image
          </h3>
          <p>
            Nous veillons à choisir des photos respectueuses de la dignité des
            enfants et des familles. Certaines images peuvent être floutées ou
            recadrées pour préserver leur intimité.
          </p>
          <p className="text-xs text-emerald-900/80">
            Pour toute question ou demande de retrait d&apos;une photo, vous
            pouvez nous écrire à{" "}
            <a
              href="mailto:amobenemada@gmail.com"
              className="underline underline-offset-2"
            >
              amobenemada@gmail.com
            </a>
            .
          </p>
        </aside>
      </section>

      {/* Bloc “Prochainement” */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Bientôt : une galerie plus complète
        </h2>
        <p className="text-gray-700 max-w-3xl">
          Nous travaillons à mettre en place une galerie plus riche, avec des
          albums photos thématiques (école, cantine, construction, événements)
          et des vidéos courtes présentant les projets sur place.
        </p>
        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
          <li>Photos de la vie quotidienne à l&apos;école</li>
          <li>Suivi des projets financés (cantine, fournitures, bâtiment…)</li>
          <li>Moments forts : fêtes, rencontres, témoignages</li>
        </ul>
        <p className="text-sm text-gray-600">
          Merci pour votre patience et votre soutien — chaque don nous permet
          d&apos;avancer concrètement aux côtés des enfants d&apos;Angodroabe.
        </p>
      </section>
    </main>
  );
}
