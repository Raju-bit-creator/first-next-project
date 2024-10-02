import Link from "next/link";

async function BlogPage() {
    // Fetch the data in the server component
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return (
        <>
            <h4>Blog List</h4>
            {data.slice(0, 4).map((item) => (
                <div key={item.id}>
                   <Link href={`blog/${item.id}` }passHref> <h2>{item.id} {item.title}</h2></Link>
                    <hr />
                </div>
            ))}
        </>
    );
}

export default BlogPage;