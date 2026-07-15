import { blogs } from "../data";

function BlogDetails() {
    return (
        <div className="card">
            <h1>Blog Details</h1>

            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <h5>{blog.author}</h5>
                    <p>{blog.description}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogDetails;