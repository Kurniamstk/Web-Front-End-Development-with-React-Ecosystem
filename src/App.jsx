import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tita from './assets/Tita.jpg'
import Link from '@mui/material/Link';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';

function App() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickClose= () => {
    setOpen(false)
  }

  return (
    <>
    {open &&
     <Alert severity="success" sx={{marginBottom: '10px'}} onClose={() => {handleClickClose()}}>Tombol ini diklik.</Alert>}
    
    <Typography variant="h4" fontWeight={'bold'}>
      Kurnia Mustika Wati
    </Typography>
    <Typography variant="p" >
      Fak.Digital Economy Technology - KampusGratis.id
    </Typography>

    <Card sx={{ marginTop: '30px', marginBottom: '10px', padding :'10px'}}>
      <CardContent>
        <img src={Tita} width={200} height={300}/>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center',}}>
        <Stack direction="column" spacing={2}>
      <Divider />
        <Link
          variant="body2"
          href="https://kampusgratis.id/"
          target="_blank"
          rel="noopener"
          sx={{ textDecoration: 'none' }}
          >
          Link Kampus Gratis
        </Link>
        <Button variant="contained" size='small' onClick={handleClickOpen} >
         Klik Tombol Ini
        </Button>
            </Stack>
    </CardActions>
    </Card>
    </>
  )
}

export default App
