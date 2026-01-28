// app/galerie/page.tsx

export default function GaleriePage() {
  // Plus tard, on mettra ici de vraies photos / vidéos
  // éventuellement chargées depuis un dossier public ou une base de données.

  const exemplesPhotos = [
    {
      titre: "Les enfants de l'école St François",
      description:
        "Scène de vie à l'école d'Angodroabe, soutenue par AMO BENE MADA.",
    },
    {
      titre: "Distribution de fournitures",
      description:
        "Cahiers, stylos et matériel scolaire offerts grâce aux dons.",
    },
    {
      titre: "Repas à la cantine",
      description:
        "Un repas chaud pour les enfants, rendu possible par votre générosité.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* En-tête */}
      <header className="space-y-4">
        <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
          Galerie
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Les visages et les projets que vous soutenez
        </h1>
        <p className="text-gray-700 max-w-3xl">
          Découvrez en images la réalité de l&apos;école Saint François
          d&apos;Assise d&apos;Angodroabe et des projets portés par AMO BENE
          MADA. Ces photos et vidéos témoignent concrètement de l&apos;impact
          de votre générosité.
        </p>
      </header>

      {/* Bloc info “à venir” */}
      <section className="rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-5 space-y-2">
        <h2 className="text-lg font-semibold text-emerald-900">
          Une galerie qui va s&apos;enrichir
        </h2>
        <p className="text-sm text-emerald-900/80">
          Nous ajouterons prochainement davantage de photos et, si possible, des
          vidéos : vie à l&apos;école, distribution de fournitures, chantiers,
          rencontres avec les familles… Vous pourrez suivre l&apos;évolution
          des projets presque en direct.
        </p>
      </section>

      {/* Grille d'exemples / futurs médias */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Premières images à mettre en avant
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exemplesPhotos.map((item, index) => (
            <article
              key={index}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              {/* Emplacement photo */}
              <div className="h-40 bg-gray-100 flex items-center justify-center text-xs text-gray-500 px-3 text-center">
                Photo à ajouter ici
                <br />
                (importée plus tard dans le site)
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.titre}
                </h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call to action vers les dons */}
      <section className="rounded-2xl border border-amber-100 bg-amber-50 px-6 py-5 space-y-3">
        <h2 className="text-lg font-semibold text-amber-900">
          Chaque image raconte une histoire de solidarité
        </h2>
        <p className="text-sm text-amber-900/80">
          Grâce à vos dons, cette galerie pourra montrer encore plus de
          sourires, de salles de classe remplies et de projets achevés.
        </p>
        <p className="text-sm text-amber-900/80">
          Si vous le souhaitez, vous pouvez soutenir l&apos;école dès
          maintenant en effectuant un don ponctuel ou mensuel.
        </p>
      </section>
    </main>
  );
}
