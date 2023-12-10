import React from 'react'
import {Card} from 'react-bootstrap'


const HomePage = () => {
  return (
    <>
  <div className='card Container'>  
  <Card className='card'>
  <Card.Img src="https://res.cloudinary.com/df8bd97ok/image/upload/t_Profile/v1701808140/landing_uifyss.png"/>
    <Card.Body>
      <Card.Text className='cardText'>
      <h1 className='cardHeader'>Welcome to Anto-Productivity-App, where student productivity meets seamless organization! Empower yourself to conquer tasks with ease. 🚀
</h1>
      </Card.Text>
    </Card.Body>
  
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
      Empower your academic journey. Organize, prioritize, and conquer tasks effortlessly with [App Name]. Your roadmap to effective time management
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://res.cloudinary.com/df8bd97ok/image/upload/v1701808579/landing_1_hsqtnw.jpg" />
  </Card>
  <br />
  <Card>
  <Card.Body>
    <Card.Text>
    Experience the future of productivity – where students collaborate, delegate, and succeed together. Start achieving your goals today! 💪
    </Card.Text>
  </Card.Body>
  <Card.Img variant="bottom" src="https://res.cloudinary.com/df8bd97ok/image/upload/v1701808769/landing_2_woi6xe.png" />
</Card>
</div>

</>

  )
}

export default HomePage