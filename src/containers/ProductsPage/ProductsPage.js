import './ProductsPage.css'
import shirts from '../../shared/shirts.js'
import { Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function ProductCard({shirt, index}) {
  const shirtImage = (shirt.colors && Object.keys(shirt.colors).length) ? Object.values(shirt.colors)[0].front : shirt.default.front;
  const colorCount = shirt.colors ? Object.keys(shirt.colors).length : 0;
  return (
    <Card>
      <Link to={'../details/' + index}>
        <img alt="Shirt Image" src={shirtImage} />
      </Link>
      <CardBody>
        <CardTitle tag='h3'>
          {shirt.name || 'Name not found'}
        </CardTitle>
        <CardSubtitle tag='p'>
          Available in {colorCount} color{colorCount > 1 ? 's' : ''}
        </CardSubtitle>
        <Link to={'../details/' + index}>
          <Button>
            See Page
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default function ProductsPage() {
  return (
    <main id='ProductsMain'>
      <h2>Our T-Shirts</h2>
      <section id='ProductSection'>
        {shirts.map((shirt, index) => (
          <ProductCard shirt={shirt} index={index} key={index} />
        ))}
      </section>
    </main>
  );
}
