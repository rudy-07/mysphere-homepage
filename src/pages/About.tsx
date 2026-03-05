import { motion } from "framer-motion";
import { Mail, Globe, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] animate-pulse-glow" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              About <span className="gradient-text">mySphere</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              mySphere is a growing ecosystem of modern applications designed to give you complete control over your digital life — from personal cloud storage to smart security, music, and finance.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 md:p-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe your data should belong to you. mySphere is built on the principle that powerful software doesn't need to come at the cost of your privacy. Every app in our ecosystem is designed to keep you in control — your files, your devices, your life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's turning your PC into a personal cloud, repurposing an old phone as a security camera, or managing your finances with AI — mySphere makes it simple, secure, and seamless.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:contact@mysphere.co.in" className="text-foreground hover:text-primary transition-colors">contact@mysphere.co.in</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Website</div>
                  <a href="https://mysphere.co.in" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">mysphere.co.in</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <span className="text-foreground">India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
