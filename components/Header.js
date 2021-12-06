import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'

const pages = ['home', 'about', 'projects', 'contact']

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position='static'
      elevation={0}
      sx={{ color: '#1E3240', backgroundColor: '#AFD4E2' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
        className='header'
      >
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography
              variant='h6'
              noWrap
              component='div'
              color='textPrimary'
              sx={{
                fontWeight: 'bold',
                flexGrow: 1,
              }}
            >
              LUGAR
            </Typography>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <div key={page}>
                  <Link href={`#${page}`}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, display: 'block', color: '#1E3240' }}
                    >
                      {page}
                    </Button>
                  </Link>
                </div>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </motion.div>
    </AppBar>
  )
}
