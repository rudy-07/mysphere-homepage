import { motion } from "framer-motion";
import { Cloud, Upload, Share2, Search, Brain, Clock, Monitor, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Monitor, text: "Turn any PC into your own cloud server" },
  { icon: Upload, text: "Upload, download, and preview files instantly" },
  { icon: Share2, text: "Share files securely using direct links" },
  { icon: Brain, text: "AI-powered file organization" },
  { icon: Search, text: "Smart search with tags and filters" },
  { icon: Clock, text: "Temporary file stash with auto expiration" },
  { icon: Cloud, text: "Multi-device access across desktop, web, and mobile" },
];

const FeaturedProduct = () => {
  return (
    <section id="mycloud" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="glass-card p-8 md:p-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Cloud className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Featured Product</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">myCloud</span>
              <span className="text-foreground"> — Your Personal Cloud</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              Turn your own computer into a powerful personal cloud server. Store, share, and access your files from anywhere while maintaining full control of your data.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <feature.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/80">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://cloud.mysphere.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:scale-105"
              >
                Open myCloud
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                to="/products/mycloud"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 font-semibold text-lg transition-all duration-300"
              >
                Know More
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
