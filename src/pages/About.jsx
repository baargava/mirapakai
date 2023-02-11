import { Box, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/layout/Layout'

const About = () => {
  return (
    <>
    <Layout>
<Box sx={{
  p:1.6,
  my:12,
  "& p":{
    textAlign:'justify'
  },
  "& h4":{
    textAlign:'center',
   
    fontSize:'2rem',
    my:2
  },
  "@media (max-width:600px)":{
    my:0
  }
}}>
<Typography component="h4">Welcome To Our Restaruant</Typography>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam, dolore magnam excepturi dicta ipsa sit temporibus maxime in optio vitae, aliquam nam doloribus facilis. Fugiat eligendi, cumque veniam odio earum molestias asperiores saepe, quaerat at deleniti voluptas ipsum obcaecati, aspernatur nemo. Aut quam adipisci exercitationem libero aperiam possimus architecto minima harum quidem enim quaerat impedit et maiores, ullam distinctio vero, facere facilis labore voluptas expedita nihil! Illo culpa labore error corrupti, ullam iure ipsam expedita minus perferendis reprehenderit, quaerat blanditiis rerum. Aliquam dicta, quia rerum quos hic ipsam sed reiciendis dolores blanditiis neque labore vero earum? Rem, laboriosam eligendi.</p>
<br/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime veniam fugiat, tempora adipisci ipsum nam error laudantium maiores numquam repudiandae natus! Adipisci nesciunt saepe ipsa quae illo? Quis iure sequi perspiciatis dolore cum aliquid dignissimos, ea ut architecto officiis id nihil error culpa voluptate atque ipsa esse eveniet minima veritatis pariatur nulla modi libero porro nam. Sequi, fugit. Impedit adipisci suscipit quo minus error? Nemo ducimus aperiam asperiores earum, provident quos veniam consequatur animi dicta libero dolore, repudiandae velit eligendi. Dolorem earum soluta amet in officia aspernatur, ab debitis temporibus alias voluptatum dolor commodi. Molestias esse laudantium architecto. Commodi, culpa!</p>
</Box>

    </Layout>
    </>
  )
}

export default About