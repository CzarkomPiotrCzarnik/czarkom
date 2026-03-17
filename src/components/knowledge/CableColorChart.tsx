interface Wire {
  name: string;
  color: string;
  stripe?: string;
}

const t568a: Wire[] = [
  { name: "Biało-zielony", color: "#22c55e", stripe: "#fff" },
  { name: "Zielony", color: "#22c55e" },
  { name: "Biało-pomarańczowy", color: "#f97316", stripe: "#fff" },
  { name: "Niebieski", color: "#3b82f6" },
  { name: "Biało-niebieski", color: "#3b82f6", stripe: "#fff" },
  { name: "Pomarańczowy", color: "#f97316" },
  { name: "Biało-brązowy", color: "#92400e", stripe: "#fff" },
  { name: "Brązowy", color: "#92400e" },
];

const t568b: Wire[] = [
  { name: "Biało-pomarańczowy", color: "#f97316", stripe: "#fff" },
  { name: "Pomarańczowy", color: "#f97316" },
  { name: "Biało-zielony", color: "#22c55e", stripe: "#fff" },
  { name: "Niebieski", color: "#3b82f6" },
  { name: "Biało-niebieski", color: "#3b82f6", stripe: "#fff" },
  { name: "Zielony", color: "#22c55e" },
  { name: "Biało-brązowy", color: "#92400e", stripe: "#fff" },
  { name: "Brązowy", color: "#92400e" },
];

function WireRow({ index, wire }: { index: number; wire: Wire }) {
  return (
    <li className="flex items-center gap-3 py-1">
      <span
        className="relative w-7 h-7 rounded-md shrink-0 border border-dark-600"
        style={{ backgroundColor: wire.color }}
      >
        {wire.stripe && (
          <span
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[5px]"
            style={{ backgroundColor: wire.stripe }}
          />
        )}
      </span>
      <span className="text-dark-300">
        <span className="text-dark-500 mr-1">{index}.</span>
        {wire.name}
      </span>
    </li>
  );
}

function WireStandard({
  title,
  wires,
  accent,
}: {
  title: string;
  wires: Wire[];
  accent: string;
}) {
  return (
    <div className="bg-dark-800/50 border border-dark-700 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4" style={{ color: accent }}>
        {title}
      </h3>
      <ol className="space-y-1">
        {wires.map((wire, i) => (
          <WireRow key={i} index={i + 1} wire={wire} />
        ))}
      </ol>
    </div>
  );
}

export function CableColorChart() {
  return (
    <section className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WireStandard title="Standard T568A" wires={t568a} accent="#22c55e" />
        <WireStandard title="Standard T568B" wires={t568b} accent="#f97316" />
      </div>

      <div className="mt-6 bg-primary-950/30 border border-primary-800/30 rounded-xl p-5">
        <h4 className="font-semibold text-primary-400 mb-2">
          ℹ️ Ważne informacje:
        </h4>
        <ul className="space-y-1 text-sm text-dark-300">
          <li>
            <strong className="text-white">T568B</strong> — najczęściej używany
            standard w Polsce i Europie
          </li>
          <li>
            <strong className="text-white">T568A</strong> — standard rządowy
            USA, rzadziej stosowany
          </li>
          <li>
            <strong className="text-white">Kabel prosty</strong> — oba końce w
            tym samym standardzie (T568A–T568A lub T568B–T568B)
          </li>
          <li>
            <strong className="text-white">Kabel skrośny</strong> — jeden koniec
            T568A, drugi T568B (dla starszych urządzeń)
          </li>
        </ul>
      </div>
    </section>
  );
}
