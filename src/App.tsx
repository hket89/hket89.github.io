import { profile } from './content/profile';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CloudIcon from '@mui/icons-material/Cloud';
import BoltIcon from '@mui/icons-material/Bolt';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Link,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';

function App() {
  const year = new Date().getFullYear();

  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(5, 8, 22, 0.88)',
          borderBottom: '1px solid',
          borderColor: 'rgba(148, 163, 184, 0.18)'
        }}
      >
        <Container maxWidth="md">
          <Toolbar disableGutters sx={{ py: 1, gap: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {profile.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {profile.title}
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
              <Button href="#about" color="inherit" size="small">
                About
              </Button>
              <Button href="#skills" color="inherit" size="small">
                Skills
              </Button>
              <Button href="#experience" color="inherit" size="small">
                Experience
              </Button>
              <Button href="#projects" color="inherit" size="small">
                Projects
              </Button>
              <Button href="#contact" color="inherit" size="small">
                Contact
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main">
        <Box
          component="section"
          id="about"
          sx={{
            pt: { xs: 6, sm: 8 },
            pb: 6,
            background:
              'radial-gradient(1000px circle at 10% -20%, rgba(37, 99, 235, 0.35), transparent 55%), radial-gradient(800px circle at 80% 0%, rgba(34, 197, 94, 0.25), transparent 50%)'
          }}
        >
          <Container maxWidth="md">
            <Stack spacing={2.5}>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                <Chip
                  icon={<BoltIcon />}
                  label={`${profile.title} · ${profile.yearsOfExperience}`}
                  variant="outlined"
                />
                <Chip icon={<PlaceIcon />} label={profile.location} variant="outlined" />
              </Stack>

              <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>
                Building scalable systems,{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  from AWS to LLMs
                </Box>
                .
              </Typography>

              <Stack spacing={1}>
                {profile.summary.map((line) => (
                  <Typography key={line} variant="body1" color="text.secondary">
                    {line}
                  </Typography>
                ))}
              </Stack>

              <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    background: 'linear-gradient(90deg, #2563eb, #22c55e)',
                    color: 'common.white'
                  }}
                >
                  View GitHub
                </Button>
                <Button
                  variant="outlined"
                  href="#projects"
                  startIcon={<PsychologyIcon />}
                >
                  Featured Work
                </Button>
                <Button variant="text" href="#skills" startIcon={<CloudIcon />}>
                  Tech Stack
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Box component="section" id="skills" sx={{ py: { xs: 5, sm: 7 } }}>
          <Container maxWidth="md">
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              Skills
            </Typography>

            <Stack spacing={2}>
              {profile.skillCategories.map((cat) => (
                <Card key={cat.name} variant="outlined">
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {cat.name}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                      {cat.items.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          size="small"
                          variant="outlined"
                          sx={{ mb: 1 }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Container>
        </Box>

        <Box
          component="section"
          id="experience"
          sx={{
            py: { xs: 5, sm: 7 },
            backgroundColor: 'rgba(15, 23, 42, 0.25)'
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              Key Experience Highlights
            </Typography>

            <Stack spacing={2}>
              {profile.highlights.map((h) => (
                <Card key={h.title} variant="outlined">
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {h.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
                      {h.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Container>
        </Box>

        <Box component="section" id="projects" sx={{ py: { xs: 5, sm: 7 } }}>
          <Container maxWidth="md">
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              Featured Projects
            </Typography>

            <Stack spacing={2}>
              {profile.projects.map((project) => (
                <Card key={project.name} variant="outlined">
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
                      {project.description}
                    </Typography>

                    <Stack component="ul" spacing={0.75} sx={{ mt: 1.5, pl: 2 }}>
                      {project.bullets.map((b) => (
                        <Typography component="li" key={b} variant="body2" color="text.secondary">
                          {b}
                        </Typography>
                      ))}
                    </Stack>

                    <Divider sx={{ my: 1.75 }} />

                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                      {project.techStack.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ mb: 1 }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Container>
        </Box>

        <Box
          component="section"
          id="contact"
          sx={{
            py: { xs: 5, sm: 7 },
            backgroundColor: 'rgba(15, 23, 42, 0.25)'
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
              Contact
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Box component="footer" sx={{ py: 3 }}>
        <Container maxWidth="md">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={0.5}
            sx={{ justifyContent: 'space-between', color: 'text.secondary' }}
          >
            <Typography variant="caption">© {year} {profile.name}</Typography>
            <Typography variant="caption">Built with React, Vite, and MUI</Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
