'use client'

import React, { useEffect, useRef, useState } from 'react'
import { profile } from '../content/profile'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'

// ── Constants ──────────────────────────────────────────────────
const MONO = '"JetBrains Mono", "IBM Plex Mono", monospace'

const C = {
  bg:          '#0f1115',
  card:        '#16191f',
  cardHover:   '#1c2029',
  border:      'rgba(255,255,255,0.08)',
  borderFaint: 'rgba(255,255,255,0.05)',
  indigo:      '#7c8cff',
  indigoText:  '#9aa6ff',
  text:        '#e9eaec',
  sub:         '#9aa0ab',
  dim:         '#6e7480',
  dimmer:      '#3d4249',
} as const

// ── Primitives ─────────────────────────────────────────────────
const Hi = ({ children }: { children: React.ReactNode }) => (
  <Box component="span" sx={{ color: C.indigoText, fontWeight: 600 }}>{children}</Box>
)

const Tag = ({ label }: { label: string }) => (
  <Box sx={{
    display: 'inline-block', px: '8px', py: '2px',
    border: `1px solid ${C.border}`, borderRadius: '4px',
    fontSize: '0.68rem', color: C.dim, lineHeight: 1.6,
    whiteSpace: 'nowrap', fontFamily: MONO,
  }}>{label}</Box>
)

const OrgBadge = ({ children }: { children: React.ReactNode }) => (
  <Box component="span" sx={{
    px: '6px', py: '1px',
    border: `1px solid ${C.border}`, borderRadius: '4px',
    fontSize: '0.6rem', color: C.dim,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    fontFamily: MONO,
  }}>{children}</Box>
)

const SectionLabel = ({ num, label }: { num: string; label: string }) => (
  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
    <Typography sx={{ fontSize: '0.72rem', color: C.indigo, fontFamily: MONO }}>{num}</Typography>
    <Box sx={{ width: 3, height: 3, borderRadius: '50%', bgcolor: C.dimmer }} />
    <Typography sx={{ fontSize: '0.72rem', color: C.dim, letterSpacing: '0.12em' }}>{label}</Typography>
  </Stack>
)

// ── Fade-up animation ──────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

const fadeUpSx = (visible: boolean) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'none' : 'translateY(20px)',
  transition: 'opacity 0.55s ease, transform 0.55s ease',
  '@media (prefers-reduced-motion: reduce)': {
    opacity: 1, transform: 'none', transition: 'none',
  },
})

// ── Metrics strip ──────────────────────────────────────────────
const METRICS = [
  { value: '12+',        label: 'years experience' },
  { value: 'Full-stack', label: 'developer' },
  { value: 'TypeScript', label: 'Python · AWS · Node.js' },
  { value: 'Cloud & AI', label: 'LangGraph · RAG · MCP' },
] as const

