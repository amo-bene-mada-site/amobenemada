import Link from "next/link";

export default function ActionsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
          Nos actions à Madagascar
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Comment AMO BENE MADA soutient les enfants les plus pauvres
        </h1>
        <p className="text-gray-700">
          À travers l&apos;école Saint François d&apos;Assise d&apos;Angodroabe et
          d&apos;autres initiatives locales, nous agissons concrètement pour
          améliorer le quotidien des enfants et de leurs familles.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Repas pour les enfants
          </h2>
          <p className="mt-2 text-gray-700">
            Beaucoup d&apos;enfants arrivent à l&apos;école le ventre vide. Nous
            contribuons au financement de repas simples mais réguliers pour que
            les élèves puissent apprendre dans de meilleures conditions.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Objectif : que chaque enfant puisse bénéficier d&apos;au moins un
            repas par jour d&apos;école.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Fournitures scolaires
          </h2>
          <p className="mt-2 text-gray-700">
            Cahiers, stylos, ardoises, manuels… Nous aidons à fournir le
            matériel scolaire de base aux enfants qui n&apos;ont souvent rien
            pour travailler.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Un petit don peut déjà financer le kit scolaire complet d&apos;un
            enfant pour une année.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Soutien aux enseignants
          </h2>
          <p className="mt-2 text-gray-700">
            Nous accompagnons l&apos;équipe éducative de l&apos;école Saint
            François d&apos;Assise : besoins matériels, encouragement, écoute
            et relais auprès de donateurs en France.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Derrière chaque enfant qui progresse, il y a un enseignant qui se
            donne au quotidien.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Projets à venir
          </h2>
          <p className="mt-2 text-gray-700">
            Accès à l&apos;eau, amélioration des bâtiments, soutien à d&apos;autres
            écoles en brousse… Nous préparons de nouveaux projets pour les
            années à venir, selon les besoins sur le terrain.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Vos dons nous permettent d&apos;anticiper et d&apos;aller plus loin.
          </p>
        </article>
      </section>

      <section className="rounded-2xl bg-emerald-50 px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Envie de soutenir une de ces actions ?
          </h2>
          <p className="mt-2 text-gray-700">
            Vous pouvez faire un don ponctuel ou régulier, ou nous contacter
            pour en savoir plus sur les besoins précis de l&apos;école.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/faire-un-don"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
          >
            Faire un don
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </main>
  );
}
