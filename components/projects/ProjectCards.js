import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { styled } from '@mui/system'
import { Paper, Tab, Tabs, Typography } from '@mui/material'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'
import Aos from 'aos'
import 'aos/dist/aos.css'

const CardItem = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  bottom: '-40px',
  left: '30px',
  width: '290px',
  height: '85px',
  textAlign: 'left',
  px: 0.5,
}))

export default function ProjectCards({ projects }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const handleChange = (newValue) => {
    setValue(newValue)
  }
  return (
    <Tabs
      TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
      sx={{ ml: { md: 0, lg: 4, xl: 17 }, mb: 15 }}
      value={value}
      onChange={handleChange}
      variant='scrollable'
      scrollButtons='auto'
      aria-label='projects'
      data-aos='fade-right'
    >
      {projects.map((project) => (
        <Tab
          key={project.id}
          disabled
          icon={
            <>
              <Image
                src={`/images/projects/${project.image}`}
                width={350}
                height={450}
                alt={project.title}
              />
              <CardItem>
                <Typography
                  variant='body1'
                  sx={{
                    textTransform: 'capitalize',
                    fontWeight: '700',
                    ml: 1,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    textTransform: 'capitalize',
                    alignItems: 'top',
                    display: 'flex',
                  }}
                >
                  <RoomOutlinedIcon />
                  {project.address}
                </Typography>
              </CardItem>
            </>
          }
        />
      ))}
    </Tabs>
  )
}
