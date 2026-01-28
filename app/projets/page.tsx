// app/projets/page.tsx
import Link from "next/link";

const ongoingProjects = [
  {
    title: "Repas quotidiens pour les enfants de l'école",
    status: "EN COURS",
    description:
      "Aider l'école Saint François d'Assise à proposer un repas simple mais régulier aux élèves.",
    needs:
      "Financement régulier pour l'achat de riz, légumes, huile et compléments alimentaires.",
  },
  {
    title: "Fournitures scolaires pour la rentrée",
    status: "EN COURS",
    description:
      "Permettre à chaque enfant d'arriver en classe avec le minimum nécessaire pour apprendre.",
    needs:
      "Soutien pour l'achat de kits scolaires (cahiers, stylos, ardoises, manuels de base).",
  },
];

const completedActions = [
  {
    year: "2024",
    title: "Soutien au fonctionnement de l'école",
    description:
      "Participation aux salaires des enseignants, à l'achat de fournitures de base et aux frais de fonctionnement de l'école en brousse.",
  },
  {
    year: "2023",
    title: "Construction et aménagement des salles de classe",
    description:
      "Contribution à l'édification des bâtiments scolaires et à l'achat du matériel de classe (bureaux, bancs, tableaux).",
  },
];

export default function ProjetsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* En-tête */}
      <header className="space-y-4">
        <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
          Projets & impact
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Projets en cours et actions réalisées
        </h1>
        <p className="text-gray-700 max-w-3xl">
          Découvrez les projets que AMO BENE MADA soutient à Madagascar, ceux qui
          ont besoin de financement aujourd&apos;hui et les actions déjà
          menées grâce à la générosité des donateurs.
        </p>
      </header>

      {/* Projets en cours */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Projets en cours
        </h2>
        <p className="text-gray-700">
          Ces projets ont encore besoin de votre soutien pour continuer ou aller
          plus loin.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {ongoingProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 space-y-3"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                {project.status}
              </p>
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700">{project.description}</p>
              <p className="text-sm text-emerald-900">
                <span className="font-semibold">Besoin :</span> {project.needs}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Bloc don mensuel mis en avant */}
      <section className="rounded-2xl border border-amber-100 bg-amber-50 px-6 py-5 space-y-3">
        <h2 className="text-xl font-semibold text-amber-900">
          Pourquoi le don mensuel est si précieux ?
        </h2>
        <p className="text-sm text-amber-900/90">
          Un don mensuel, même modeste, permet de sécuriser dans la durée les
          repas, les fournitures scolaires et le fonctionnement de l&apos;école.
          C&apos;est grâce à cette régularité que nous pouvons dire « oui »
          sereinement à des engagements sur l&apos;année.
        </p>
        <p className="text-sm text-amber-900/90">
          Par exemple, un don de 10&nbsp;€ par mois peut participer
          concrètement à l&apos;achat du riz pour les repas, ou d&apos;un kit
          de fournitures pour un enfant.
        </p>
        <div className="pt-2">
          <Link
            href="/faire-un-don"
            className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 transition"
          >
            Soutenir un projet maintenant
          </Link>
        </div>
      </section>

      {/* Actions déjà réalisées */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Actions déjà réalisées
        </h2>
        <p className="text-gray-700">
          Quelques exemples de ce que vos dons ont déjà permis de réaliser.
        </p>

        <div className="space-y-4">
          {completedActions.map((action) => (
            <article
              key={action.title}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="pt-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800">
                  {action.year}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-700">{action.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bandeau avantage fiscal (à adapter si besoin) */}
      <section className="rounded-2xl border border-sky-100 bg-sky-50 px-6 py-5 space-y-3">
        <h2 className="text-xl font-semibold text-sky-900">
          Un don qui peut aussi être déductible des impôts
        </h2>
        <p className="text-sm text-sky-900/90">
          Selon la législation fiscale et la situation de chacun, les dons à
          certaines associations peuvent ouvrir droit à une réduction
          d&apos;impôt. Renseignez-vous selon votre cas personnel ou auprès de
          votre trésorier / comptable.
        </p>
        <p className="text-sm text-sky-900/90">
          Quoi qu&apos;il en soit, chaque euro donné est transformé sur le
          terrain en repas, en cahiers ou en journées d&apos;école pour les
          enfants d&apos;Angodroabe.
        </p>
      </section>
    </main>
  );
}
