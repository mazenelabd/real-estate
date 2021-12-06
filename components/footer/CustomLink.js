import Link from 'next/link'
import { Link as MUILink } from '@mui/material'

export default function CustomLink({ href, text }) {
  return (
    <Link href={href}>
      <MUILink
        variant='body2'
        color='#BDBDBD'
        sx={{
          display: 'block',
          textDecoration: 'none',
          my: 1,
          cursor: 'pointer',
          '&:hover': {
            color: 'white',
          },
        }}
      >
        {text}
      </MUILink>
    </Link>
  )
}
