
interface ProductDetailProps {
    params: {
      productId: string;
    };
  } 
  
  export default function ProductDetail({ params }: ProductDetailProps) {
    const { productId } = params;
  
    return (
      <div>
        <h4>This is product detail for product ID: {productId}</h4>
      </div>
    );
  }