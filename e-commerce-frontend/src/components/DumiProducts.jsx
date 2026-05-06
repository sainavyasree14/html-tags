import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function DumiProducts() {
    let products = [{
        imageSrc: "https://www.shutterstock.com/image-photo/coral-orange-female-set-clothing-260nw-2326257629.jpg",
        title: "Clothes"
    },
    {
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtJp5Zc90x75MI0gbNM5DF3JXpEbLUo_zPA&s" ,
        title: "Laptops"
    },
    {
        imageSrc: "https://etimg.etb2bimg.com/thumb/115236526.cms?width=400&height=300",
        title: "Mobile"
    },
    {
        imageSrc:"https://yoholife.in/cdn/shop/files/Collection_Banner_copy_2.webp?v=1763101648&width=1500",
        title:"Shoes"
    },
    ];
    return (
        <Row xs={1} md={4} className="g-4">
            {products.map((item,idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={item.imageSrc} height="250px"/>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <button className='btn btn-warning'>Add to Cart</button>
                            <button className='btn btn-success' mx-2>Buy</button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default DumiProducts;