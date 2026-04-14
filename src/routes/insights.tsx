import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Deborah Williams Legal" },
      { name: "description", content: "Stay informed with our latest legal insights, client alerts, and thought leadership." },
      { property: "og:title", content: "Insights — Deborah Williams Legal" },
      { property: "og:description", content: "Stay informed with our latest legal insights, client alerts, and thought leadership." },
    ],
  }),
  component: InsightsPage,
});

const articles = [
  { category: "Client Alert", date: "April 10, 2026", title: "Navigating the New Regulatory Landscape for Cross-Border Transactions", excerpt: "Recent regulatory changes have introduced new requirements for companies engaged in cross-border M&A activity. Here's what you need to know." },
  { category: "Publication", date: "April 7, 2026", title: "The Future of ESG Compliance: What Companies Need to Know", excerpt: "As ESG reporting requirements evolve globally, companies must adapt their governance frameworks to meet new standards." },
  { category: "Event", date: "April 3, 2026", title: "Annual Global M&A Conference — Registration Now Open", excerpt: "Join us for our annual conference featuring panels on the latest trends shaping the M&A landscape." },
  { category: "Client Alert", date: "March 28, 2026", title: "Supreme Court Decision Reshapes Antitrust Enforcement", excerpt: "The Court's landmark ruling has significant implications for merger review and competitive practices across all sectors." },
  { category: "Publication", date: "March 22, 2026", title: "AI and Intellectual Property: Navigating Uncharted Waters", excerpt: "Generative AI is raising novel IP questions. Our analysis outlines key considerations for businesses adopting AI technologies." },
  { category: "Client Alert", date: "March 15, 2026", title: "New Data Privacy Frameworks: A Comparative Analysis", excerpt: "We compare the latest data privacy regulations across key jurisdictions and outline practical steps for compliance." },
];

function InsightsPage() {
  return (
    <div>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-label text-gold mb-4 block">Knowledge</span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">Insights</h1>
            <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
              Our latest thinking on the legal and regulatory developments shaping the business world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Featured */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 mb-16 border-b border-border cursor-pointer group"
          >
            <div className="bg-secondary aspect-video flex items-center justify-center">
              <span className="text-label text-muted-foreground/40">Featured</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-label text-gold text-[10px]">{articles[0].category}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="text-xs text-muted-foreground">{articles[0].date}</span>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl font-medium text-foreground group-hover:text-gold transition-colors duration-300 mb-4">
                {articles[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{articles[0].excerpt}</p>
              <span className="mt-6 text-gold text-sm font-medium">Read more →</span>
            </div>
          </motion.article>

          {/* List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover border border-border bg-card p-8 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-label text-gold text-[10px]">{article.category}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-gold transition-colors duration-300 leading-snug mb-3">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                <span className="mt-4 block text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read more →
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
