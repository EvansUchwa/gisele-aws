import React from 'react'
import { IconBtn } from '../components/buttons'
import PlaceCard from '../components/cards'
import { PhArrowLeft } from '../components/icons'

function Places() {
    return (
        <div className='places'>
            <div className='backBtn'>
                <IconBtn size={40} icon={<PhArrowLeft />} />
                <h2>Populaire</h2>
            </div>
            <section className="pPlaces">
                {
                    [0, 0, 0].map((item, i) => <PlaceCard key={'place nb' + i} />)
                }
            </section>
        </div>
    )
}

export default Places