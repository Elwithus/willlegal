import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import buildingImage from "@/assets/building-exterior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Deborah Williams Legal LLP" },
      { name: "description", content: "Learn about our history, values, and commitment to legal excellence spanning over a century." },
      { property: "og:title", content: "About — Deborah Williams Legal LLP" },
      { property: "og:description", content: "Learn about our history, values, and commitment to legal excellence spanning over a century." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Client First", description: "We are deeply committed to understanding and advancing our clients' most important goals." },
  { title: "Excellence", description: "We hold ourselves to the highest standards of legal analysis, strategic thinking, and execution." },
  { title: "Integrity", description: "We act with honesty and transparency in every interaction, building trust that endures." },
  { title: "Collaboration", description: "We work seamlessly across practices, offices, and borders to deliver integrated solutions." },
];

const timeline = [
  { year: "1923", event: "Founded in New York by partners Deborah Williams and Wynn Williams" },
  { year: "1955", event: "Opened our first international office in London" },
  { year: "1987", event: "Expanded to Asia Pacific with offices in Hong Kong and Tokyo" },
  { year: "2005", event: "Surpassed 1,000 attorneys worldwide" },
  { year: "2020", event: "Recognized as Global Law Firm of the Year" },
  { year: "2026", event: "Over 2,400 attorneys across 30+ offices globally" },
];

function AboutPage() {
  return (
    <div>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-label text-gold mb-4 block">The Firm</span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">About Us</h1>
            <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
              For over a century, Deborah Williams Legal has been at the forefront of legal innovation, 
              advising the world's most prominent organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image + Text */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={buildingImage} alt="Deborah Williams Legal office building" className="w-full" loading="lazy" width={1024} height={1024} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading label="Our Story" title="A Legacy Built on Trust" />
              <p className="text-muted-foreground leading-relaxed mt-8">
                Since our founding in 1923, we have built our reputation on a simple but demanding 
                promise: to provide the very best legal counsel to every client, on every matter.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Today, Deborah Williams Legal is recognized globally for its work on the most complex 
                and consequential transactions, disputes, and regulatory matters. Our success is 
                rooted in the quality and dedication of our people and our culture of collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading label="Our Values" title="What We Stand For" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <SectionHeading label="History" title="Our Journey" align="center" />
          <div className="mt-16 space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-8 py-8 border-b border-border"
              >
                <span className="font-serif text-2xl text-gold font-semibold min-w-[80px]">{item.year}</span>
                <p className="text-muted-foreground leading-relaxed">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section text-3xl md:text-4xl text-primary-foreground mb-6">
              Ready to Work Together?
            </h2>
            <Link to="/contact">
              <Button variant="hero" size="lg">Contact Us</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
