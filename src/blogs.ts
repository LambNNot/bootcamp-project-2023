type Blog = {
    title:  string;
    date:  string;
    description:  string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "Blog Uno",
        date:  "10/21/2023",
        description:  "This is my blog primero",
        slug: "blogs/blog_entry_Blog_Uno.html",
    }
    ,
    {
        title: "Blog Dos",
        date:  "10/22/2023",
        description:  "This is my blog segundo",
        slug: "blogs/blog_entry_Blog_Dos.html",
    }
]

let blogEntries = document.getElementsByClassName("blogs-list")[0]
console.log(blogEntries)

blogs.forEach(blog => {
    let div = document.createElement("div")
    let title = document.createElement("h3")
    let date = document.createElement("h4")
    let description = document.createElement("p")
    div.className = "blog-entry"

    title.innerHTML = blog.title
    date.innerHTML = blog.date
    description.innerHTML = blog.description
    div.appendChild(title)
    div.appendChild(date)
    div.appendChild(description)
    blogEntries.appendChild(div)

    div.addEventListener("click", () => {
        window.location.href = blog.slug
    })
})
