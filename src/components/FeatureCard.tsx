import { LucideIcon } from "lucide-react";
import Image from "next/image";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  image
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {image && (
        <div className="absolute right-0 top-0 h-32 w-32 opacity-20 blur-[1px] transition-all group-hover:opacity-30 group-hover:scale-110">
          <Image
            src={image}
            alt=""
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      )}
      <div className="relative z-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-600 dark:text-indigo-400 shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

