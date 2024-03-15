import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Text () {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onClick = () => {
    console.log(title)
    console.log(content)
  }

  return (
    <div>
      <TextField
            id="outlined-multiline-flexible"
            label="タイトル"
            multiline
            fullWidth
            maxRows={4}
            margin="normal"
            onChange={(e) => setTitle(e.target.value)}
          />
      <TextField
            id="outlined-multiline-static"
            label="内容"
            multiline
            fullWidth
            rows={4}
            margin="normal"
            onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={onClick} variant="contained" color="primary">
        登録
      </Button>
    </div>
  )
}
