import React from 'react'
import Card, { CardVariant } from './Card/Card'
import EventsExample from './EventsExample/EventsExample'

export default function ExamplesPage() {
  return (
    <div >
    <h1>WORK</h1>
    <Card 
      height='200px' 
      width='300px' 
      variant={CardVariant.primary}
      onClick={(num) => console.log(num)}
    >
      <button>btn</button>
    </Card>

    <EventsExample />

    
  </div>
  )
}
