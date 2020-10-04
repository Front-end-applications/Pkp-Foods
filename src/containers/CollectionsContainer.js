import React from 'react'

import { Collections } from '../components'

export default function CollectionsCardContainer () {
    return (
        <div>
            <Collections>
                <Collections.Title>Discover Our Collection</Collections.Title>
                <Collections.Row>
                    <Collections.Card
                        img="/images/products/Sweets.jpg"
                        title="Card Title"
                        desc="Card Description"
                    />
                    <Collections.Card
                        img="/images/products/Sweets.jpg"
                        title="Card Title"
                        desc="Card Description"
                    />
                    <Collections.Card
                        img="/images/products/Sweets.jpg"
                        title="Card Title"
                        desc="Card Description"
                    />
                </Collections.Row>
            </Collections>
        </div>
    )
}
