import React, { useState, useEffect } from 'react'
import axios from 'axios'

function BlogPosts() {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://blog-with-user-jade.vercel.app/',
        )
        const parser = new DOMParser()
        const htmlDoc = parser.parseFromString(response.data, 'text/html')
        const cardElements = htmlDoc.querySelectorAll('.project-card')
        const cardDataArray = Array.from(cardElements).map((cardElement) => {
          const titleElement = cardElement.querySelector('h3')
          const dateElement = cardElement.querySelector('time')
          const imageElement = cardElement.querySelector('img')

          const title = titleElement.textContent.trim()
          const date = dateElement.getAttribute('datetime')
          const imageUrl = imageElement ? imageElement.getAttribute('src') : ''

          return { title, date, imageUrl }
          
        })

        setCards(cardDataArray)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {cards.map((cardData, index) => (
            <div className="card" key={index}>
              {' '}
              {console.log('cardData.imageUrl :>> ', cardData.imageUrl)}
              {cardData.imageUrl && (
                <img
                  style={{ width: '100px', height: '100px' }}
                  src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg"
                  alt="CardImage"
                />
              )}
              <h3>{cardData.title}</h3>
              <p>Date: {cardData.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogPosts
