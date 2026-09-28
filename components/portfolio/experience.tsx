'use client'

import { motion } from 'motion/react'
import { Briefcase, MapPin } from 'lucide-react'
import { Reveal, SectionHeading } from './reveal'

const jobs = [
  {
    role: 'Développeur web',
    company: 'Wintek',
    place: 'Douala, Cameroun',
    period: 'Mars 2024 — Mai 2026',
    tasks: [
      'Développement d’applications web avec Angular et intégration d’API REST.',
      'Suivi, planification et coordination des projets avec l’équipe.',
      'Support technique et assistance aux utilisateurs internes.',
      'Maintenance, évolution et compatibilité multi-appareils des solutions.',
    ],
    stack: ['Angular', 'TypeScript', 'C# / ASP.NET', 'MySQL', 'Swagger'],
  },
  {
    role: 'Développeur web',
    company: 'OverBrand',
    place: 'Dschang, Cameroun',
    period: 'Avr. 2023 — Jan. 2024',
    tasks: [
      'Développement de sites et applications pour un client basé en Allemagne.',
      'Maintenance et amélioration des fonctionnalités existantes.',
      'Rédaction de documentation technique pour utilisateurs et développeurs.',
    ],
    stack: ['React.js', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    role: 'Développeur web',
    company: 'VCAM',
    place: 'Dschang, Cameroun',
    period: 'Juil. 2022 — Déc. 2022',
    tasks: [
      'Développement d’une application de gestion du personnel.',
      'Maintenance, assistance technique et accompagnement des utilisateurs.',
      'Participation à l’élaboration de la documentation technique.',
    ],
    stack: ['Angular', 'C# / ASP.NET'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-secondary/60 px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Parcours" title="Expériences professionnelles" />

        <ol className="relative flex flex-col gap-8 border-l border-border pl-8 md:pl-12">
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-px top-0 h-full w-0.5 origin-top bg-gradient-to-b from-primary to-accent"
            aria-hidden="true"
          />
          {jobs.map((job, i) => (
            <li key={job.company} className="relative">
              <span
                className="absolute -left-[2.6rem] top-7 grid size-5 place-items-center rounded-full border-4 border-background bg-primary shadow-[0_0_0_4px_var(--glow)] md:-left-[3.6rem]"
                aria-hidden="true"
              />
              <Reveal delay={i * 0.1}>
                <article className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 md:p-8">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:rotate-6 group-hover:scale-110">
                        <Briefcase className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {job.role} <span className="text-accent">· {job.company}</span>
                        </h3>
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="size-3.5" aria-hidden="true" />
                          {job.place}
                        </p>
                      </div>
                    </div>
                    <span className="w-fit rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-5 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                    {job.tasks.map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <li key={s} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium">
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
