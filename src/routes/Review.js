import React from 'react'
import { PhSmiley, RiStarSmileFill } from '../components/icons'

function Review() {
    return (
        <div className='review'>
            <section className='reviewSection'>
                <span>
                    <RiStarSmileFill />
                </span>

                <h1 className='textCenter'>Notez votre experience</h1>

                <div className='rs-smiles'>
                    <PhSmiley />
                    <PhSmiley />
                    <PhSmiley />
                    <PhSmiley />
                    <PhSmiley />
                </div>

                <div className='rs-actions'>
                    <button>Non merci</button>
                    <button>Okay</button>
                </div>
            </section>
        </div>
    )
}

export default Review
