import Link from 'next/link'



const Index = () =>{
return (

    <div>
        <h1>Home page</h1>
        <style jsx>{`h1{font-size:3rem;}`}</style>
        <Link href='/blog'>
            <button>Blog</button>
        </Link>
    </div>
)
}

export default Index;