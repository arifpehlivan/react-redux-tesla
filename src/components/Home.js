import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section 
          title="Model S" 
          desc="Plaid" 
          bgImg="model-s.jpg"
          leftBtnText="Customer Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model Y" 
          desc="Plaid" 
          bgImg="model-y.jpg"
          leftBtnText="Customer Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model 3" 
          desc="Plaid" 
          bgImg="model-3.jpg"
          leftBtnText="Customer Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model X" 
          desc="Plaid" 
          bgImg="model-x.jpg"
          leftBtnText="Customer Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Lovest Cost Solar Panel in America" 
          desc="Money-back guarantee" 
          bgImg="solar-panel.jpg"
          leftBtnText="Order Order"
          rightBtnText="Learn More"
        />
        <Section
          title="Accessories" 
          desc="" 
          bgImg="accessories.jpg"
          leftBtnText="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`