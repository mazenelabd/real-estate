import { useEffect } from 'react'
import Image from 'next/image'
import { Container, Grid, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Testimonial() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Container maxWidth='lg' my={15}>
      <Typography
        variant='h3'
        color='textPrimary'
        textAlign='center'
        sx={{
          fontSize: {
            xs: 'h4.fontSize',
            md: 'h3.fontSize',
          },
          fontWeight: '700',
        }}
        data-aos='zoom'
      >
        Few smiles and comment
      </Typography>
      <Typography
        variant='h6'
        color='textPrimary'
        my={2}
        textAlign='center'
        data-aos='zoom'
      >
        Turpis facilisis tempor pulvinar in lobortis ornare magna.
      </Typography>
      <Grid container alignItems='center' my={7} spacing={2}>
        <Grid item xs={12} sm={6} lg={5} data-aos='fade-left'>
          <Image
            src={'/images/testimonial.png'}
            width={445}
            height={350}
            alt='smiling girl'
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={5} data-aos='fade-right'>
          <Image src={'/images/quote.png'} width={49} height={27} />

          <Typography variant='h5' color='textPrimary' fontWeight='700'>
            Dream house isn’t dream anymore
          </Typography>
          <Typography
            variant='body1'
            color='textPrimary'
            fontWeight='200'
            my={2}
          >
            Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
            scelerisque. Ipsum, turpis facilisis tempor pulvinar.
          </Typography>
          <Typography variant='h6' color='textPrimary' fontWeight='500'>
            Brooklyn Simmons
          </Typography>
          <Typography variant='body2' color='textPrimary'>
            Artist
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
