import { useRouter } from 'next/router'
const Random = () => {
    const router = useRouter();
    return (
        <>
            <h1>Blog post</h1>
            <p>Post id: {router.query.id}</p>
        </>
    )
}
export default Random;