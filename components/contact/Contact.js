import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CustomButton from '../CustomButton'
import Input from './Input'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  description: '',
}
export default function Contact() {
  const [form, setForm] = useState(initialState)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    const hasEmptyFields = Object.values(form).some((element) => element === '')

    if (hasEmptyFields) {
      toast.error('Please fill in all fields')
    } else {
      const res = await toast.promise(
        fetch('/api/sendgrid', {
          body: JSON.stringify({
            email: form.email,
            firstName: form.firstName,
            lastName: form.lastName,
            phone: form.phone,
            message: form.description,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        }),
        {
          pending: 'Sending your message',
          success: 'Sent successfully',
          error: 'Something went wrong',
        }
      )
    }
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <Container maxWidth='lg' id='contact'>
      <ToastContainer />
      <Grid container alignItems='center' my={15} spacing={2}>
        <Grid item xs={12} sm={6} lg={5} data-aos='fade-left'>
          <Image
            src={'/images/contact.png'}
            width={445}
            height={500}
            alt='gray and white home'
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={5} data-aos='fade-right'>
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
            Contact US
          </Typography>
          <Typography variant='body1' color='#BDBDBD' mt={1} mb={3}>
            Turpis facilisis tempor pulvinar in lobortis ornare magna.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} mb={2}>
              <Input
                name='firstName'
                label='First Name'
                handleChange={handleChange}
                half
              />
              <Input
                name='lastName'
                label='Last Name'
                handleChange={handleChange}
                half
              />
              <Input
                name='email'
                label='Email Address'
                handleChange={handleChange}
                type='email'
                half
              />
              <Input
                name='phone'
                label='Phone Number'
                handleChange={handleChange}
                half
              />
              <Input
                name='description'
                label='Description'
                multiline
                handleChange={handleChange}
              />
            </Grid>
            <Box
              component='button'
              type='submit'
              sx={{ backgroundColor: 'transparent', border: 'none' }}
            >
              <CustomButton text='Get a quote' dark />
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}
