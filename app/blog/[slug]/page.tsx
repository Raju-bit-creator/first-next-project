interface BlogPageProps {
    params: { slug: any };  // Make sure productId is a string
}

export default function BlogPage({ params }: BlogPageProps) {
    const { slug } = params;  // Access the dynamic id directly from params

    return (
        <>
            <h4>This is blog page {slug}</h4>
        </>
    );
}