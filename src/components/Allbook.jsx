import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom'
import Book from './Book';

function Allbook() {
  const [datas,setData] = useState([])

  useEffect(()=>{
    const url_all='http://localhost:8000/api/book'
    fetch(url_all)
    .then(res=>res.json())
    .then(data =>{
        console.log(data)
        setData(data['data'])
    })
    console.log(typeof(datas))
  },[])



  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', marginTop:'50px'}}>
    {datas.map((e)=>{
      return(
      <Card style={{ width: '23.9%', margin:'20px'}} key={e.id}>
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        <Link to = {`/book/${e.id}`} state= {{ id: e.id, name:e.name }} ><button className='btn btn-sm btn-secondary'>Read More</button></Link>
      </Card.Body>
    </Card>)
      
    }
      

    )}
    
    </div>
  );
}

export default Allbook;