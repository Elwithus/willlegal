import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Deborah Williams Legal" },
      { name: "description", content: "Get in touch with Deborah Williams Legal. Offices in New York, London, Hong Kong, and San Francisco." },
      { property: "og:title", content: "Contact — Deborah Williams Legal LLP" },
      { property: "og:description", content: "Get in touch with Deborah Williams Legal. Offices in New York, London, Hong Kong, and San Francisco." },
    ],
  }),
  component: ContactPage,
});

const offices = [
  { city: "New York", address: "One World Financial Center, 200 Liberty Street, New York, NY 10281", phone: "+1 212 555 0100" },
  { city: "London", address: "99 Bishopsgate, London EC2M 3XF, United Kingdom", phone: "+44 20 7555 0100" },
  { city: "Hong Kong", address: "International Commerce Centre, 1 Austin Road West, Kowloon", phone: "+852 2555 0100" },
  { city: "San Francisco", address: "505 Montgomery Street, Suite 2000, San Francisco, CA 94111", phone: "+1 415 555 0100" },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-label text-gold mb-4 block">Get in Touch</span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">Contact Us</h1>
            <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
              We're here to help. Reach out to discuss how we can assist with your legal needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading label="Inquiry" title="Send Us a Message" />
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-10 p-8 bg-cream text-center"
                >
                  <h3 className="font-serif text-2xl text-foreground mb-3">Thank You</h3>
                  <p className="text-muted-foreground">We'll be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-label text-foreground/80 text-[10px] block mb-2">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-label text-foreground/80 text-[10px] block mb-2">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-label text-foreground/80 text-[10px] block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-label text-foreground/80 text-[10px] block mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-label text-foreground/80 text-[10px] block mb-2">Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  <Button variant="hero" type="submit" className="w-full sm:w-auto">
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Offices */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading label="Locations" title="Our Offices" />
              <div className="mt-10 space-y-8">
                {offices.map((office) => (
                  <div key={office.city} className="pb-8 border-b border-border last:border-b-0">
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">{office.city}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{office.address}</p>
                    <p className="text-sm text-gold mt-2">{office.phone}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
