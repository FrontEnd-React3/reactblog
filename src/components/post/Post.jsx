import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './post.css'
import { Data } from './data'
import Modal from './Modal'
import Card from '../Card/Card'

export default function Post() {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  const [isReadMore, setIsReadMore] = useState(true)

  const [selectedCard, setSelectedCard] = useState()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="postwrapper">
      {Data.map((ijustneedone) => (
        <div key={ijustneedone.id}>
          <div data-aos="fade-up" className="post">
            <Card
              setIsOpen={setIsOpen}
              ijustneedone={ijustneedone}
              isReadMore={isReadMore}
              setSelectedCard={setSelectedCard}
            />
          </div>
        </div>
      ))}
      {isOpen && <Modal justone={selectedCard} setIsOpen={setIsOpen} />}
    </div>
  )
}
