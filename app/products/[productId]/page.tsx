// import { useRouter } from "next/router"

// function ProductDetail() {
//     const router = useRouter()
//     const productId = router.query.productId
//     return <h4>this is product detail  {productId}</h4>
// }
// export default ProductDetail


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