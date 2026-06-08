'use client'

import React, { useState, useEffect } from 'react';
import { profile } from '../content/profile';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

// ── Color tokens ──────────────────────────────────────────────
const C = {
  bg: '#0d0f12',
  card: '#111318',
  cardHover: '#13161b',
  titleBar: '#161b22',
  border: 'rgba(255,255,255,0.1)',
  borderFaint: 'rgba(255,255,255,0.06)',
  dash: 'rgba(255,255,255,0.14)',
  amber: '#f5b944',
  amberDim: 'rgba(245,185,68,0.13)',
  green: '#4ade80',
  text: '#c9d1d9',
  dim: '#7d8590',
  dimmer: '#484f58',
  white: '#e6edf3',
} as const;

// ── Primitives ────────────────────────────────────────────────

const Hi = ({ children }: { children: React.ReactNode }) => (
  <Box component="span" sx={{ color: C.amber, fontWeight: 700 }}>{children}</Box>
);

const Code = ({ children }: { children: React.ReactNode }) => (
  <Box component="span" sx={{
    px: '5px', py: '1px',
    bgcolor: C.amberDim,
    border: '1px solid rgba(245,185,68,0.3)',
    borderRadius: '3px',
    fontSize: '0.9em',
    color: C.amber,
  }}>{children}</Box>
);

const Dot = ({ color = C.green, size = 8 }: { color?: string; size?: number }) => (
  <Box component="span" sx={{
    display: 'inline-block', width: size, height: size,
    borderRadius: '50%', bgcolor: color, flexShrink: 0,
  }} />
);

const Tag = ({ label }: { label: string }) => (
  <Box sx={{
    display: 'inline-block', px: '8px', py: '2px',
    border: `1px solid ${C.border}`, borderRadius: '3px',
    fontSize: '0.7rem', color: C.dim, lineHeight: 1.6, whiteSpace: 'nowrap',
  }}>{label}</Box>
);

const OrgBadge = ({ children }: { children: React.ReactNode }) => (
  <Box component="span" sx={{
    px: '6px', py: '1px',
    border: `1px solid ${C.dash}`, borderRadius: '3px',
    fontSize: '0.62rem', color: C.dim,
    letterSpacing: '0.08em', textTransform: 'uppercase',
  }}>{children}</Box>
);

const SectionLabel = ({ num, label }: { num: string; label: string }) => (
  <Stack direction="row" spacing={1.5} alignItems="center">
    <Typography sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: C.amber }}>{num}</Typography>
    <Box sx={{ width: 3, height: 3, borderRadius: '50%', bgcolor: C.dimmer }} />
    <Typography sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: C.dim, letterSpacing: '0.12em' }}>{label}</Typography>
  </Stack>
);

const ProgressRow = ({ label, pct, color = C.amber }: { label: string; pct: number; color?: string }) => (
  <Stack direction="row" spacing={1.5} alignItems="center">
    <Typography sx={{ fontFamily: 'inherit', fontSize: '0.69rem', color: C.dim, width: 130, flexShrink: 0 }}>{label}</Typography>
    <Box sx={{ flex: 1, height: '3px', bgcolor: C.borderFaint, borderRadius: '2px' }}>
      <Box sx={{ width: `${pct}%`, height: '100%', bgcolor: color, borderRadius: '2px' }} />
    </Box>
    <Typography sx={{ fontFamily: 'inherit', fontSize: '0.67rem', color: C.dim, width: 32, textAlign: 'right', flexShrink: 0 }}>{pct}%</Typography>
  </Stack>
);

// ── Sysinfo terminal panel ────────────────────────────────────
const SysinfoPanel = () => (
  <Box sx={{ border: `1px solid ${C.border}`, borderRadius: '6px', overflow: 'hidden' }}>
    <Box sx={{
      display: 'flex', alignItems: 'center', gap: 1,
      px: 2, py: 1.2, bgcolor: C.titleBar, borderBottom: `1px solid ${C.border}`,
    }}>
      <Stack direction="row" spacing={0.6}>
        {['#f87171', '#fbbf24', '#4ade80'].map((c) => (
          <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
        ))}
      </Stack>
      <Typography sx={{ fontFamily: 'inherit', fontSize: '0.69rem', color: C.dim, ml: 'auto' }}>
        ~/hket89 — sysinfo
      </Typography>
    </Box>
    <Box sx={{ p: 2.5, bgcolor: C.card }}>
      <Stack spacing={0.65} sx={{ mb: 2.5 }}>
        {([
          ['user',   'hket89'],
          ['role',   'Senior Software Engineer'],
          ['focus',  'scalable systems · cloud-native · agentic AI'],
          ['yoe',    '12 years'],
['tools',  'Claude Code · Cursor'],
        ] as [string, string][]).map(([key, val]) => (
          <Stack direction="row" key={key}>
            <Typography sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: C.dim, width: 72, flexShrink: 0 }}>{key}</Typography>
            <Typography sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: key === 'role' ? C.amber : C.text }}>{val}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  </Box>
);

