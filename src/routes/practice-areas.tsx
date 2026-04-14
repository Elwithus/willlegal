import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Deborah Williams Legal" },
      { name: "description", content: "Explore our comprehensive practice areas spanning corporate, litigation, finance, and more." },
      { property: "og:title", content: "Practice Areas — Deborah Williams Legal" },
      { property: "og:description", content: "Explore our comprehensive practice areas spanning corporate, litigation, finance, and more." },
    ],
  }),
  component: PracticeAreasPage,
});

const practices = [
  {
    title: "Corporate & M&A",
    description: "We advise on the most significant cross-border mergers, acquisitions, divestitures, and joint ventures. Our team handles transactions of every size and complexity across all major industries and geographies.",
    areas: ["Mergers & Acquisitions", "Private Equity", "Joint Ventures", "Corporate Governance"],
  },
  {
    title: "Litigation & Dispute Resolution",
    description: "Our litigators represent clients in high-stakes commercial disputes, regulatory investigations, securities litigation, and international arbitrations before courts and tribunals worldwide.",
    areas: ["Commercial Litigation", "Securities Litigation", "International Arbitration", "Regulatory Investigations"],
  },
  {
    title: "Finance & Banking",
    description: "We structure and negotiate complex financing transactions, including leveraged buyouts, investment-grade financings, restructurings, and innovative capital markets solutions.",
    areas: ["Leveraged Finance", "Capital Markets", "Structured Finance", "Restructuring"],
  },
  {
    title: "Intellectual Property",
    description: "Our IP practice protects and enforces intellectual property rights across patent, trademark, copyright, and trade secret matters in industries from technology to life sciences.",
    areas: ["Patent Litigation", "Trademark & Copyright", "Trade Secrets", "IP Transactions"],
  },
  {
    title: "Tax",
    description: "We provide strategic tax advice on domestic and international transactions, helping clients structure investments, financings, and operations in a tax-efficient manner.",
    areas: ["Tax Planning", "Transfer Pricing", "Tax Controversy", "International Tax"],
  },
  {
    title: "Real Estate",
    description: "Our real estate team advises on complex acquisitions, dispositions, developments, financings, and leasing transactions across commercial, residential, and hospitality sectors.",
    areas: ["Acquisitions & Dispositions", "Development", "Real Estate Finance", "REITs"],
  },
];

function PracticeAreasPage() {
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
            <span className="text-label text-gold mb-4 block">What We Do</span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Practice Areas
            </h1>
            <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
              We deliver integrated legal solutions across a broad spectrum of practices, 
              industries, and geographies to help our clients achieve their strategic goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice List */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {practices.map((practice, i) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16 border-b border-border last:border-b-0"
              >
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-foreground">
                    {practice.title}
                  </h3>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {practice.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {practice.areas.map((area) => (
                      <span
                        key={area}
                        className="text-xs font-medium tracking-wide bg-cream text-foreground px-4 py-2"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionHeading
            title="Need Legal Counsel?"
            description="Our attorneys are ready to help you navigate complex challenges."
            align="center"
          />
          <Link to="/contact" className="mt-10 inline-block">
            <Button variant="hero" size="lg">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
