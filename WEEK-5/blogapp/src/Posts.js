import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    loadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                const posts = data.map(
                    (item) => new Post(item.id, item.title, item.body)
                );

                this.setState({ posts });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error) {
        alert("Error: " + error);
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Blog Posts</h1>

                {this.state.posts.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            border: "1px solid gray",
                            margin: "10px",
                            padding: "10px",
                        }}
                    >
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;