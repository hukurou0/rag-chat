import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { postData } from '../../utils/fetch'

export default function Text () {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onClick = () => {
    const url = 'http://localhost:5000/'; // POSTリクエストを送信するURL
    const data = { // 送信するデータ
      title: title,
      content: content,
    };


    postData(url, data)
      .then(response => response.json()) // JSON形式のレスポンスをパース
      .then(data => console.log(data)) // レスポンスデータをコンソールに表示
      .catch(error => console.error('There was an error!', error));
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
