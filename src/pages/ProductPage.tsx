import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Monitor, Globe, Smartphone, Tablet } from "lucide-react";
import { productsData } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const platformIcons: Record<string, { icon: typeof Monitor; label: string }> = {
  Desktop: { icon: Monitor, label: "Desktop" },
  Web: { icon: Globe, label: "Web" },
  Android: { icon: Smartphone, label: "Android" },
  iOS: { icon: Tablet, label: "iOS" },
};

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productsData[slug] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const integrationProducts = product.integrations
    .map((name) => {
      const key = name.toLowerCase().replace("my", "my");
      return Object.values(productsData).find((p) => p.name === name);
    })
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <motion.div className="flex-1" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <product.icon className="w-10 h-10 text-primary" />
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${product.statusColor}`}>
                  {product.status}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                <span className="gradient-text">{product.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-2">{product.tagline}</p>
              <p className="text-base text-muted-foreground/70 max-w-xl mb-8 leading-relaxed">{product.description}</p>

              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:scale-105"
                >
                  Open {product.name}
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key <span className="gradient-text">Features</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Everything you need, built into one powerful application.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((f, i) => (
              <motion.div
                key={f.title}
                className="glass-card p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-10">
              {product.howItWorks.map((s, i) => (
                <motion.div
                  key={s.step}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                >
                  <div className="relative z-10 shrink-0 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                    {s.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Integration */}
      {integrationProducts.length > 0 && (
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ecosystem <span className="gradient-text">Integration</span>
              </h2>
              <p className="text-muted-foreground">{product.name} works seamlessly with other mySphere apps.</p>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {/* Current product */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="p-5 rounded-2xl glass-card glow-blue">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{product.name}</span>
              </motion.div>

              {/* Connecting lines */}
              <div className="hidden sm:flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-0.5 bg-primary/40 rounded-full" />
                ))}
              </div>

              {integrationProducts.map((p, i) => (
                <motion.div
                  key={p!.name}
                  className="flex flex-col items-center gap-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 1) * 0.1, duration: 0.5 }}
                >
                  <Link to={`/products/${p!.slug}`}>
                    <div className="p-5 rounded-2xl glass-card hover-lift animate-float" style={{ animationDelay: `${i * 0.8}s` }}>
                      <p.icon className="w-8 h-8 text-primary" />
                    </div>
                  </Link>
                  <span className="text-sm font-medium text-foreground/70">{p!.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Platform Availability */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available <span className="gradient-text">Platforms</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {product.platforms.map((platform, i) => {
              const pData = platformIcons[platform];
              if (!pData) return null;
              return (
                <motion.div
                  key={platform}
                  className="glass-card px-8 py-6 flex flex-col items-center gap-3 hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <pData.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-foreground">{pData.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      {product.url && (
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />
          </div>
          <motion.div className="max-w-3xl mx-auto text-center relative z-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to try <span className="gradient-text">{product.name}</span>?
            </h2>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:scale-105"
            >
              Open {product.name}
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductPage;
