import React from 'react'
import {Button, Card,CardGroup} from 'react-bootstrap'
import Footer from './Footer'

export default function SectionVijesti() {

  const handleButton = () => {
    
  }
  return (
    <div className="App">
    <CardGroup>
      <Card>
        <Card.Img variant="top" className='card-img' src="https://www.srednja.hr/app/uploads/2022/01/IMG-20210713-WA0015-1.jpg"/>
        {/* // src={require('C:\\Users\\misla\\web-jelk\\src\\assets\\jelkovec-zrak2.jpg')}  */}
        <Card.Body>
          <Card.Title>Kako do mentalnog zdravlja?</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className='card-img' src="https://img.freepik.com/free-photo/river-surrounded-by-forests-cloudy-sky-thuringia-germany_181624-30863.jpg?w=996&t=st=1679782179~exp=1679782779~hmac=2984cf26c1bd3178e2f2aa3fef3c5e2a594147b29e787af64028d8e2ac4004c5" />
        <Card.Body>
          <Card.Title>Ja osvajam svijet svojim znanjem!</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/304986895_595942038892843_6516021017036190157_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_C8fUaix0w0AX-vUl1v&_nc_ht=scontent.fzag4-1.fna&oh=00_AfAWWfALRKE7cH-HcfFpZbWeVhOBGHixlafejNXYagbGDg&oe=64245419" className='card-img' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    <CardGroup>
      <Card>
        <Card.Img variant="top" className='card-img' src="https://www.srednja.hr/app/uploads/2022/01/IMG-20210713-WA0015-1.jpg"/>
        {/* src={require('C:\\Users\\misla\\web-jelk\\src\\assets\\jelkovec-zrak2.jpg')}   */}
        <Card.Body>
          <Card.Title>Kako do mentalnog zdravlja?</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className='card-img' src="https://www.srednja.hr/app/uploads/2022/01/IMG-20210713-WA0015-1.jpg" />
        <Card.Body>
          <Card.Title>Kako do mentalnog zdravlja?</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted row-4">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className='card-img' src="https://www.srednja.hr/app/uploads/2022/01/IMG-20210713-WA0015-1.jpg" />
        <Card.Body>
          <Card.Title>Kako do mentalnog zdravlja?</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className='card-img' src="https://img.freepik.com/free-photo/river-surrounded-by-forests-cloudy-sky-thuringia-germany_181624-30863.jpg?w=996&t=st=1679782179~exp=1679782779~hmac=2984cf26c1bd3178e2f2aa3fef3c5e2a594147b29e787af64028d8e2ac4004c5" />
        <Card.Body>
          <Card.Title>Ja osvajam svijet svojim znanjem!</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/304986895_595942038892843_6516021017036190157_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_C8fUaix0w0AX-vUl1v&_nc_ht=scontent.fzag4-1.fna&oh=00_AfAWWfALRKE7cH-HcfFpZbWeVhOBGHixlafejNXYagbGDg&oe=64245419" className='card-img' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Button onClick={handleButton} variant="outline-dark">PROČITAJ VIŠE</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>


    <Footer/>

    </div>
  )
}
