export default function AdminPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      {/* En-tête */}
      <header className="space-y-3">
        <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
          Administration
        </p>
        <h1 className="text-3xl font-bold text-gray-900">
          Espace réservé à l’équipe AMO BENE MADA
        </h1>
        <p className="text-gray-700">
          Cette page est un espace interne, protégé par mot de passe. 
          Elle n’est pas accessible depuis le menu public du site.
        </p>
      </header>

      {/* Alerte sécurité */}
      <section className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 flex gap-3">
        <span className="mt-0.5">⚠️</span>
        <p>
          Merci de ne pas partager vos identifiants de connexion. 
          Si vous pensez qu’un accès non autorisé a eu lieu, 
          changez le mot de passe dans les variables d’environnement de Vercel.
        </p>
      </section>

      {/* Informations association */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Informations de l’association
        </h2>
        <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-3 text-sm text-gray-800">
          <p>
            <span className="font-semibold">Nom de l’association :</span>{" "}
            AMO BENE MADA
          </p>
          <p>
            <span className="font-semibold">Objet :</span>{" "}
            Soutenir des projets éducatifs et solidaires à Madagascar, 
            en particulier autour de l&apos;école Saint François d&apos;Assise 
            d&apos;Angodroabe (commune rurale de Tsiningia, nord-ouest de Madagascar).
          </p>
          <p>
            <span className="font-semibold">Email de contact :</span>{" "}
            amobenemada@gmail.com
          </p>
          <p>
            <span className="font-semibold">Téléphone :</span>{" "}
            07 87 65 39 39 / 06 67 78 11 23
          </p>
          <p className="text-xs text-gray-500">
            Ces informations sont internes, mais doivent rester cohérentes avec 
            celles affichées sur la page « Contact » du site public.
          </p>
        </div>
      </section>

      {/* Idées pour la suite */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">
          Pistes d’amélioration de l’espace admin
        </h2>
        <p className="text-gray-700 text-sm">
          À l’avenir, nous pourrons utiliser cette page pour suivre plus facilement 
          la vie de l’association :
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>Suivi des dons reçus (mensuels, ponctuels, projets dédiés).</li>
          <li>Liste des projets en cours avec budget, avancée, photos.</li>
          <li>Historique des actions réalisées (année par année).</li>
          <li>Petites notes internes (contacts sur place, partenaires, etc.).</li>
        </ul>
        <p className="text-xs text-gray-500">
          Pour le moment, cette page sert surtout de porte d’entrée privée. 
          Vous pourrez l’enrichir progressivement selon les besoins de l’association.
        </p>
      </section>
    </main>
  );
}
