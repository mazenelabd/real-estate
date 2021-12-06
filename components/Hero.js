import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CustomButton from './CustomButton'

export default function Hero() {
  return (
    <Box sx={{ backgroundColor: '#AFD4E2' }} id='home'>
      <Grid container rowSpacing={2} justifyContent='right' alignItems='center'>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: 'center', md: 'left' }, zIndex: '2' }}
        >
          <Typography
            display='inline'
            variant='h1'
            color='textPrimary'
            sx={{
              fontWeight: { xs: '500', sm: '700', lg: '800' },
              fontSize: {
                xs: 'h3.fontSize',
                sm: 'h2.fontSize',
                lg: 'h1.fontSize',
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 0.4,
              }}
            >
              <span>A home is built with love and dreams</span>
            </motion.div>
          </Typography>
          <Box
            sx={{
              float: 'right',
              display: { xs: 'none', md: 'block' },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 0.4,
              }}
            >
              <Image src={'/images/arrow.png'} width={160} height={100} />
            </motion.div>
          </Box>
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 0.4,
            }}
          >
            <Typography variant='h6' color='textPrimary' mb={1.58}>
              Real estate firm that makes your dreams true
            </Typography>
            <Link href='#projects'>
              <a>
                <CustomButton text='Our Projects' dark />
              </a>
            </Link>
            <Link href='#contact'>
              <a>
                <CustomButton text='Contact US' />
              </a>
            </Link>
          </motion.div>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{ mt: { xs: -30, md: 0 } }}
          textAlign='right'
        >
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 0.4,
            }}
          >
            <Image
              src={'/images/house.png'}
              width={508}
              height={665}
              priority
              alt='white building'
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  )
}
