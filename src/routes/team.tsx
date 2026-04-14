import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our People — Deborah Williams Legal" },
      { name: "description", content: "Meet the attorneys and professionals who make Deborah Williams Legal a leader in global legal services." },
      { property: "og:title", content: "Our People — Deborah Williams Legal" },
      { property: "og:description", content: "Meet the attorneys and professionals who make Deborah Williams Legal a leader in global legal services." },
    ],
  }),
  component: TeamPage,
});

const leaders = [
  { name: "Wynn Williams", title: "Managing Partner", practice: "Corporate & M&A", initials: "VC" },
  { name: "Deborah Williams", title: "Senior Partner", practice: "Litigation", initials: "JS" },
  { name: "Sarah Chen", title: "Partner", practice: "Finance & Banking", initials: "SC" },
  { name: "Michael Torres", title: "Partner", practice: "Intellectual Property", initials: "MT" },
  { name: "Elizabeth Warren-Hayes", title: "Partner", practice: "Tax", initials: "EW" },
  { name: "David Nakamura", title: "Partner", practice: "Real Estate", initials: "DN" },
  { name: "Amara Okafor", title: "Partner", practice: "Litigation", initials: "AO" },
  { name: "Robert Fitzgerald", title: "Counsel", practice: "Corporate & M&A", initials: "RF" },
];

function TeamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label text-gold mb-4 block">Our People</span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Meet Our Team
            </h1>
            <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
              Our strength lies in our people — accomplished attorneys who combine deep legal 
              expertise with practical business insight and a relentless focus on results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading label="Leadership" title="Partners & Counsel" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {leaders.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-hover group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-secondary flex items-center justify-center mb-4 overflow-hidden">
                  <span className="font-serif text-4xl text-muted-foreground/40 group-hover:text-gold transition-colors duration-300">
                    {person.initials}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-gold transition-colors duration-300">
                  {person.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{person.title}</p>
                <p className="text-xs text-gold mt-1">{person.practice}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionHeading
            label="Careers"
            title="Join Our Team"
            description="We're always looking for exceptional talent to join our global team of legal professionals."
            align="center"
          />
          <Link to="/contact" className="mt-10 inline-block">
            <Button variant="hero" size="lg">Explore Careers</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
