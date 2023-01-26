import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const SearchBox = ({ searchOptions, option }) => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: '50px', marginBottom: '20px' }}>
      <Box sx={{
        width: 1000,
        maxWidth: '100%',
      }}>
        <TextField
          fullWidth
          type="text"
          placeholder='Type search words'
          onChange={searchOptions}
          label="Search"
        />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          aria-label="contacts">
          {option.map((option, index) => (
            <ListItem disablePadding key={index} sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
              <ListItemButton>
                <ListItemText primary={option} sx={{ color: 'InfoText' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container >
  )
}

export default SearchBox