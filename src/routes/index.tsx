import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Server, Shield, Workflow, Headset, Network, ShieldCheck, Cloud, Code2,
  Award, BadgeCheck, Sparkles, Mail, Phone, Linkedin, Download, ArrowRight,
  ArrowUp, MapPin, Menu, X, Github, ExternalLink, Cpu, Lock, Zap, CheckCircle2,
} from "lucide-react";
import { Particles } from "@/components/site/Particles";
import {
  nav, services, skillGroups, projects, certifications, experience, exploring,
} from "@/components/site/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server, Shield, Workflow, Headset, Network, ShieldCheck, Cloud, Code2,
  Award, BadgeCheck, Sparkles,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joel Cagape — IT Infrastructure, Cybersecurity & Automation" },
      {
        name: "description",
        content:
          "Joel Cagape is an experienced IT professional specializing in enterprise infrastructure, cybersecurity, and workflow automation. 10+ years securing and modernizing IT operations.",
      },
      { property: "og:title", content: "Joel Cagape — Secure, Reliable, Automated IT Solutions" },
      { property: "og:description", content: "IT Infrastructure • Cybersecurity • Workflow Automation" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function useCounter(target: number, duration = 1.6) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toString();
      },
    });
    return () => controls.stop();
  }, [inView, target, duration]);
  return ref;
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useCounter(value);
  return (
    <span className="tabular-nums">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass-strong shadow-[var(--shadow-elevated)]" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]">
              <Cpu className="h-4.5 w-4.5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold tracking-tight">Joel Cagape</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                IT · Security · Automation
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              Let's Talk <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden rounded-lg p-2 hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong mt-2 rounded-2xl p-3 md:hidden"
          >
            <div className="grid gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

function Section({
  id, eyebrow, title, children, subtitle,
}: { id?: string; eyebrow?: string; title?: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.7 0.1 250) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.7 0.1 250) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
          }}
        />
        <Particles />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for consulting & automation projects
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Building <span className="text-gradient">Secure, Reliable</span>
            <br className="hidden sm:block" /> and <span className="text-gradient">Automated</span> IT Solutions.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
            I help businesses improve productivity, strengthen security, and modernize their
            IT operations through enterprise networking, cybersecurity, workflow automation,
            and AI-powered business solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Me
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { v: 10, s: "+", l: "Years Experience" },
              { v: 50, s: "+", l: "Projects Delivered" },
              { v: 15, s: "+", l: "Branches Supported" },
              { v: 99, s: "%", l: "Uptime Focus" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                className="glass rounded-2xl p-4"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                  <Counter value={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A decade of IT built for business outcomes."
    >
      <div className="grid gap-8 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm an experienced IT professional with more than <span className="text-foreground font-medium">10 years</span> of experience supporting
            enterprise IT infrastructure, network administration, cybersecurity, technical support,
            and workflow automation.
          </p>
          <p>
            Throughout my career, I've helped improve business operations by designing secure
            network infrastructures, deploying enterprise firewall solutions, automating repetitive
            workflows, and supporting mission-critical systems across multiple dealership branches.
          </p>
          <p>
            I enjoy combining technology, security, and automation to create practical solutions
            that reduce manual work and improve operational efficiency.
          </p>
          <p>
            I'm passionate about continuous learning in cybersecurity, cloud technologies, APIs,
            AI tools, and workflow automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-2"
        >
          <div className="glass-strong relative overflow-hidden rounded-2xl p-6">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
            <div className="space-y-4">
              {[
                { icon: Lock, label: "Secure by design", d: "Firewall, VPN, VLAN, endpoint" },
                { icon: Zap, label: "Automation-first", d: "n8n, Make.com, APIs" },
                { icon: Network, label: "Enterprise scale", d: "Multi-branch operations" },
                { icon: Sparkles, label: "AI-augmented", d: "ChatGPT, Claude, Gemini" },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                    <f.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium">{f.label}</div>
                    <div className="text-xs text-muted-foreground">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I Do"
      title="Four disciplines. One dependable stack."
      subtitle="End-to-end capabilities across infrastructure, security, automation, and support."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-primary)] opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20 text-primary transition-all group-hover:scale-110 group-hover:bg-primary/20">
                <Icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title="A production-grade toolbox."
      subtitle="Battle-tested across enterprise environments and multi-branch operations."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = iconMap[g.icon];
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-6 transition-all hover:border-primary/30"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 ring-1 ring-primary/20 text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-display text-base font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  const cats = ["All", "Automation", "Security", "Infrastructure"] as const;
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Delivered outcomes, not just deployments."
      subtitle="A selection of infrastructure, security, and automation projects."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
              active === c
                ? "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
            className="group glass relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-primary">
                {p.category}
              </span>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold leading-tight">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function Certs() {
  return (
    <Section id="certs" eyebrow="Certifications" title="Verified and continuously trained.">
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((c, i) => {
          const Icon = iconMap[c.icon];
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group flex items-start gap-4 rounded-2xl p-5 transition-all hover:border-primary/30"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20 text-primary transition-transform group-hover:scale-110">
                <Icon className="h-5.5 w-5.5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.issuer}</div>
                <div className="mt-1 font-medium leading-snug">{c.name}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="A decade at the same enterprise."
      subtitle="Consistent ownership of IT infrastructure across multiple branches."
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:left-1/2" />
        <div className="space-y-10">
          {experience.map((e, i) => (
            <motion.div
              key={e.role + e.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className={`relative grid gap-4 md:grid-cols-2 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
              }`}
            >
              <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                <div className="grid h-3 w-3 place-items-center rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]">
                  <span className="h-1 w-1 rounded-full bg-background" />
                </div>
              </div>
              <div className="glass ml-10 rounded-2xl p-6 md:ml-0 md:mr-8 md:even:ml-8 md:even:mr-0">
                <div className="mb-1 text-xs uppercase tracking-widest text-primary">{e.period}</div>
                <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                <div className="text-sm text-muted-foreground">{e.company}</div>
                <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Exploring() {
  return (
    <Section id="exploring" eyebrow="Currently Exploring" title="Always shipping new skills.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {exploring.map((e, i) => {
          const Icon = iconMap[e.icon];
          return (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute right-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
                Learning
              </div>
              <Icon className="mb-4 h-6 w-6 text-primary" />
              <div className="font-display font-semibold">{e.title}</div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education">
      <div className="glass rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20 text-primary">
            <Award className="h-5.5 w-5.5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Bachelor's Degree
            </div>
            <div className="font-display text-lg font-semibold">
              Bachelor of Science in Electronics and Communications Engineering
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something reliable.">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong relative overflow-hidden rounded-2xl p-6 md:p-8"
        >
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
          <p className="text-muted-foreground">
            Available for consulting, automation builds, and infrastructure projects. I usually
            reply within 24 hours.
          </p>
          <div className="mt-6 space-y-3">
            {[
              { icon: Mail, label: "joelcagape@gmail.com", href: "mailto:joelcagape@gmail.com" },
              { icon: Phone, label: "+63 947 375 8368", href: "tel:+639473758368" },
              { icon: Linkedin, label: "linkedin.com/in/joel-cagape", href: "https://www.linkedin.com/in/joel-cagape-a23b9812a" },
              { icon: MapPin, label: "Mindanao, Philippines" },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 ring-1 ring-primary/20 text-primary">
                  <c.icon className="h-4.5 w-4.5" />
                </div>
                <div className="text-sm">{c.label}</div>
                {c.href && (
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                )}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Inquiry from ${data.get("name") || "website"}`);
            const body = encodeURIComponent(`${data.get("message") || ""}\n\n— ${data.get("name") || ""} (${data.get("email") || ""})`);
            window.location.href = `mailto:joelcagape@gmail.com?subject=${subject}&body=${body}`;
          }}
          className="glass rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Name</span>
              <input name="name" required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Email</span>
              <input type="email" name="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50" />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Message</span>
            <textarea name="message" rows={5} required className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50" />
          </label>
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]">
            Send Message <ArrowRight className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-primary)]">
            <Cpu className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <div className="text-sm font-semibold">Joel Cagape</div>
            <div className="text-xs text-muted-foreground italic">
              "Building secure, reliable and automated IT solutions."
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:joelcagape@gmail.com" className="glass rounded-lg p-2 text-muted-foreground hover:text-primary" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/joel-cagape-a23b9812a" target="_blank" rel="noreferrer" className="glass rounded-lg p-2 text-muted-foreground hover:text-primary" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" className="glass rounded-lg p-2 text-muted-foreground hover:text-primary" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Joel Cagape. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="glass-strong grid h-11 w-11 place-items-center rounded-full text-foreground hover:text-primary"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-4 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)]"
      >
        <Mail className="h-4 w-4" />
        <span className="hidden sm:inline">Get in touch</span>
      </motion.a>
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-[image:var(--gradient-primary)]"
    />
  );
}

function Page() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {!loaded && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-background">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-14 w-14">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" />
              <div className="absolute inset-2 rounded-full bg-[image:var(--gradient-primary)] opacity-30 blur-md" />
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Initializing
            </div>
          </div>
        </div>
      )}
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certs />
        <Experience />
        <Exploring />
        <Education />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
