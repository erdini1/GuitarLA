// El index es lo que se va  acargar cuando visitemos el blog

import { useLoaderData } from "@remix-run/react"
import ListadoPosts from "~/components/listado-posts"
import { getPosts } from "~/models/posts.server"

export function meta() {
    return [
        { title: "GuitarLA - Blog" },
        { description: "GuitarLa - Nuestros Posts" }
    ]
}

export async function loader() {
    const posts = await getPosts()
    return posts?.data
}

const Blog = () => {

    const posts = useLoaderData()

    return (
        <ListadoPosts
            posts={posts}
        />
    )
}

export default Blog