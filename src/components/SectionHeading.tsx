import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ label, title, description, align = "left", light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={align === "center" ? "text-center" : ""}
    >
      {label && (
        <span className={`text-label ${light ? "text-gold" : "text-gold"} mb-4 block`}>
          {label}
        </span>
      )}
      <h2 className={`heading-section text-3xl md:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      <div className={`section-divider mt-6 ${align === "center" ? "mx-auto" : ""}`} />
      {description && (
        <p className={`text-body-lg mt-6 max-w-2xl ${align === "center" ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
