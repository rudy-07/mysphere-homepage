import { motion } from "framer-motion";
import { CheckCircle2, Clock, CalendarClock } from "lucide-react";

const stages = [
  {
    label: "Active",
    icon: CheckCircle2,
    color: "text-emerald-400",
    lineColor: "bg-emerald-400",
    items: ["myCloud"],
  },
  {
    label: "In Development",
    icon: Clock,
    color: "text-yellow-400",
    lineColor: "bg-yellow-400",
    items: ["myCam", "myTune improvements"],
  },
  {
    label: "Planned",
    icon: CalendarClock,
    color: "text-muted-foreground",
    lineColor: "bg-muted-foreground",
    items: ["myLink", "myMoney"],
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Growing</span> Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground">Our roadmap for building the future.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.label}
                className="relative flex gap-6 md:gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="relative z-10 shrink-0">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-muted/50 border border-border flex items-center justify-center`}>
                    <stage.icon className={`w-6 h-6 ${stage.color}`} />
                  </div>
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className={`text-lg font-semibold mb-3 ${stage.color}`}>{stage.label}</h3>
                  <div className="flex flex-wrap gap-3">
                    {stage.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-xl bg-muted/40 border border-border text-sm text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
