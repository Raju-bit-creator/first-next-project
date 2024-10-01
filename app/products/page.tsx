import Link from "next/link"

function Products() {
    return (
    <>
    <h4><Link href={"/products/1"}>this is product page 1</Link></h4>
    <h4><Link href={"/products/2"}>this is product page 2</Link></h4>
   
    </>)
}
export default Products