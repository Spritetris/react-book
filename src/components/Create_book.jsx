import Form from 'react-bootstrap/Form';

function Create_book() {
  return (
    <div className='m-5'>
    <h2 className='mb-4 text-center'>Create Book</h2>
    <Form>
      <Form.Group className="mb-3 d-flex justify-content-between" >
        <div style={{width:'49%'}}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Book Name" />
        </div>
        <div  style={{width:'49%'}}>
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Author" />
        </div>  
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-between" >
        <div style={{width:'49%'}}>
          <Form.Label>Genre</Form.Label>
          <Form.Control type="text" placeholder="Genre" />
        </div>
        <div  style={{width:'49%'}}>
          <Form.Label>Public Date</Form.Label>
          <Form.Control type="text" placeholder="Public Date" />
        </div>  
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      
      
    </Form>
    </div>
  );
}

export default Create_book;