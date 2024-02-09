import { useState } from 'react'
// import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import MediaCard from './Card'
import { Container, Grid } from '@mui/material'

function Product() {
  const [data, setData] = useState([])
  const link = 'https://dummyjson.com/products'

  const fetchData = async () => {
    const data = await axios.get(link)
    setData(data.data.products)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      {data && <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {data.map((prd) => {
              return (
                <MediaCard
                  key={prd.id}
                  thumbnl={prd.thumbnail}
                  title={prd.title}
                  description={prd.description}
                  price={prd.price}
                  discount = {prd.discountPercentage}
                  rating = {prd.rating}
                />
              )
            })}
          </Grid>
        </Container>
        {console.log(data[0])}
      </div>}
    </>
  )
}

export default Product
