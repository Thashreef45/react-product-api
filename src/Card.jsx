import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Rating from '@mui/material/Rating';

export default function MediaCard({ thumbnl, title, description, price ,discount,rating}) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 ,minHeight:390}}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={thumbnl}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {/* Lizard */}
                        {title}
                    </Typography>

                    <Typography variant="body2" color="text.dark" >
                        <span style={{textDecorationLine:'line-through',color:'blue'}}>₹{price} </span>
                        ₹{Math.floor(price*(100-discount)/100)}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>

                    <Rating readOnly name="half-rating" defaultValue={rating} precision={0.1} />
                </CardContent>
                
            </Card>
        </Grid>
    );
}