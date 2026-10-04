export default function TaxBanner() {
  return (
    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <p className="font-semibold">Avantage fiscal</p>
      <p className="mt-1">
        Les dons effectués au profit de l&apos;association AMO BENE MADA ouvrent droit,
        dans les conditions prévues par la législation fiscale en vigueur, à une réduction
        d&apos;impôt sur le revenu égale à 66 % du montant du don, dans la limite de 20 %
        du revenu imposable.
      </p>
      <p className="mt-1">
        Un reçu fiscal peut être délivré au donateur afin de lui permettre de justifier son
        don auprès de l&apos;administration fiscale.
      </p>
      <p className="mt-1 text-xs">
        Exemple : un don de 100&nbsp;€ peut revenir à 34&nbsp;€ après réduction fiscale de
        66&nbsp;€, sous réserve de remplir les conditions prévues par la législation en vigueur.
      </p>
    </div>
  );
}
