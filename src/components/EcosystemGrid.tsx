import { motion } from "framer-motion";
import { Camera, Music, Link as LinkIcon, Wallet, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "myCam",
    icon: Camera,
    status: "In Development",
    statusColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    description: "Turn any smartphone into a smart CCTV camera or dashcam with remote access and cloud storage integration.",
    highlights: ["Live camera feeds", "Remote access", "Motion alerts", "Cloud backup via myCloud"],
    slug: "mycam",
  },
  {
    name: "myTune",
    icon: Music,
    status: "Desktop App Available",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    description: "A modern music streaming and playback experience with intelligent queue management and a cinematic interface.",
    highlights: ["Online music streaming", "Smart queue system", "Dynamic album artwork", "AI playlist suggestions"],
    slug: "mytune",
  },
  {
    name: "myLink",
    icon: LinkIcon,
    status: "Planned",
    statusColor: "text-muted-foreground bg-muted/50 border-border",
    description: "Connect your phone and computer to sync notifications, clipboard data, and device activity seamlessly.",
    highlights: ["Phone notifications on desktop", "Clipboard sync", "AI notification categorization", "Cross-device communication"],
    slug: "mylink",
  },
  {
    name: "myMoney",
    icon: Wallet,
    status: "Planned",
    statusColor: "text-muted-foreground bg-muted/50 border-border",
    description: "An intelligent finance manager that tracks expenses, builds budgets, and provides AI-powered financial insights.",
    highlights: ["Expense tracking", "Budget management", "AI financial reports", "Investment tracking"],
    slug: "mymoney",
  },
];

const EcosystemGrid = () => {
  return (
    <section id="products" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A suite of interconnected apps designed around your digital life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              className="glass-card p-8 hover-lift group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${product.statusColor}`}>
                  {product.status}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-foreground">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

              <div className="space-y-2 mb-6">
                {product.highlights.map((h, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-foreground/60">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {h}
                  </div>
                ))}
              </div>

              <Link
                to={`/products/${product.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/btn"
              >
                Know More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemGrid;
