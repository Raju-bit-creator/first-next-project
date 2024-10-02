// interface BlogPageProps {
//     params: { slug: any };  // Make sure productId is a string
// }



// function blogDetail({ post }) {
//  return <>
//  <h2>{post.id} {post.title}</h2>
//  <p>{post.body}</p>
//  </>
// }
// export default blogDetail

// export async function getStaticProps(context) {
//     const { params } = context
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
//     const data = await response.json()
//     console.log(data);
//     return {
//         props: {
//             post: data
//         }
//     }

// }

// async function BlogDetail({ params }) {
//     // Fetch the specific blog post using the dynamic parameter
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
//     const post = await response.json();

//     return (
//         <>
//             <h2>{post.id} {post.title}</h2>
//             <p>{post.body}</p>
//         </>
//     );
// }

// export default BlogDetail;

async function BlogDetail({ params }) {
    console.log('params:', params); 
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);

        // Check if the response is OK, otherwise throw an error
        if (!response.ok) {
            throw new Error('Failed to fetch the post');
        }

        const post = await response.json();

        return (
            <>
                <h2>{post.id} {post.title}</h2>
                <p>{post.body}</p>
            </>
        );
    } catch (error) {
        return <p>Error loading post: {error.message}</p>;
    }
}

export default BlogDetail;