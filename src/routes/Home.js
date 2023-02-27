import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { IconBtn } from '../components/buttons'
import PlaceCard from '../components/cards'
import { PhMapPin } from '../components/icons'

function Home() {

    const settings = {
        dots: false,
        arrows: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div className='home'>
            <div className="homeUserCurrentPosition flex fx-aCenter">
                <IconBtn size={50}
                    icon={<PhMapPin />} />
                <section>
                    <small>Votre position actuelle</small>
                    <p>
                        Vous etes a la faculter de tant.....
                    </p>
                </section>
            </div>

            <div className='homePopularPlaces'>
                <section className="hppTitles flex fx-aCenter fx-between">
                    <h2>Populaire</h2>
                    <Link to={''}>Tout voir</Link>
                </section>

                <section className="hppPlaces">
                    <Slider {...settings} >
                        {
                            [0, 0, 0, 0, 0, 0].map((item, i) => <PlaceCard key={'place nb' + i} />)
                        }
                    </Slider>
                </section>
            </div>
        </div>
    )
}

export default Home