const MetricsStrip = () => (
  <Box sx={{
    border: `1px solid ${C.border}`, borderRadius: '10px',
    bgcolor: C.card, p: 3.5,
  }}>
    <Grid container spacing={2.5}>
      {METRICS.map(({ value, label }) => {
        const isText = /[a-zA-Z&]/.test(value)
        return (
          <Grid key={label} size={{ xs: 6 }}>
            <Typography sx={{
              fontSize: isText
                ? { xs: '1.1rem', md: '1.25rem' }
                : { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 700, color: C.indigo, lineHeight: 1,
              letterSpacing: isText ? '-0.01em' : '-0.02em',
            }}>{value}</Typography>
            <Typography sx={{ fontSize: '0.72rem', color: C.dim, mt: 0.6, lineHeight: 1.35 }}>
              {label}
            </Typography>
          </Grid>
        )
      })}
    </Grid>
  </Box>
)

// ── Project data ───────────────────────────────────────────────
const PROJECT_META: Record<string, Array<{ label: string; value: string }>> = {
  'AI-Powered Sales Order Automation Bot': [
    { label: 'REDUCTION', value: '87%' },
    { label: 'TIME',      value: '60s' },
    { label: 'STATUS',    value: 'production' },
  ],
  'RAG-Powered WhatsApp Purchase Order Bot': [
    { label: 'CHANNEL',   value: 'WhatsApp' },
    { label: 'VECTOR DB', value: 'Qdrant' },
    { label: 'AUTH',      value: 'Auth0' },
  ],
  'Serverless Social Media Ad Management Platform': [
    { label: 'COMPUTE', value: '100% λ' },
    { label: 'MEDIA',   value: 'MediaConvert' },
    { label: 'AUTH',    value: 'Auth0' },
  ],
  '60M+ User Profile Migration': [
    { label: 'PROFILES', value: '60M+' },
    { label: 'DOWNTIME', value: 'zero' },
    { label: 'STRATEGY', value: 'dual-write' },
  ],
  'Zero-Downtime Maintenance Page System': [
    { label: 'ACTIVATION',  value: 'edge' },
    { label: 'ORIGIN HITS', value: '0' },
    { label: 'SCOPE',       value: 'global' },
  ],
}

const PROJECT_ORG: Record<string, string> = {
  '60M+ User Profile Migration':           'SEEK',
  'Zero-Downtime Maintenance Page System': 'SEEK',
}

// ── Section wrapper ────────────────────────────────────────────
const sectionSx = {
  pt: { xs: 8, md: 12 },
  pb: { xs: 5, md: 8 },
  borderTop: `1px solid rgba(255,255,255,0.07)`,
}

// ── App ────────────────────────────────────────────────────────
export default function App() {
  const year       = new Date().getFullYear()
  const about      = useFadeUp()
  const work       = useFadeUp()
  const experience = useFadeUp()
  const stack      = useFadeUp()
  const education  = useFadeUp()

  return (
    <Box sx={{ bgcolor: C.bg, minHeight: '100vh', color: C.text }}>

      {/* ── HEADER ── */}
      <Box component="header" sx={{
        position: 'sticky', top: 0, zIndex: 100,
        bgcolor: 'rgba(15,17,21,0.88)', backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${C.border}`,
      }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1.8 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.92rem', color: C.text, letterSpacing: '-0.01em' }}>
              hket89
            </Typography>
            <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
              {['about', 'work', 'experience', 'stack'].map((anchor) => (
                <Box key={anchor} component="a" href={`#${anchor}`} sx={{
                  fontSize: '0.8rem', color: C.dim, textDecoration: 'none',
                  '&:hover': { color: C.text },
                }}>{anchor}</Box>
              ))}
            </Stack>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              {([
                [profile.linkedin, LinkedInIcon, 'LinkedIn'],
                [profile.github,   GitHubIcon,   'GitHub'],
              ] as [string, React.ElementType, string][]).map(([href, Icon, lbl]) => (
                <Box key={lbl} component="a" href={href} target="_blank" rel="noreferrer"
                  aria-label={lbl}
                  sx={{ color: C.dim, display: 'flex', alignItems: 'center', '&:hover': { color: C.text } }}>
                  <Icon sx={{ fontSize: '1.1rem' }} />
                </Box>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* ── HERO ── */}
      <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'start' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3.5}>
              <Typography sx={{ fontSize: '0.78rem', color: C.dim, letterSpacing: '0.04em' }}>
                Senior Software Engineer · Malaysia
              </Typography>
              <Typography sx={{
                fontWeight: 600,
                fontSize: { xs: '2.2rem', md: '3rem' },
                lineHeight: 1.1, letterSpacing: '-0.03em', color: C.text,
              }}>
                Senior software engineer.{' '}
                <Box component="span" sx={{ color: C.indigoText }}>
                  Scalable systems &amp; agentic AI.
                </Box>
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: C.sub, lineHeight: 1.85, maxWidth: '52ch' }}>
                12+ years building production systems at scale. Currently at{' '}
                <Hi>SEEK</Hi> — one of APAC&apos;s largest job platforms — working
                across a modern stack: <Hi>TypeScript-first microservices</Hi>,
                event-driven architecture, and <Hi>cloud-native AWS</Hi> infrastructure. Recent
                focus: <Hi>agentic AI workflows</Hi> (LangGraph, RAG, MCP) applied
                to real business problems.
              </Typography>
              <Stack direction="row" spacing={2.5}>
                {([
                  [profile.linkedin, LinkedInIcon, 'LinkedIn'],
                  [profile.github,   GitHubIcon,   'GitHub'],
                ] as [string, React.ElementType, string][]).map(([href, Icon, lbl]) => (
                  <Box key={lbl} component="a" href={href} target="_blank" rel="noreferrer" sx={{
                    fontSize: '0.82rem', color: C.sub, textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: 0.75,
                    '&:hover': { color: C.text },
                  }}>
                    <Icon sx={{ fontSize: '1rem' }} />{lbl}
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <MetricsStrip />
          </Grid>
        </Grid>
      </Container>

      {/* ── ABOUT ── */}
      <Box component="section" id="about" sx={sectionSx}>
        <Container maxWidth="lg">
          <Box ref={about.ref} sx={fadeUpSx(about.visible)}>
            <Grid container spacing={{ xs: 4, md: 8 }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <SectionLabel num="01" label="ABOUT" />
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: { xs: '1.25rem', md: '1.6rem' },
                  color: C.text, lineHeight: 1.5, mt: 2.5, mb: 3,
                }}>
                  A <Box component="span" sx={{ color: C.indigoText, fontWeight: 600 }}>full-stack engineer</Box>{' '}
                  with a product mindset and a soft spot for agentic AI.
                </Typography>
                <Stack spacing={2}>
                  <Typography sx={{ fontSize: '0.84rem', color: C.sub, lineHeight: 1.9 }}>
                    I care most about systems that remain dependable under pressure. My work spans
                    cloud-native architectures, production observability, and practical AI workflows
                    that remove manual overhead for real teams.
                  </Typography>
                  <Typography sx={{ fontSize: '0.84rem', color: C.sub, lineHeight: 1.9 }}>
                    Most energised when a problem needs both <Hi>technical depth</Hi> and{' '}
                    <Hi>architectural thinking</Hi> — and I think AI tooling is a genuine multiplier
                    for high-quality engineering output, not a shortcut around it.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack spacing={3.5}>
                  <Box>
                    <Typography sx={{ fontSize: '0.6rem', color: C.dim, letterSpacing: '0.12em', mb: 1.5, fontFamily: MONO }}>
                      CERTIFICATIONS
                    </Typography>
                    <Stack spacing={0}>
                      {profile.certifications.map((c) => (
                        <Stack key={c.name} direction="row"
                          sx={{ justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: `1px solid ${C.borderFaint}` }}>
                          <Typography sx={{ fontSize: '0.78rem', color: C.text, flex: 1, pr: 2 }}>{c.name}</Typography>
                          <Tag label="cert" />
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.6rem', color: C.dim, letterSpacing: '0.12em', mb: 1.5, fontFamily: MONO }}>
                      EXPLORING NOW
                    </Typography>
                    <Stack spacing={0}>
                      {profile.exploring.map((item) => (
                        <Stack key={item.title} direction="row"
                          sx={{ justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: `1px solid ${C.borderFaint}` }}>
                          <Typography sx={{ fontSize: '0.78rem', color: C.text, flex: 1, pr: 2 }}>{item.title}</Typography>
                          <Tag label="now" />
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.6rem', color: C.dim, letterSpacing: '0.12em', mb: 1.5, fontFamily: MONO }}>
                      LANGUAGES
                    </Typography>
                    <Stack spacing={0.8}>
                      {profile.languages.map((lang) => (
                        <Stack key={lang.name} direction="row" sx={{ justifyContent: 'space-between' }}>
                          <Typography sx={{ fontSize: '0.78rem', color: C.text }}>{lang.name}</Typography>
                          <Typography sx={{ fontSize: '0.72rem', color: C.dim }}>{lang.level}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* ── SELECTED WORK ── */}
      <Box component="section" id="work" sx={sectionSx}>
        <Container maxWidth="lg">
          <Box ref={work.ref} sx={fadeUpSx(work.visible)}>
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
              <Box>
                <SectionLabel num="02" label="SELECTED WORK" />
                <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, color: C.text, mt: 1 }}>
                  Production projects
                </Typography>
              </Box>
            </Stack>
            <Grid container spacing={1.5}>
              {profile.projects.map((project) => {
                const meta = PROJECT_META[project.name] ?? []
                const org  = PROJECT_ORG[project.name]
                return (
                  <Grid key={project.name} size={{ xs: 12, md: 6 }}>
                    <Box sx={{
                      height: '100%', display: 'flex', flexDirection: 'column',
                      border: `1px solid ${C.border}`, borderRadius: '8px',
                      bgcolor: C.card, p: 2.5, gap: 2,
                      transition: 'border-color 0.15s, background 0.15s, transform 0.15s',
                      '&:hover': {
                        borderColor: 'rgba(124,140,255,0.3)',
                        bgcolor: C.cardHover,
                        transform: 'translateY(-2px)',
                      },
                    }}>
                      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center', flexWrap: 'wrap', gap: 0.75, flex: 1, mr: 1 }}>
                          <Typography sx={{ fontSize: '0.88rem', fontWeight: 600, color: C.text }}>{project.name}</Typography>
                          {org && <OrgBadge>{org}</OrgBadge>}
                        </Stack>
                      </Stack>
                      <Typography sx={{ fontSize: '0.8rem', color: C.sub, lineHeight: 1.8, flex: 1 }}>
                        {project.description}
                      </Typography>
                      <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.6 }}>
                        {project.techStack.map((t) => <Tag key={t} label={t} />)}
                      </Stack>
                      {meta.length > 0 && (
                        <Box sx={{ borderTop: `1px solid ${C.borderFaint}`, pt: 2 }}>
                          <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', gap: 2 }}>
                            {meta.map((m) => (
                              <Box key={m.label}>
                                <Typography sx={{ fontSize: '0.58rem', color: C.dimmer, letterSpacing: '0.1em', mb: 0.4, fontFamily: MONO }}>
                                  {m.label}
                                </Typography>
                                <Typography sx={{ fontSize: '0.82rem', color: C.text, fontWeight: 600 }}>
                                  {m.value}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* ── EXPERIENCE ── */}
      <Box component="section" id="experience" sx={sectionSx}>
        <Container maxWidth="lg">
          <Box ref={experience.ref} sx={fadeUpSx(experience.visible)}>
            <SectionLabel num="03" label="EXPERIENCE" />
            <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, color: C.text, mt: 1, mb: 4 }}>
              Work history
            </Typography>
            <Stack spacing={0}>
              {profile.workExperience.map((job) => (
                <Box key={`${job.role}-${job.company}`} sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '220px 1fr' },
                  gap: { xs: 1.5, md: 5 },
                  py: 3.5,
                  borderTop: `1px solid ${C.borderFaint}`,
                  '&:last-child': { borderBottom: `1px solid ${C.borderFaint}` },
                }}>
                  <Box>
                    <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: C.text, mb: 0.4 }}>{job.company}</Typography>
                    <Typography sx={{ fontSize: '0.72rem', color: C.dim, mb: 0.3 }}>{job.period}</Typography>
                    <Typography sx={{ fontSize: '0.67rem', color: C.dimmer, fontFamily: MONO }}>
                      {job.duration}{job.location ? ` · ${job.location}` : ''}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.88rem', fontWeight: 600, color: C.indigoText, mb: 1.5 }}>{job.role}</Typography>
                    <Stack spacing={0.6} component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
                      {job.bullets.map((b) => (
                        <Stack key={b} direction="row" spacing={1.5} component="li" sx={{ alignItems: 'flex-start' }}>
                          <Box sx={{ color: C.dimmer, fontSize: '0.75rem', pt: '4px', flexShrink: 0 }}>—</Box>
                          <Typography sx={{ fontSize: '0.8rem', color: C.sub, lineHeight: 1.8 }}>{b}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                    {job.stack && (
                      <Typography sx={{ fontSize: '0.7rem', color: C.dimmer, mt: 1.5, fontFamily: MONO }}>
                        stack: {job.stack}
                      </Typography>
                    )}
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ── STACK ── */}
      <Box component="section" id="stack" sx={sectionSx}>
        <Container maxWidth="lg">
          <Box ref={stack.ref} sx={fadeUpSx(stack.visible)}>
            <SectionLabel num="04" label="STACK" />
            <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, color: C.text, mt: 1, mb: 4 }}>
              Technologies &amp; tools
            </Typography>
            <Grid container spacing={1.5}>
              {profile.skillCategories.map((cat) => (
                <Grid key={cat.name} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box sx={{
                    border: `1px solid ${C.border}`, borderRadius: '8px',
                    bgcolor: C.card, p: 2.5, height: '100%',
                  }}>
                    <Typography sx={{
                      fontSize: '0.6rem', color: C.indigo,
                      letterSpacing: '0.12em', mb: 1.5, fontFamily: MONO,
                    }}>
                      {cat.name.toUpperCase()}
                    </Typography>
                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.6 }}>
                      {cat.items.map((item) => <Tag key={item} label={item} />)}
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* ── EDUCATION ── */}
      <Box component="section" id="education" sx={sectionSx}>
        <Container maxWidth="lg">
          <Box ref={education.ref} sx={fadeUpSx(education.visible)}>
            <SectionLabel num="05" label="EDUCATION" />
            <Box sx={{ mt: 3 }}>
              {profile.education.map((edu) => (
                <Box key={edu.degree} sx={{
                  py: 2.5,
                  borderTop: `1px solid ${C.borderFaint}`,
                  '&:last-child': { borderBottom: `1px solid ${C.borderFaint}` },
                }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' } }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.88rem', fontWeight: 600, color: C.text }}>{edu.degree}</Typography>
                      <Typography sx={{ fontSize: '0.78rem', color: C.sub, mt: 0.3 }}>{edu.institution}</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '0.72rem', color: C.dimmer, mt: { xs: 0.5, sm: 0 }, fontFamily: MONO }}>
                      {edu.period}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── FOOTER ── */}
      <Box component="footer" sx={{ borderTop: `1px solid ${C.border}`, py: 3, mt: 8 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}
            sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' } }}>
            <Typography sx={{ fontSize: '0.72rem', color: C.dimmer }}>
              © {year} Hong Ket Lo
            </Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
              {([
                [profile.linkedin, LinkedInIcon, 'LinkedIn'],
                [profile.github,   GitHubIcon,   'GitHub'],
              ] as [string, React.ElementType, string][]).map(([href, Icon, lbl]) => (
                <Box key={lbl} component="a" href={href} target="_blank" rel="noreferrer" sx={{
                  fontSize: '0.72rem', color: C.dimmer, textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: 0.5,
                  '&:hover': { color: C.text },
                }}>
                  <Icon sx={{ fontSize: '0.85rem' }} />{lbl}
                </Box>
              ))}
              <Typography sx={{ fontSize: '0.72rem', color: C.dimmer }}>
                built with Next.js
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

    </Box>
  )
}
