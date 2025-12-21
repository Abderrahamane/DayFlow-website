import { featureCategories } from "@/content/site";
import { SectionHeading } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";

export default function FeaturesPage() {
  return (
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
         <div className="max-w-3xl space-y-3">
           <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Features</p>
           <h1 className="text-4xl font-bold leading-tight md:text-5xl">Everything you need, without the noise</h1>
           <p className="text-lg text-muted-foreground">
             DayFlow keeps tasks, habits, focus, and notes in one calm Android app. Each feature is simple enough to grasp in seconds.
           </p>
         </div>

        <div className="mt-12 space-y-10">
          {featureCategories.map((category) => (
            <div key={category.title} className="space-y-5">
              <SectionHeading eyebrow="Feature group" title={category.title} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}
