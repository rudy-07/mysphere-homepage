import { motion } from "framer-motion";
import { Cloud, Camera, Music, Link, Wallet } from "lucide-react";

const apps = [
  { name: "myCloud", icon: Cloud },
  { name: "myCam", icon: Camera },
  { name: "myTune", icon: Music },
  { name: "myLink", icon: Link },
  { name: "myMoney", icon: Wallet },
];

const VisionSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            One Ecosystem. <span className="gradient-text">Complete Control.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            mySphere connects your devices, files, and data through a unified ecosystem of powerful applications.
          </p>
        </motion.div>

        {/* Interconnected visual */}
        <div className="relative flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {/* Central connecting ring */}
          <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-dashed border-accent/10 animate-[spin_45s_linear_infinite_reverse]" />

          {apps.map((app, i) => (
            <motion.div
              key={app.name}
              className="relative z-10 flex flex-col items-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="p-5 rounded-2xl glass-card glow-blue animate-float" style={{ animationDelay: `${i * 0.8}s` }}>
                <app.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground/70">{app.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
