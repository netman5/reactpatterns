import React from 'react'
import EditableItem from './EditableItem'
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const Input = ({ initialValue, label }) => {
  const render = (value, onChange, editorVisible, setEditorVisible, label) => {
    return (
      <Box sx={{ width: 400, minWidth: 275, border: '1px solid red', margin: '0 auto' }}>
        <Card variant="outlined" sx={{ maxWidth: 345, display: 'flex', alignItems: 'center' }}>
          <CardContent>
            {editorVisible ? (
              <TextField
                type="text"
                label={editorVisible ? 'Editing Name:' : label}
                id="standard-size-normal"
                variant="outlined"
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />

            ) : (
              <Typography variant="h6">{value}</Typography>
            )}
          </CardContent>
          <CardActions>
            <Button onClick={setEditorVisible}>{editorVisible ? 'Done' : 'Edit'}</Button>
          </CardActions>
        </Card>
      </Box>
    )
  }

  return (
    <EditableItem
      render={render}
      initialValue={initialValue}
      label={label}
    />
  )
}

export default Input