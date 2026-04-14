import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import heroImage from "@/assets/hero-skyline.jpg";
import officeImage from "@/assets/office-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deborah Williams Legal — Global Law Firm" },
      { name: "description", content: "A leading global law firm advising the world's top companies on their most complex legal matters." },
      { property: "og:title", content: "Deborah Williams Legal — Global Law Firm" },
      { property: "og:description", content: "A leading global law firm advising the world's top companies on their most complex legal matters." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "2,400+", label: "Attorneys Worldwide" },
  { value: "30+", label: "Global Offices" },
  { value: "95%", label: "Client Retention" },
  { value: "$1.2T", label: "Deals Advised" },
];

const practiceHighlights = [
  {
    title: "Corporate & M&A",
    description: "Advising on the most significant cross-border mergers, acquisitions, and joint ventures worldwide.",
    icon: "⬡",
  },
  {
    title: "Litigation & Arbitration",
    description: "Representing clients in high-stakes commercial disputes, regulatory investigations, and international arbitrations.",
    icon: "⬢",
  },
  {
    title: "Finance & Banking",
    description: "Structuring innovative financing solutions for complex capital markets and banking transactions.",
    icon: "◈",
  },
  {
    title: "Intellectual Property",
    description: "Protecting and enforcing IP rights across patent, trademark, copyright, and trade secret matters.",
    icon: "◇",
  },
];

const insights = [
  {
    category: "Client Alert",
    date: "April 10, 2026",
    title: "Navigating the New Regulatory Landscape for Cross-Border Transactions",
  },
  {
    category: "Publication",
    date: "April 7, 2026",
    title: "The Future of ESG Compliance: What Companies Need to Know",
  },
  {
    category: "Event",
    date: "April 3, 2026",
    title: "Annual Global M&A Conference — Registration Now Open",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.7 },
};

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="City skyline at dusk"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl"
          >
            <span className="text-label text-gold mb-6 block">Global Legal Excellence</span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-7xl text-primary-foreground mb-8">
              Counsel for the
              <br />
              <span className="text-gold italic">World's Most</span>
              <br />
              Complex Matters
            </h1>
            <p className="text-body-lg text-primary-foreground/70 max-w-xl mb-10">
              For over a century, we've helped the world's leading organizations navigate 
              their most critical legal and business challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/practice-areas">
                <Button variant="hero">Our Expertise</Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Band */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-3xl md:text-4xl font-semibold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-label text-primary-foreground/50 text-[10px]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading
            label="What We Do"
            title="Practice Areas"
            description="We deliver integrated legal solutions across a broad spectrum of practices, industries, and geographies."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {practiceHighlights.map((practice, i) => (
              <motion.div
                key={practice.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover group border border-border bg-card p-8 lg:p-10 cursor-pointer"
              >
                <div className="text-gold text-2xl mb-4">{practice.icon}</div>
                <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {practice.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {practice.description}
                </p>
                <div className="mt-6 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more →
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/practice-areas">
              <Button variant="outline" size="lg">View All Practice Areas</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Band */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-navy py-20 lg:py-32 px-6 lg:px-16 flex items-center">
            <motion.div {...fadeUp} className="max-w-lg">
              <SectionHeading
                label="About the Firm"
                title="A Legacy of Excellence"
                light
              />
              <p className="text-primary-foreground/70 mt-8 leading-relaxed">
                Founded on the principles of rigorous analysis, creative problem-solving, 
                and an unwavering commitment to our clients, Deborah Williams Legal has grown 
                into one of the world's preeminent law firms.
              </p>
              <p className="text-primary-foreground/70 mt-4 leading-relaxed">
                Our attorneys bring deep industry knowledge and cross-jurisdictional 
                expertise to every engagement, ensuring our clients receive counsel that 
                is both strategically sound and commercially practical.
              </p>
              <Link to="/about" className="mt-8 inline-block">
                <Button variant="hero">Discover Our Story</Button>
              </Link>
            </motion.div>
          </div>
          <div className="relative h-80 lg:h-auto">
            <img
              src={officeImage}
              alt="Modern law firm conference room"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Knowledge"
            title="Latest Insights"
            description="Stay informed with our latest thinking on the legal and regulatory developments shaping the business world."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {insights.map((item, i) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover bg-card border border-border p-8 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-label text-gold text-[10px]">{item.category}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-gold transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>
                <div className="mt-6 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read more →
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/insights">
              <Button variant="outline" size="lg">View All Insights</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeUp}>
            <span className="text-label text-gold mb-6 block">Work With Us</span>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              Ready to Discuss Your Legal Needs?
            </h2>
            <p className="text-body-lg text-primary-foreground/60 max-w-2xl mx-auto mb-10">
              Our attorneys are ready to help you navigate complex legal challenges with confidence.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">Schedule a Consultation</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
