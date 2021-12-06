import { useEffect } from 'react'
import Image from 'next/image'
import { Container, Grid, Typography } from '@mui/material'
import Fact from './Fact'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Container maxWidth='lg' id='about'>
      <Grid container alignItems='center' my={15} spacing={2}>
        <Grid item xs={12} sm={6} data-aos='fade-left'>
          <Image
            src={'/images/about.png'}
            width={445}
            height={500}
            alt='white building'
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos='fade-right'>
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
          >
            Award winning real estate company in Dubai
          </Typography>
          <Typography variant='body1' color='#BDBDBD' my={4}>
            Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
            scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis
            ornare magna.
          </Typography>
          <Grid container>
            <Fact text='PREVIOUS PROJECTS' value='34+' />
            <Fact text='YEARS EXPERIENCE' value='20y' />
            <Fact text='ONGOING PROJECTS' value='12' />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
