import React from 'react'
import { Helmet } from 'react-helmet-async'

const Meta = ({ title, description, keywords }) => {
    
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Shopify',
    description: 'Best quality products at cheapest price',
    keywords: 'electronics, buy electronics, cheap electronics, gadgets, buy gadgets, cheap gadgets'
}

export default Meta