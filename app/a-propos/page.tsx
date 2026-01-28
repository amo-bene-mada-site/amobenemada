import Link from "next/link";

export default function AProposPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* En-tête */}
      <section className="space-y-4">
        <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
          À propos de l&apos;association
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          AMO BENE MADA : une chaîne de solidarité entre la France et Madagascar
        </h1>
        <p className="text-gray-700 text-sm sm:text-base max-w-3xl">
          AMO BENE MADA est une association loi 1901 qui soutient des projets
éducatifs et solidaires à Madagascar, en particulier autour de
l&apos;école Saint François d&apos;Assise d&apos;Angodroabe, située au
nord-ouest de Madagascar, dans la commune rurale de Tsiningia, à
environ 30 km du district de Port-Bergé.

        </p>
      </section>

      {/* Notre histoire & contexte */}
      <section className="grid gap-8 md:grid-cols-2 items-start">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Une histoire de liens humains et de fidélité
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            L&apos;association est née de rencontres et de liens de cœur avec
            des communautés locales à Madagascar. Sur place, les familles
            souhaitent que leurs enfants puissent aller à l&apos;école, apprendre
            à lire, écrire, compter et construire un avenir meilleur. Mais la
            pauvreté, l&apos;éloignement et le manque de moyens rendent ce chemin
            très difficile.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            AMO BENE MADA a choisi de se mettre au service de ces projets
            portés localement : soutenir une école en brousse, financer des
            repas, des fournitures, du matériel scolaire, et participer au
            fonctionnement quotidien.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">
            Pourquoi Madagascar ?
          </h3>
          <p className="text-sm text-gray-800">
            Madagascar compte parmi les pays les plus pauvres du monde.
            L&apos;accès à l&apos;éducation y est souvent fragile, surtout en
            zone rurale. Dans ces régions, une école peut être le seul lieu
            d&apos;espérance et de stabilité pour des enfants confrontés à une
            grande précarité.
          </p>
          <p className="text-sm text-gray-800">
            En soutenant une école comme celle d&apos;Angodroabe, nous
            contribuons très concrètement à changer la vie des enfants et de
            leurs familles.
          </p>
        </div>
      </section>

      {/* Notre mission */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Notre mission : éducation, dignité, avenir
        </h2>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl">
          À travers des actions simples et concrètes, AMO BENE MADA souhaite
          soutenir durablement les enfants et leurs familles, en s&apos;appuyant
          sur les acteurs locaux (enseignants, responsables d&apos;école,
          partenaires de confiance).
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-2">
            <h3 className="font-semibold text-gray-900">🍚 Nourrir</h3>
            <p className="text-sm text-gray-700">
              Aider à financer des repas réguliers pour les élèves, afin qu&apos;ils
              puissent suivre les cours dans de meilleures conditions.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-2">
            <h3 className="font-semibold text-gray-900">📚 Équiper</h3>
            <p className="text-sm text-gray-700">
              Fournir du matériel scolaire, des cahiers, stylos, ardoises et
              autres outils indispensables à la scolarité.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-2">
            <h3 className="font-semibold text-gray-900">🌱 Accompagner</h3>
            <p className="text-sm text-gray-700">
              Soutenir le fonctionnement de l&apos;école, encourager les
              enseignants, et participer à des projets éducatifs sur le long
              terme.
            </p>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Nos valeurs</h2>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl">
          AMO BENE MADA souhaite agir avec simplicité, sérieux et fidélité
          envers les personnes soutenues comme envers les donateurs.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-2">
            <h3 className="font-semibold text-gray-900">🤝 Respect & dignité</h3>
            <p className="text-sm text-gray-700">
              Chaque enfant, chaque famille est accueillie avec respect. Il ne
              s&apos;agit pas de « faire à la place de », mais de soutenir des
              initiatives locales déjà existantes.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-2">
            <h3 className="font-semibold text-gray-900">🔍 Simplicité & transparence</h3>
            <p className="text-sm text-gray-700">
              Les sommes récoltées sont orientées vers des besoins concrets :
              repas, fournitures, frais scolaires, fonctionnement de l&apos;école.
              L&apos;association garde un souci de sobriété dans son
              fonctionnement.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-2">
            <h3 className="font-semibold text-gray-900">🌍 Ancrage local</h3>
            <p className="text-sm text-gray-700">
              Les projets sont portés en lien direct avec des personnes de
              confiance sur place. L&apos;objectif est de renforcer les
              structures locales, pas de les remplacer.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-2">
            <h3 className="font-semibold text-gray-900">🕊️ Espérance & solidarité</h3>
            <p className="text-sm text-gray-700">
              Au cœur de l&apos;association, il y a le désir de partager une
              espérance concrète : que chaque enfant puisse grandir, apprendre
              et se savoir soutenu.
            </p>
          </div>
        </div>
      </section>

      {/* Comment nous agissons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Comment nous agissons concrètement
        </h2>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl">
          Les dons reçus sont collectés en France, puis transférés à des
          partenaires de confiance à Madagascar, directement impliqués dans la
          gestion de l&apos;école et des projets. Des échanges réguliers
          permettent de suivre l&apos;utilisation des fonds et l&apos;évolution des
          besoins.
        </p>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl">
          L&apos;association a également à cœur de partager des nouvelles aux
          donateurs : photos, nouvelles des projets, bilans réguliers dès que
          cela est possible.
        </p>
      </section>
      {/* Localisation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Où se situe l&apos;école Saint François d&apos;Assise ?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl">
          L&apos;école Saint François d&apos;Assise d&apos;Angodroabe est située au
          nord-ouest de Madagascar, dans la commune rurale de Tsiningia, à
          environ 30 km du district de Port-Bergé. Il s&apos;agit d&apos;une zone
          rurale isolée, où l&apos;accès à l&apos;éducation est particulièrement
          fragile.
        </p>

        <div className="grid gap-4 md:grid-cols-[2fr,3fr] items-stretch">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-2">
            <h3 className="font-semibold text-gray-900 text-sm">
              Une école en brousse, au cœur de la vie des villages
            </h3>
            <p className="text-sm text-gray-700">
              Pour beaucoup d&apos;enfants, cette école est le seul lieu
              d&apos;apprentissage structuré à plusieurs kilomètres à la ronde.
              Le trajet se fait souvent à pied, parfois sur des pistes difficiles.
            </p>
            <p className="text-sm text-gray-700">
              Soutenir cette école, c&apos;est permettre à ces enfants de
              continuer à apprendre, à se rassembler et à espérer un avenir plus
              stable.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 flex items-center justify-center">
            {/* 
              👉 Quand tu auras une image de carte, mets-la dans /public/images
              et remplace le bloc ci-dessous par :
              <img
                src="/images/carte-madagascar-angodroabe.jpg"
                alt="Localisation de l'école Saint François d'Assise à Angodroabe, Madagascar"
                className="w-full h-64 object-cover rounded-xl"
              />
            */}
            <div className="text-center text-xs text-gray-500">
              Zone pour une carte ou une photo de localisation.
              <br />
              Tu pourras y ajouter plus tard une carte de Madagascar ou une
              photo de la région d&apos;Angodroabe.
            </div>
          </div>
        </div>
      </section>

      {/* Appels à l'action */}
      <section className="grid gap-6 md:grid-cols-2 items-stretch">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            Soutenir l&apos;association
          </h2>
          <p className="text-sm text-gray-800">
            Si vous souhaitez soutenir AMO BENE MADA, vous pouvez effectuer un
            don ponctuel ou mettre en place un don mensuel. Chaque participation,
            même modeste, nous aide à poursuivre les projets engagés.
          </p>
          <Link
            href="/faire-un-don"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
          >
            Faire un don
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            Nous contacter
          </h2>
          <p className="text-sm text-gray-800">
            Pour toute question sur l&apos;association, les projets soutenus, ou
            pour un échange plus direct, vous pouvez nous contacter.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
          >
            Contacter l&apos;association
          </Link>
        </div>
      </section>
    </main>
  );
}
