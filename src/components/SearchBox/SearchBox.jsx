import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const SearchBox = ({ searchOptions, option, query }) => {
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
          value={query}
        />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          aria-label="contacts">
          {option.map((option, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton>
                <ListItemText primary={option === query ? (
                  <span style={{ color: 'dodgerblue', fontSize: '1.5rem', borderRadius: '5px' }}>{option}</span>
                ) : option} sx={{ color: 'InfoText' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container >
  )
}

export default SearchBox