import React from 'react'
import Container from '@components/ui/container';
import ProductsFlashSaleBlock from '@containers/product-flash-sale-block';

const flashSale = () => {
  return (
    <>
        <Container>
            <ProductsFlashSaleBlock date={"2025-12-01T01:02:03"} />
        </Container>
    </>
  )
}

export default flashSale