// ── Project metadata ──────────────────────────────────────────
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
};

const PROJECT_STATUS: Record<string, { label: string; color: string }> = {
  'AI-Powered Sales Order Automation Bot':          { label: 'active',   color: C.green },
  'RAG-Powered WhatsApp Purchase Order Bot':        { label: 'active',   color: C.green },
  'Serverless Social Media Ad Management Platform': { label: 'active',   color: C.green },
  '60M+ User Profile Migration':                    { label: 'active',   color: C.amber },
  'Zero-Downtime Maintenance Page System':          { label: 'active',   color: C.green },
};

const PROJECT_ORG: Record<string, string> = {
  '60M+ User Profile Migration':         'SEEK',
  'Zero-Downtime Maintenance Page System': 'SEEK',
};

// ── Section wrapper ───────────────────────────────────────────
const sectionSx = {
  pt: { xs: 7, md: 11 },
  pb: { xs: 5, md: 7 },
  borderTop: `1px solid rgba(255,255,255,0.1)`,
};

// ── App ───────────────────────────────────────────────────────
export default function App() {
  const year = new Date().getFullYear();
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen((v) => !v);
      }
      if (e.key === 'Escape') setCmdOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <Box sx={{ bgcolor: C.bg, minHeight: '100vh', color: C.text }}>

      {/* ── HEADER ── */}
      <Box component="header" sx={{
        position: 'sticky', top: 0, zIndex: 100,
        bgcolor: 'rgba(13,15,18,0.9)', backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${C.border}`,
      }}>
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 1.5 }}>
            {/* Brand */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Dot color={C.green} size={7} />
              <Typography sx={{ fontFamily: 'inherit', fontSize: '0.82rem', color: C.white, fontWeight: 600 }}>
                hket89::portfolio
              </Typography>
            </Stack>

            {/* Nav */}
            <Stack direction="row" spacing={2.5} sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {([['#about','about'],['#projects','featured'],['#experience','experience'],['#stack','stack']] as [string,string][]).map(([href, lbl]) => (
                <Box key={lbl} component="a" href={href} sx={{
                  fontFamily: 'inherit', fontSize: '0.78rem', color: C.dim,
                  textDecoration: 'none', '&:hover': { color: C.text },
                }}>#{lbl}</Box>
              ))}
            </Stack>

            {/* Jump to */}
            <Box component="button" onClick={() => setCmdOpen(true)} sx={{
              fontFamily: 'inherit', fontSize: '0.72rem', color: C.dim,
              bgcolor: 'transparent', border: `1px solid ${C.border}`, borderRadius: '5px',
              px: 1.5, py: 0.6, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 1,
              '&:hover': { color: C.text, borderColor: C.dim },
            }}>
              jump to…
              <Box sx={{ px: '4px', py: '1px', bgcolor: C.borderFaint, borderRadius: '3px', fontSize: '0.62rem' }}>⌘K</Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* ── HERO ── */}
      <Container maxWidth="lg" sx={{ pt: { xs: 7, md: 10 }, pb: { xs: 6, md: 9 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="start">

          {/* Left */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3.5}>
              <Typography sx={{ fontFamily: 'inherit', fontSize: '0.78rem', color: C.dim }}>
                <Box component="span" sx={{ color: C.amber }}>hket89@home</Box>
                {' : ~/portfolio $ cat README.md'}
              </Typography>

              <Box>
                <Typography sx={{
                  fontFamily: 'inherit', fontWeight: 400,
                  fontSize: { xs: '2.1rem', md: '2.9rem' },
                  color: C.white, lineHeight: 1.1, letterSpacing: '-0.025em',
                }}>
                  Hong Ket Lo.
                </Typography>
                <Typography sx={{
                  fontFamily: 'inherit', fontWeight: 700,
                  fontSize: { xs: '1.7rem', md: '2.3rem' },
                  color: C.amber, lineHeight: 1.15, letterSpacing: '-0.02em',
                }}>
                  senior software engineer
                </Typography>
              </Box>

              <Typography sx={{ fontFamily: 'inherit', fontSize: '0.88rem', color: C.text, lineHeight: 1.9, maxWidth: '54ch' }}>
                12+ years building <Hi>scalable systems, cloud-native microservices,
                and AI-powered pipelines</Hi>. Currently at <Hi>SEEK</Hi> — one of APAC's
                largest job platforms — leading the migration of{' '}
                <Hi>60M+ user profiles</Hi> into a unified identity system.
                {' '}Recent focus: <Code>agentic AI workflows</Code> (<Code>LangGraph</Code>,{' '}
                <Code>RAG</Code>, <Code>MCP</Code>) applied to real business problems beyond the demo.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }}>
                <Box>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.6rem', color: C.dim, letterSpacing: '0.12em', mb: 0.5 }}>LOCATION</Typography>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.78rem', color: C.text }}>Malaysia · UTC+8</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.6rem', color: C.dim, letterSpacing: '0.12em', mb: 0.5 }}>STATUS</Typography>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.78rem', color: C.text }}>Senior Software Engineer</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.6rem', color: C.dim, letterSpacing: '0.12em', mb: 0.5 }}>LINKS</Typography>
                  <Stack direction="row" spacing={2}>
                    {([
                      [profile.github,   GitHubIcon,   'GitHub'],
                      [profile.linkedin, LinkedInIcon, 'LinkedIn'],
                    ] as [string, React.ElementType, string][]).map(([href, Icon, lbl]) => (
                      <Box key={lbl} component="a" href={href} target="_blank" rel="noreferrer" sx={{
                        fontFamily: 'inherit', fontSize: '0.78rem', color: C.text,
                        textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 0.5,
                        '&:hover': { color: C.amber },
                      }}>
                        <Icon sx={{ fontSize: '0.9rem' }} />{lbl}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          {/* Right — sysinfo */}
          <Grid size={{ xs: 12, md: 5 }}>
            <SysinfoPanel />
          </Grid>
        </Grid>
      </Container>

      {/* ── ABOUT ── */}
      <Box component="section" id="about" sx={sectionSx}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionLabel num="01" label="ABOUT" />
              <Typography sx={{
                fontFamily: 'inherit', fontWeight: 400,
                fontSize: { xs: '1.25rem', md: '1.65rem' },
                color: C.white, lineHeight: 1.55, mt: 2.5, mb: 3,
              }}>
                A <Box component="span" sx={{ color: C.amber, fontWeight: 700 }}>full-stack engineer</Box>{' '}
                with a product mindset and a soft spot for agentic AI.
              </Typography>
              <Stack spacing={2}>
                <Typography sx={{ fontFamily: 'inherit', fontSize: '0.84rem', color: C.dim, lineHeight: 1.9 }}>
                  I care most about systems that remain dependable under pressure. My work spans
                  cloud-native architectures, production observability, and practical AI workflows
                  that remove manual overhead for real teams.
                </Typography>
                <Typography sx={{ fontFamily: 'inherit', fontSize: '0.84rem', color: C.dim, lineHeight: 1.9 }}>
                  Most energised when a problem needs both <Hi>technical depth</Hi> and{' '}
                  <Hi>architectural thinking</Hi> — and I think AI tooling is a genuine multiplier
                  for high-quality engineering output, not a shortcut around it.
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3.5}>
                {/* Certifications */}
                <Box>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.6rem', color: C.dim, letterSpacing: '0.12em', mb: 1.5 }}>CERTIFICATIONS</Typography>
                  <Stack spacing={0}>
                    {profile.certifications.map((c) => (
                      <Stack key={c.name} direction="row" justifyContent="space-between" alignItems="center"
                        sx={{ py: 1, borderBottom: `1px solid ${C.borderFaint}` }}>
                        <Typography sx={{ fontFamily: 'inherit', fontSize: '0.78rem', color: C.text, flex: 1, pr: 2 }}>{c.name}</Typography>
                        <Tag label="cert" />
                      </Stack>
                    ))}
                  </Stack>
                </Box>

                {/* Exploring */}
                <Box>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.6rem', color: C.dim, letterSpacing: '0.12em', mb: 1.5 }}>// EXPLORING NOW</Typography>
                  <Stack spacing={0}>
                    {profile.exploring.map((item) => (
                      <Stack key={item.title} direction="row" justifyContent="space-between" alignItems="center"
                        sx={{ py: 1, borderBottom: `1px solid ${C.borderFaint}` }}>
                        <Typography sx={{ fontFamily: 'inherit', fontSize: '0.78rem', color: C.text, flex: 1, pr: 2 }}>{item.title}</Typography>
                        <Tag label="now" />
                      </Stack>
                    ))}
                  </Stack>
                </Box>

                {/* Languages */}
                <Box>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.6rem', color: C.dim, letterSpacing: '0.12em', mb: 1.5 }}>LANGUAGES</Typography>
                  <Stack spacing={0.8}>
                    {profile.languages.map((lang) => (
                      <Stack key={lang.name} direction="row" justifyContent="space-between">
                        <Typography sx={{ fontFamily: 'inherit', fontSize: '0.78rem', color: C.text }}>{lang.name}</Typography>
                        <Typography sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: C.dim }}>{lang.level}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── PROJECTS ── */}
      <Box component="section" id="projects" sx={sectionSx}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 4 }}>
            <Box>
              <SectionLabel num="02" label="FEATURED PROJECTS" />
              <Typography sx={{ fontFamily: 'inherit', fontSize: { xs: '1.1rem', md: '1.35rem' }, color: C.white, mt: 1 }}>
                Selected production work
              </Typography>
            </Box>
          </Stack>
          <Grid container spacing={1.5}>
            {profile.projects.map((project) => {
              const meta   = PROJECT_META[project.name]   ?? [];
              const status = PROJECT_STATUS[project.name] ?? { label: 'active', color: C.green };
              const org    = PROJECT_ORG[project.name];
              return (
                <Grid key={project.name} size={{ xs: 12, md: 6 }}>
                  <Box sx={{
                    height: '100%', display: 'flex', flexDirection: 'column',
                    border: `1px solid ${C.border}`, borderRadius: '6px',
                    bgcolor: C.card, p: 2.5, gap: 2,
                    transition: 'border-color 0.15s, background 0.15s',
                    '&:hover': { borderColor: C.dim, bgcolor: C.cardHover },
                  }}>
                    {/* Header */}
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: 'wrap', gap: 0.75, flex: 1, mr: 1 }}>
                        <Typography sx={{ fontFamily: 'inherit', fontSize: '0.88rem', fontWeight: 700, color: C.white }}>{project.name}</Typography>
                        {org && <OrgBadge>{org}</OrgBadge>}
                      </Stack>
                      <Stack direction="row" spacing={0.75} alignItems="center" sx={{ flexShrink: 0 }}>
                        <Dot color={status.color} size={7} />
                        <Typography sx={{ fontFamily: 'inherit', fontSize: '0.68rem', color: C.dim }}>{status.label}</Typography>
                      </Stack>
                    </Stack>

                    {/* Description */}
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '0.8rem', color: C.dim, lineHeight: 1.8, flex: 1 }}>
                      {project.description}
                    </Typography>

                    {/* Tech tags */}
                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.6 }}>
                      {project.techStack.map((t) => <Tag key={t} label={t} />)}
                    </Stack>

                    {/* Metadata row */}
                    {meta.length > 0 && (
                      <Box sx={{ borderTop: `1px dashed ${C.dash}`, pt: 2 }}>
                        <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', gap: 2 }}>
                          {meta.map((m) => (
                            <Box key={m.label}>
                              <Typography sx={{ fontFamily: 'inherit', fontSize: '0.58rem', color: C.dimmer, letterSpacing: '0.1em', mb: 0.4 }}>{m.label}</Typography>
                              <Typography sx={{ fontFamily: 'inherit', fontSize: '0.82rem', color: C.text, fontWeight: 600 }}>{m.value}</Typography>
                            </Box>
                          ))}
                        </Stack>
                      </Box>
                    )}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ── EXPERIENCE ── */}
      <Box component="section" id="experience" sx={sectionSx}>
        <Container maxWidth="lg">
          <SectionLabel num="03" label="EXPERIENCE" />
          <Typography sx={{ fontFamily: 'inherit', fontSize: { xs: '1.1rem', md: '1.35rem' }, color: C.white, mt: 1, mb: 4 }}>Work history</Typography>
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
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.88rem', fontWeight: 700, color: C.white, mb: 0.4 }}>{job.company}</Typography>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: C.dim, mb: 0.3 }}>{job.period}</Typography>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.67rem', color: C.dimmer }}>
                    {job.duration}{job.location ? ` · ${job.location}` : ''}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.88rem', fontWeight: 600, color: C.amber, mb: 1.5 }}>{job.role}</Typography>
                  <Stack spacing={0.6} component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
                    {job.bullets.map((b) => (
                      <Stack key={b} direction="row" spacing={1.5} component="li" alignItems="flex-start">
                        <Box sx={{ color: C.dimmer, fontSize: '0.75rem', pt: '4px', flexShrink: 0 }}>—</Box>
                        <Typography sx={{ fontFamily: 'inherit', fontSize: '0.8rem', color: C.dim, lineHeight: 1.8 }}>{b}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  {job.stack && (
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '0.7rem', color: C.dimmer, mt: 1.5 }}>
                      stack: {job.stack}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ── STACK ── */}
      <Box component="section" id="stack" sx={sectionSx}>
        <Container maxWidth="lg">
          <SectionLabel num="04" label="STACK" />
          <Typography sx={{ fontFamily: 'inherit', fontSize: { xs: '1.1rem', md: '1.35rem' }, color: C.white, mt: 1, mb: 4 }}>Technologies &amp; tools</Typography>
          <Grid container spacing={1.5}>
            {profile.skillCategories.map((cat) => (
              <Grid key={cat.name} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ border: `1px solid ${C.border}`, borderRadius: '6px', bgcolor: C.card, p: 2.5, height: '100%' }}>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.6rem', color: C.amber, letterSpacing: '0.12em', mb: 1.5 }}>
                    {cat.name.toUpperCase()}
                  </Typography>
                  <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.6 }}>
                    {cat.items.map((item) => <Tag key={item} label={item} />)}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── EDUCATION ── */}
      <Box component="section" id="education" sx={sectionSx}>
        <Container maxWidth="lg">
          <SectionLabel num="05" label="EDUCATION" />
          <Box sx={{ mt: 3 }}>
            {profile.education.map((edu) => (
              <Box key={edu.degree} sx={{
                py: 2.5,
                borderTop: `1px solid ${C.borderFaint}`,
                '&:last-child': { borderBottom: `1px solid ${C.borderFaint}` },
              }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }}>
                  <Box>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '0.88rem', fontWeight: 700, color: C.white }}>{edu.degree}</Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '0.78rem', color: C.dim, mt: 0.3 }}>{edu.institution}</Typography>
                  </Box>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: C.dimmer, mt: { xs: 0.5, sm: 0 } }}>{edu.period}</Typography>
                </Stack>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── FOOTER ── */}
      <Box component="footer" sx={{ borderTop: `1px solid ${C.border}`, py: 3, mt: 8 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} spacing={1}>
            <Typography sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: C.dimmer }}>© {year} Hong Ket Lo</Typography>
            <Typography sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: C.dimmer }}>built with React · Next.js · MUI</Typography>
          </Stack>
        </Container>
      </Box>

      {/* ── COMMAND PALETTE ── */}
      {cmdOpen && (
        <Box onClick={() => setCmdOpen(false)} sx={{
          position: 'fixed', inset: 0, zIndex: 200,
          bgcolor: 'rgba(0,0,0,0.72)',
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
          pt: '14vh',
        }}>
          <Box onClick={(e) => e.stopPropagation()} sx={{
            width: { xs: '90vw', md: '500px' },
            border: `1px solid ${C.border}`, borderRadius: '8px',
            bgcolor: C.titleBar, overflow: 'hidden',
          }}>
            <Box sx={{ px: 2.5, py: 1.8, borderBottom: `1px solid ${C.border}` }}>
              <Typography sx={{ fontFamily: 'inherit', fontSize: '0.78rem', color: C.dim }}>jump to…</Typography>
            </Box>
            {([
              ['#about',      '01 · about'],
              ['#projects',   '02 · projects'],
              ['#experience', '03 · experience'],
              ['#stack',      '04 · stack'],
              ['#education',  '05 · education'],
            ] as [string, string][]).map(([href, lbl]) => (
              <Box key={href} component="a" href={href} onClick={() => setCmdOpen(false)} sx={{
                display: 'block', px: 2.5, py: 1.5,
                fontFamily: 'inherit', fontSize: '0.82rem', color: C.text,
                textDecoration: 'none', borderBottom: `1px solid ${C.borderFaint}`,
                '&:hover': { bgcolor: C.card, color: C.amber },
                '&:last-child': { borderBottom: 'none' },
              }}>{lbl}</Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
