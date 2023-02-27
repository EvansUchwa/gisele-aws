import React from 'react'
import { Link } from 'react-router-dom'
import { IconBtn } from './buttons'
import { PhHeart, PhPersonSimpleWalkBold } from './icons'

function PlaceCard() {
    return (
        <div className='placeCard flex'>
            <img src="https://d1bvpoagx8hqbg.cloudfront.net/originals/quelles-sont-les-meilleures-universites-du-monde-c2b6a28e8f03e36938ea431bcd7becbf.jpg"
                alt="universiy of world" />

            <section className='pc-Infos'>
                <div className="pciHead flex fx-between">
                    <b>Rectorat de l'UAC</b>
                    <Link to='/places'>En savoir plus</Link>
                </div>
                <div className="pciFoot">
                    <PhPersonSimpleWalkBold />
                    <span>
                        Lorem ipsum dolor suscipit inventore possimus!
                    </span>
                </div>
            </section>
            <IconBtn size={30} icon={<PhHeart />} className='pc-likeBtn' />
        </div>
    )
}

export default PlaceCard