import React from 'react'
import {Card} from 'react-bootstrap'




const HomePage = () => {
  return (
    <>
  <Card>
  <Card.Img src="https://res.cloudinary.com/df8bd97ok/image/upload/v1701808140/landing_uifyss.jpg"/>
    <Card.Body>
      <Card.Text>
      <h1>Welcome to Anto-Productivity-App, where student productivity meets seamless organization! Empower yourself to conquer tasks with ease. 🚀
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
</>
  )
}

export default HomePage