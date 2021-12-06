import { Grid, TextField } from '@mui/material'
import styles from '../../styles/Input.module.css'

export default function Input({
  name,
  handleChange,
  label,
  half,
  type,
  multiline,
}) {
  return (
    <Grid item className={styles.TextField} xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant='outlined'
        required
        fullWidth
        label={label}
        type={type}
        multiline={multiline}
        rows={multiline ? 4 : undefined}
      />
    </Grid>
  )
}
