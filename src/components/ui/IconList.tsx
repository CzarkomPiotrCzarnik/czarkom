interface IconListProps {
  items: string[];
}

export function IconList({ items }: IconListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-primary-500 mt-0.5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <span className="text-dark-300">{item}</span>
        </li>
      ))}
    </ul>
  );
}
