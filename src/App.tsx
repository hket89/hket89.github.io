import { profile } from './content/profile';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CloudIcon from '@mui/icons-material/Cloud';
import BoltIcon from '@mui/icons-material/Bolt';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography
} from '@mui/material';

function App() {
  const year = new Date().getFullYear();
  const topSkills = profile.skillCategories.flatMap((category) => category.items).slice(0, 8);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pb: 6,
        '&::before': {
          content: '""',
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(148, 163, 184, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.09) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
          maskImage: 'radial-gradient(circle at 20% 10%, black 45%, transparent 85%)',
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(600px circle at 8% 5%, rgba(34, 211, 238, 0.24), transparent 65%), radial-gradient(900px circle at 88% 8%, rgba(56, 189, 248, 0.2), transparent 58%), radial-gradient(900px circle at 55% 92%, rgba(14, 116, 144, 0.22), transparent 64%)',
          zIndex: 0
        }
      }}
    >
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 8,
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid',
          borderColor: alpha('#7dd3fc', 0.22),
          backgroundColor: alpha('#020617', 0.82)
        }}
      >
        <Container maxWidth="lg" sx={{ py: 1.4 }}>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
            <Stack direction="row" spacing={1.25} alignItems="center">
              <Avatar
                sx={{
                  width: 38,
                  height: 38,
                  bgcolor: alpha('#0ea5e9', 0.2),
                  color: '#7dd3fc',
                  border: '1px solid',
                  borderColor: alpha('#7dd3fc', 0.4),
                  fontSize: '0.88rem',
                  fontWeight: 700
                }}
              >
                HK
              </Avatar>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.15 }}>
                  {profile.name}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: 1.1 }}>
                  ENGINEER // ARCHITECT // BUILDER
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
                <Button
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  size="small"
                  variant="text"
                  sx={{
                    minWidth: 'auto',
                    px: 1.4,
                    py: 0.7,
                    color: 'text.secondary',
                    fontFamily: '"IBM Plex Mono", monospace',
                    borderRadius: 999,
                    border: '1px solid transparent',
                    '&:hover': {
                      color: 'text.primary',
                      borderColor: alpha('#7dd3fc', 0.45),
                      backgroundColor: alpha('#0ea5e9', 0.12)
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box component="main" sx={{ position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 7, md: 9 } }}>
          <Grid container spacing={3.5} alignItems="stretch">
            <Grid size={{ xs: 12 }}>
              <Card
                variant="outlined"
                sx={{
                  background: `linear-gradient(130deg, ${alpha('#0c4a6e', 0.25)} 0%, ${alpha('#020617', 0.9)} 60%)`,
                  borderColor: alpha('#7dd3fc', 0.35)
                }}
              >
                <CardContent sx={{ p: { xs: 2.75, md: 4 } }}>
                  <Stack spacing={2.2}>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                      <Chip
                        icon={<BoltIcon />}
                        label={`${profile.title} | ${profile.yearsOfExperience}`}
                        variant="outlined"
                        sx={{ borderColor: alpha('#7dd3fc', 0.4) }}
                      />
                      <Chip
                        icon={<PlaceIcon />}
                        label={profile.location}
                        variant="outlined"
                        sx={{ borderColor: alpha('#7dd3fc', 0.4) }}
                      />
                    </Stack>

                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        maxWidth: '16ch'
                      }}
                    >
                      Biography
                    </Typography>

                    <Stack spacing={1.15}>
                      {profile.summary.map((line) => (
                        <Typography key={line} variant="body1" color="text.secondary" sx={{ maxWidth: '68ch' }}>
                          {line}
                        </Typography>
                      ))}
                    </Stack>

                    <Stack direction="row" spacing={1.2} sx={{ flexWrap: 'wrap' }}>
                      <Button
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View GitHub
                      </Button>
                      <Button
                        variant="outlined"
                        href="#projects"
                        startIcon={<PsychologyIcon />}
                        sx={{ borderColor: alpha('#7dd3fc', 0.5) }}
                      >
                        Explore Projects
                      </Button>
                      <Button variant="text" href="#skills" startIcon={<CloudIcon />}>
                        Tech Surface
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>

        <Container component="section" id="about" maxWidth="lg" sx={{ pt: { xs: 6, md: 7 } }}>
          <Card
            variant="outlined"
            sx={{
              borderColor: alpha('#7dd3fc', 0.25),
              backgroundColor: alpha('#020617', 0.78)
            }}
          >
            <CardContent sx={{ p: { xs: 2.75, md: 3.25 } }}>
              <Typography variant="overline" sx={{ color: 'primary.main' }}>
                About
              </Typography>
              <Typography variant="h4" sx={{ mt: 0.9, mb: 1.25 }}>
                High-impact engineering, from migration programs to AI-enabled operations.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '92ch' }}>
                I care most about systems that remain dependable under pressure. My work spans cloud-native
                architectures, production observability, and practical AI workflows that remove manual overhead for
                real teams.
              </Typography>
            </CardContent>
          </Card>
        </Container>

        <Container component="section" id="skills" maxWidth="lg" sx={{ pt: { xs: 6, md: 7 } }}>
          <Stack spacing={2.5}>
            <Stack direction="row" justifyContent="space-between" alignItems="end" sx={{ gap: 2, flexWrap: 'wrap' }}>
              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main' }}>
                  Skills
                </Typography>
                <Typography variant="h3">Technical breadth with implementation depth</Typography>
              </Box>
              <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                {topSkills.map((skill) => (
                  <Chip key={skill} label={skill} size="small" variant="outlined" />
                ))}
              </Stack>
            </Stack>

            <Grid container spacing={1.7}>
              {profile.skillCategories.map((category) => (
                <Grid key={category.name} size={{ xs: 12, md: 6 }}>
                  <Card variant="outlined" sx={{ borderColor: alpha('#7dd3fc', 0.24), height: '100%' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ mb: 1.2 }}>
                        {category.name}
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                        {category.items.map((item) => (
                          <Chip key={item} label={item} size="small" sx={{ mb: 1 }} />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>

        <Container component="section" id="experience" maxWidth="lg" sx={{ pt: { xs: 6, md: 7 } }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            Experience
          </Typography>
          <Typography variant="h3" sx={{ mb: 2.4 }}>
            Key Highlights
          </Typography>
          <Stack spacing={1.35}>
            {profile.highlights.map((highlight, index) => (
              <Card
                key={highlight.title}
                variant="outlined"
                sx={{
                  borderColor: alpha('#7dd3fc', 0.2),
                  backgroundColor: alpha('#020617', 0.74)
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1.3} alignItems="start">
                    <Chip
                      label={`${index + 1}`.padStart(2, '0')}
                      sx={{
                        mt: 0.25,
                        fontFamily: '"IBM Plex Mono", monospace',
                        borderRadius: 1,
                        minWidth: 45,
                        backgroundColor: alpha('#0ea5e9', 0.16),
                        border: '1px solid',
                        borderColor: alpha('#7dd3fc', 0.4)
                      }}
                    />
                    <Box>
                      <Typography variant="h6">{highlight.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.4 }}>
                        {highlight.description}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Container>

        <Container component="section" id="projects" maxWidth="lg" sx={{ pt: { xs: 6, md: 7 } }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            Projects
          </Typography>
          <Typography variant="h3" sx={{ mb: 2.4 }}>
            Selected Production Work
          </Typography>
          <Grid container spacing={2}>
            {profile.projects.map((project) => (
              <Grid key={project.name} size={{ xs: 12 }}>
                <Card
                  variant="outlined"
                  sx={{
                    borderColor: alpha('#7dd3fc', 0.25),
                    background: `linear-gradient(125deg, ${alpha('#0c4a6e', 0.12)} 0%, ${alpha('#020617', 0.82)} 48%)`
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {project.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 0.95 }}>
                      {project.description}
                    </Typography>

                    <Stack component="ul" spacing={0.7} sx={{ mt: 1.6, pl: 2.2 }}>
                      {project.bullets.map((bullet) => (
                        <Typography component="li" key={bullet} variant="body2" color="text.secondary">
                          {bullet}
                        </Typography>
                      ))}
                    </Stack>

                    <Divider sx={{ my: 1.8, borderColor: alpha('#7dd3fc', 0.2) }} />
                    <Stack direction="row" spacing={0.85} sx={{ flexWrap: 'wrap' }}>
                      {project.techStack.map((tech) => (
                        <Chip key={tech} label={tech} size="small" variant="outlined" sx={{ mb: 0.9 }} />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      </Box>

      <Box component="footer" sx={{ position: 'relative', zIndex: 1, pt: 5, pb: 2.5 }}>
        <Container maxWidth="lg">
          <Divider sx={{ borderColor: alpha('#7dd3fc', 0.2), mb: 1.5 }} />
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={0.5}
            sx={{ justifyContent: 'space-between', color: 'text.secondary' }}
          >
            <Typography variant="caption">(c) {year} {profile.name}</Typography>
            <Typography variant="caption">Built with React, Vite, and MUI</Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
