import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Product, Loader, Message, Paginate, ProductCarousel, Meta } from '../components/index.js'
import { useGetProductsQuery } from '../slices/productsApiSlice.js'

const HomePage = () => {
    
    const { keyword, pageNumber } = useParams()
    const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber })

    return (
        <>
            {isLoading ? (
                <Loader />
                ) : error ? (
                    <Message variant='danger'>
                        { error?.data?.message || error.error }
                    </Message>
                ) : (
                    <>
                        <Meta title='Home - Shopify' />

                        {keyword ? (
                            <h5>Search results for "{keyword}"</h5>
                        ) : (
                            <>
                                <ProductCarousel />
                                <h3>Latest Products</h3>
                            </>
                        )}

                        <Row>
                            {data.products.map((product) => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>

                        <Row>
                            <Col className='my-2'>
                                <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ''} />
                            </Col>
                        </Row>
                    </>
            )}
        </>
    )
}

export default HomePage