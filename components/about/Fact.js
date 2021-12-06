import { Grid, Typography } from '@mui/material'

export default function Fact({ text, value }) {
  return (
    <Grid item mr={2.5}>
      <Typography variant='body2' color='#BDBDBD'>
        {text}
      </Typography>
      <Typography
        variant='h3'
        color='textPrimary'
        sx={{
          fontSize: {
            xs: 'h4.fontSize',
            md: 'h3.fontSize',
          },
          fontWeight: '200',
        }}
      >
        {value}
      </Typography>
    </Grid>
  )
}
