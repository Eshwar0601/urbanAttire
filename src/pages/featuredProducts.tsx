import React from 'react'
import ProductsFeatured from '@containers/products-featured'
import Container from '@components/ui/container';

const featuredProducts = () => {
    return (
        <Container>
          <ProductsFeatured
            sectionHeading="Featured Products"
            limit={5}
          />
        </Container>
    )
}

export default featuredProducts;
