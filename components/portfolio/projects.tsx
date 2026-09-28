'use client'

import Image from 'next/image'
import { motion, useMotionTemplate, useMotionValue } from 'motion/react'
import { ArrowRight, Calendar, FlaskConical } from 'lucide-react'
import { GithubIcon } from './brand-icons'
import { Reveal, RevealItem, SectionHeading } from './reveal'

const GITHUB = 'https://github.com/Patrick17-ui'

const projects = [
  {
    title: 'Gestion des dépenses de trajets',
    period: 'Fév. 2025 — Mai 2025',
    stack: ['React', 'TypeScript', 'Electron', 'MySQL'],
    description:
      'Application desktop de suivi des dépenses liées aux trajets de véhicules : cahier des charges, frontend, backend et maintenance.',
    image: '/images/project-dashboard.png',
  },
  {
    title: 'BUY’N’SELLEM',
    period: 'Oct. 2022 — Mai 2023',
    stack: ['Angular', 'TypeScript', 'Express', 'MySQL'],
    description: 'Application web et mobile de e-commerce, de la conception des maquettes jusqu’au développement complet.',
    image: '/images/project-shop.png',
  },
  {
    title: 'Groupe Cœurs Braves',
    period: 'Juin 2023 — Sept. 2023',
    stack: ['Angular', 'Express', 'MySQL'],
    description: 'Développement frontend des sites et applications du groupe, maintenance et assistance aux utilisateurs.',
    image: '/images/project-task.png',
  },
  {
    title: 'Détection des émotions faciales',
    period: 'Projet de Maîtrise — IA',
    stack: ['Python', 'CNN', 'Deep Learning'],
    description: 'Système de détection automatique des émotions faciales à l’aide de réseaux neuronaux convolutifs.',
    image: '/images/project-ai.png',
  },
]

type Lang = { name: string; color: string }

const LANG = {
  php: { name: 'PHP · Laravel', color: '#F05340' },
  java: { name: 'Java EE', color: '#F89820' },
  mysql: { name: 'MySQL', color: '#4479A1' },
  ionic: { name: 'Ionic · TypeScript', color: '#3880FF' },
  postgres: { name: 'PostgreSQL · SQL', color: '#336791' },
} satisfies Record<string, Lang>

const academic = [
  {
    title: 'Gestion de structures hôtelières',
    category: 'Application web',
    description: 'Réservations, chambres, clients et facturation centralisés dans une interface d’administration.',
    langs: [LANG.php, LANG.mysql],
    image: '/images/academic-hotel.png',
    span: 'lg:col-span-3',
  },
  {
    title: 'Gestion d’une auto-école',
    category: 'Application d’entreprise',
    description: 'Suivi des élèves, planning des leçons de conduite et gestion des moniteurs.',
    langs: [LANG.java, LANG.mysql],
    image: '/images/academic-driving.png',
    span: 'lg:col-span-3',
  },
  {
    title: 'Arbre généalogique',
    category: 'Application web',
    description: 'Création et visualisation des liens familiaux sur plusieurs générations.',
    langs: [LANG.php, LANG.mysql],
    image: '/images/academic-family.png',
    span: 'lg:col-span-2',
  },
  {
    title: 'Calculatrice mobile',
    category: 'Application mobile',
    description: 'Calculatrice multiplateforme à l’interface épurée et réactive.',
    langs: [LANG.ionic],
    image: '/images/academic-calculator.png',
    span: 'lg:col-span-2',
  },
  {
    title: 'Administration de base de données',
    category: 'Base de données',
    description: 'Modélisation, requêtes avancées, rôles et optimisation d’une base relationnelle.',
    langs: [LANG.postgres],
    image: '/images/academic-database.png',
    span: 'lg:col-span-2',
  },
]

function AcademicCard({ project, index }: { project: (typeof academic)[number]; index: number }) {
  return (
    <RevealItem delay={index * 0.08} className={`${project.span} list-none`}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="group relative isolate flex h-80 flex-col justify-between overflow-hidden rounded-3xl border border-border p-6 shadow-sm transition-shadow hover:shadow-2xl hover:shadow-primary/20"
      >
        <Image
          src={project.image || '/placeholder.svg'}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[oklch(0.18_0.04_255)] via-[oklch(0.18_0.04_255/70%)] to-[oklch(0.18_0.04_255/15%)] transition-opacity duration-500 group-hover:opacity-90"
          aria-hidden="true"
        />

        <div className="flex items-start justify-between gap-3">
          <ul className="flex flex-wrap gap-2" aria-label="Technologies utilisées">
            {project.langs.map((lang) => (
              <li
                key={lang.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 font-mono text-xs font-semibold text-white backdrop-blur-md"
              >
                <span className="size-2.5 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: lang.color, color: lang.color }} aria-hidden="true" />
                {lang.name}
              </li>
            ))}
          </ul>
          <span className="font-mono text-sm font-medium text-white/60">0{index + 1}</span>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{project.category}</p>
          <h4 className="mt-2 text-balance text-2xl font-semibold leading-tight text-white">{project.title}</h4>
          <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 group-focus-within:max-h-24 group-focus-within:opacity-100 max-lg:max-h-24 max-lg:opacity-100">
            {project.description}
          </p>
          <span className="mt-4 block h-1 w-12 rounded-full bg-primary transition-all duration-500 group-hover:w-24" aria-hidden="true" />
        </div>
      </motion.article>
    </RevealItem>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, oklch(0.68 0.19 45 / 12%), transparent 70%)`

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          x.set(e.clientX - rect.left)
          y.set(e.clientY - rect.top)
        }}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-2xl hover:shadow-primary/10"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
          aria-hidden="true"
        />
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={`Illustration du projet ${project.title}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 font-mono text-xs font-medium text-primary-foreground shadow-lg">
            0{index + 1}
          </span>
        </div>
        <div className="relative z-20 flex flex-1 flex-col p-6">
          <p className="flex items-center gap-1.5 font-mono text-xs text-accent">
            <Calendar className="size-3.5" aria-hidden="true" />
            {project.period}
          </p>
          <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          <div className="mt-6 flex items-center justify-between">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              Voir sur GitHub
              <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
            </a>
            <span className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent">
              <GithubIcon className="size-4" />
            </span>
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projets" className="relative scroll-mt-24 overflow-hidden px-4 py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/images/footer-bg-tech.png')" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-background/85"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Réalisations"
          title="Projets & initiatives"
          action={
            <a href={GITHUB} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium text-primary">
              Mon GitHub
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="flex items-center gap-2 text-xl font-semibold">
            <FlaskConical className="size-5 text-accent" aria-hidden="true" />
            Projets académiques
          </h3>
        </Reveal>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {academic.map((a, i) => (
            <AcademicCard key={a.title} project={a} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
