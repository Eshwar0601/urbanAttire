import Container from '@components/ui/container'
import BannerWithProducts from '@containers/banner-with-products'
import React from 'react'

const onSelling = () => {
    return (
        <Container>
            <BannerWithProducts
                sectionHeading="On Selling Products"
                categorySlug="/search"
            />
        </Container>
    )
}

export default onSelling
