import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export function Card({ title, description, href, icon }: CardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-primary-600/50 hover:bg-dark-900 transition-all duration-300"
    >
      {icon && <span className="text-3xl mb-4 block">{icon}</span>}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-dark-400 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}
