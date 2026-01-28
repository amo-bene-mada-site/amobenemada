import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-5">
          <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">
            AMO BENE MADA • Madagascar
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Soutenir l&apos;éducation des enfants les plus pauvres à Madagascar
          </h1>
          <p className="text-gray-700 text-base sm:text-lg">
            Grâce à vos dons, notre association finance les repas, les fournitures
            scolaires et le fonctionnement de l&apos;école Saint François d&apos;Assise
            d&apos;Angodroabe, en brousse malgache.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/faire-un-don"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
            >
              Faire un don maintenant
            </Link>
            <Link
              href="/projets"
              className="inline-flex items-center justify-center rounded-full border border-emerald-600 px-6 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition"
            >
              Découvrir nos projets
            </Link>
          </div>

          <p className="text-xs text-gray-500">
            Il n&apos;y a pas de « petit » don : chaque euro devient un repas, un cahier
            ou une journée d&apos;école pour un enfant.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-5 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Concrètement, vos dons permettent :
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                ✅ D&apos;offrir des <span className="font-semibold">repas quotidiens</span>{" "}
                aux élèves de l&apos;école.
              </li>
              <li>
                ✅ De fournir{" "}
                <span className="font-semibold">cahiers, stylos et uniformes</span>{" "}
                aux enfants les plus pauvres.
              </li>
              <li>
                ✅ De soutenir le{" "}
                <span className="font-semibold">fonctionnement d&apos;une école en brousse</span>{" "}
                (enseignants, entretien, matériel).
              </li>
            </ul>
            <p className="text-xs text-gray-500">
              Association déclarée loi 1901 – AMO BENE MADA.
            </p>
          </div>
        </div>
      </section>

      {/* BANDEAU AVANTAGE FISCAL */}
      <section className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-amber-800">
            💡 Avantage fiscal (sous réserve de la réglementation applicable)
          </p>
          <p className="text-xs text-amber-900">
            Selon votre situation, vos dons peuvent ouvrir droit à une réduction d&apos;impôt
            conformément à la législation en vigueur. Renseignez-vous auprès de votre
            centre des impôts ou de votre conseiller.
          </p>
        </div>
        <Link
          href="/faire-un-don"
          className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 whitespace-nowrap mt-2 sm:mt-0"
        >
          Faire un don sécurisé
        </Link>
      </section>

      {/* CE QUE NOUS FAISONS */}
      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Ce que nous faisons</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            AMO BENE MADA agit au quotidien pour offrir aux enfants de Madagascar
            des conditions de vie et d&apos;apprentissage plus dignes.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-2">
            <h3 className="font-semibold text-gray-900">🍚 Nourrir</h3>
            <p className="text-sm text-gray-700">
              Financer des repas simples mais réguliers pour que les enfants puissent
              apprendre le ventre plein.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-2">
            <h3 className="font-semibold text-gray-900">📚 Éduquer</h3>
            <p className="text-sm text-gray-700">
              Fournitures scolaires, uniformes, petits équipements : tout ce qui permet
              aux enfants de suivre l&apos;école dans de meilleures conditions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-2">
            <h3 className="font-semibold text-gray-900">🌱 Construire l&apos;avenir</h3>
            <p className="text-sm text-gray-700">
              Soutenir durablement l&apos;école d&apos;Angodroabe et les projets éducatifs
              portés localement avec les habitants.
            </p>
          </div>
        </div>
      </section>

      {/* PROJETS EN COURS (APERÇU) */}
      <section className="space-y-4">
        <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Projets en cours et actions réalisées
            </h2>
            <p className="text-sm text-gray-700">
              Découvrez comment vos dons sont utilisés sur le terrain à Madagascar.
            </p>
          </div>
          <Link
            href="/projets"
            className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            Voir tous les projets →
          </Link>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 space-y-2">
            <p className="text-xs font-semibold text-emerald-700 uppercase">
              En cours
            </p>
            <h3 className="font-semibold text-gray-900">
              Repas quotidiens pour les enfants de l&apos;école
            </h3>
            <p className="text-sm text-gray-700">
              Financer régulièrement l&apos;achat de riz, de légumes et d&apos;huile pour
              assurer des repas aux élèves.
            </p>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-blue-50 p-4 space-y-2">
            <p className="text-xs font-semibold text-blue-700 uppercase">
              En cours
            </p>
            <h3 className="font-semibold text-gray-900">
              Fournitures scolaires pour la rentrée
            </h3>
            <p className="text-sm text-gray-700">
              Cahiers, stylos, ardoises et manuels pour les enfants les plus pauvres
              d&apos;Angodroabe.
            </p>
          </article>
        </div>
      </section>

      {/* DON MENSUEL */}
      <section className="rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-8 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Le don mensuel : un soutien durable
        </h2>
        <p className="text-sm sm:text-base text-gray-800">
          Un don mensuel, même modeste, permet à l&apos;association de planifier les repas,
          les fournitures et le fonctionnement de l&apos;école sur l&apos;année.
          <br />
          <span className="font-semibold">
            5 €, 10 € ou 20 € par mois changent concrètement la vie des enfants.
          </span>
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/faire-un-don"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
          >
            Mettre en place un don mensuel
          </Link>
          <p className="text-xs text-gray-700">
            Vous serez redirigé vers notre page de don sécurisée HelloAsso.
          </p>
        </div>
      </section>

      {/* GALERIE */}
      <section className="space-y-4">
        <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">En images</h2>
            <p className="text-sm text-gray-700">
              Des photos des enfants, de l&apos;école et des actions menées grâce à votre
              générosité.
            </p>
          </div>
          <Link
            href="/galerie"
            className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            Voir la galerie →
          </Link>
        </header>

        <div className="rounded-3xl border border-gray-200 bg-gray-50 px-4 py-6 text-sm text-gray-700">
          <p>
            La galerie présente des photos authentiques de l&apos;école Saint François
            d&apos;Assise d&apos;Angodroabe et des enfants soutenus par l&apos;association.
            Vous pourrez y suivre les projets réalisés et les avancées sur le terrain.
          </p>
        </div>
      </section>

      {/* APPEL FINAL */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Merci de tout cœur pour votre soutien
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700">
          Chaque participation, qu&apos;elle soit ponctuelle ou mensuelle, nous aide à
          assurer un avenir plus juste aux enfants les plus vulnérables de Madagascar.
        </p>
        <Link
          href="/faire-un-don"
          className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
        >
          Je fais un don pour les enfants
        </Link>
      </section>
    </main>
  );
}
