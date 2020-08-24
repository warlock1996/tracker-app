import React, { useState, useEffect, Suspense } from 'react';
import {Container, Button, Grid, Card, CardContent, CardActions, CardActionArea, CardMedia} from '@material-ui/core'
import './App.css';

function App() {
  let [posts, setPosts] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()).then(d => setPosts(posts = d))
  }, [])
  return (
    <Container fixed>
      <Grid container m={0} spacing={2}>
        <Suspense fallback="<p> Loading posts...</p>">
          {  posts?.map((d, i) => (
            <Grid item xs={4} key={i}>
                <Card>
                    <CardActionArea>
                      <CardMedia className="Media" title="Card Media" image="https://upload.wikimedia.org/wikipedia/commons/c/cc/Jinnah1945c.jpg" />
                    </CardActionArea>
                      <CardContent>
                        <h3>{d.title}</h3>
                      </CardContent>
                    <CardActions>
                      <Button variant="contained" disableElevation>Take Action</Button>
                      <Button variant="contained" color="primary" disableElevation>some action</Button>   
                    </CardActions>
                </Card>
              </Grid>
          ))} 
        </Suspense>
      </Grid>
    </Container>
  );
}

export default App;