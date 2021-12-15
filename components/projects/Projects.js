import { useEffect } from 'react'
import { Container, Typography } from '@mui/material'
import ProjectCards from './ProjectCards'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Projects({ projects }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <Container maxWidth='lg' id='projects'>
        <Typography
          variant='h3'
          color='textPrimary'
          sx={{
            fontSize: {
              xs: 'h4.fontSize',
              md: 'h3.fontSize',
            },
            fontWeight: '700',
          }}
          data-aos='zoom'
        >
          Ongoing Projects
        </Typography>
        <Typography
          variant='body1'
          color='#BDBDBD'
          mt={1}
          mb={4}
          data-aos='zoom'
        >
          Turpis facilisis tempor pulvinar in lobortis ornare magna.
        </Typography>
      </Container>

      <ProjectCards projects={projects} />
    </>
  )
}
