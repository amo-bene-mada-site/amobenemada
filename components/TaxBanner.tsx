export default function TaxBanner() {
  return (
    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <p className="font-semibold">Avantage fiscal (si vous êtes imposable en France)</p>
      <p className="mt-1">
        Selon la législation en vigueur, les dons à certaines associations peuvent être
        déductibles de vos impôts. Si AMO BENE MADA est habilitée à délivrer des reçus fiscaux,
        66 % de votre don peuvent être déduits (dans la limite fixée par la loi).
      </p>
      <p className="mt-1 text-xs">
        Pour plus d&apos;informations ou pour recevoir un reçu, n&apos;hésitez pas à nous
        contacter.
      </p>
    </div>
  );
}
