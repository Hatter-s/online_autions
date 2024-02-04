import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import './App.css'

const provideProducts = [
  { name: "Sản phẩm 1", category: "Điện tử", price: 1200, imageUrl: "/images/event-8.jpg" },
  { name: "Sản phẩm 2", category: "Thời trang", price: 300, year: 2021, imageUrl: "/images/event-1.jpg" },
  { name: "Sản phẩm 3", category: "Đồ gia dụng", price: 150, year: 2020, imageUrl: "/images/event-2.jpg" },
  { name: "Sản phẩm 4", category: "Thực phẩm", price: 50, year: 2022, imageUrl: "/images/event-3.jpg" },
  { name: "Sản phẩm 5", category: "Điện tử", price: 800, year: 2018, imageUrl: "/images/event-4.jpg" },
  { name: "Sản phẩm 6", category: "Thể thao", price: 250, year: 2020, imageUrl: "/images/event-5.jpg" },
  { name: "Sản phẩm 7", category: "Giáo dục", price: 100, year: 2019, imageUrl: "/images/event-6.jpg" },
  { name: "Sản phẩm 8", category: "Văn phòng phẩm", price: 20, year: 2021, imageUrl: "/images/event-7.jpg" },
  { name: "Sản phẩm 9", category: "Thời trang", price: 500, year: 2019, imageUrl: "/images/event-8.jpg" },
  { name: "Sản phẩm 10", category: "Sức khỏe", price: 600, year: 2022, imageUrl: "/images/event-1.jpg" },
  { name: "Sản phẩm 11", category: "Du lịch", price: 700, year: 2018, imageUrl: "/images/event-2.jpg" },
  { name: "Sản phẩm 12", category: "Công nghệ", price: 1100, year: 2020, imageUrl: "/images/event-3.jpg" },
  { name: "Sản phẩm 13", category: "Thời trang", price: 400, year: 2022, imageUrl: "/images/event-4.jpg" },
  { name: "Sản phẩm 14", category: "Điện tử", price: 850, year: 2021, imageUrl: "/images/event-5.jpg" },
  { name: "Sản phẩm 15", category: "Nội thất", price: 250, year: 2019, imageUrl: "/images/event-6.jpg" },
  { name: "Sản phẩm 16", category: "Thể thao", price: 550, year: 2018, imageUrl: "/images/event-7.jpg" },
  { name: "Sản phẩm 17", category: "Đồ chơi", price: 60, year: 2020, imageUrl: "/images/event-8.jpg" },
  { name: "Sản phẩm 18", category: "Sức khỏe", price: 320, year: 2021, imageUrl: "/images/event-1.jpg" },
  { name: "Sản phẩm 19", category: "Giáo dục", price: 180, year: 2019, imageUrl: "/images/event-2.jpg" },
  { name: "Sản phẩm 20", category: "Văn phòng phẩm", price: 90, year: 2022, imageUrl: "/images/event-3.jpg" },
];


function Child(props) {
  return (
    <>
      <div className=' flex flex-col justify-start text-start'>
        <label>Set H1</label>
        <input type='text' onChange={(e) => { props.setH1Title(e.target.value) }} value={props.h1Title} />
      </div>
    </>
  )
}

function App() {
  const [products, setProducts] = useState(provideProducts)
  const [categories, setCategories] = useState(provideProducts.filter((product, index) => products.indexOf(product.category) === index).map(product => product.category));
  console.log(categories);

  return (
    <>
      <div className='flex gap-4 flex-col text-start'>
      <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >

    </Nav>
    <Form className='add-product'>
            <h2>Add Product</h2>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>name</Form.Label>
            <Form.Control type="text" placeholder="Enter name of product" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter price of product" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>category</Form.Label>
            <Form.Control type="text" placeholder="Enter category product" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>year</Form.Label>
            <Form.Control type="number" placeholder="Enter category product" min={2000} max={2100} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>price</th>
              <th>category</th>
              <th>year</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.year}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>

        <Form className='add-product'>
            <h2>Add Product</h2>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>name</Form.Label>
            <Form.Control type="text" placeholder="Enter name of product" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter price of product" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>category</Form.Label>
            <Form.Control type="text" placeholder="Enter category product" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>year</Form.Label>
            <Form.Control type="number" placeholder="Enter category product" min={2000} max={2100} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default App
