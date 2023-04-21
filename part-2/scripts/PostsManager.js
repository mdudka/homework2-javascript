import { Post } from "./Post.js";
import { APIError } from "./APIError.js";

const apiURL = "https://gorest.co.in/public/v2/posts";
const apiToken =
  "Bearer 2c382a80034e4c04958b27be81ebacb6906587e1a0d03f3e3eafd859bae2a6f9";

export class PostsManager {
  constructor() {
    this.posts = [];
  }

  async getPosts() {
    try {
      const response = await fetch(apiURL, {
        headers: {
          Authorization: apiToken,
        },
      });

      if (!response.ok) {
        throw new APIError(response.status, response.statusText);
      }

      const postsData = await response.json();
      this.posts = postsData.map(
        (post) => new Post(post.id, post.title, post.body, post.user_id)
      );
    } catch (error) {
      throw new APIError(500, "Failed to fetch posts from API");
    }
  }

  async getPostById(id) {
    try {
      const response = await fetch(`${apiURL}/${id}`, {
        headers: {
          Authorization: apiToken,
        },
      });

      if (!response.ok) {
        throw new APIError(response.status, response.statusText);
      }

      const postData = await response.json();
      return new Post(
        postData.id,
        postData.title,
        postData.body,
        postData.user_id
      );
    } catch (error) {
      throw new APIError(404, `Post with ID ${id} not found`);
    }
  }

  async addPost(userId, title, body) {
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        body: JSON.stringify({ user_id: userId, title, body }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: apiToken,
        },
      });

      if (!response.ok) {
        throw new APIError(response.status, response.statusText);
      }

      const postData = await response.json();
      const newPost = new Post(
        postData.id,
        postData.title,
        postData.body,
        postData.user_id
      );
      this.posts.push(newPost);
      return newPost;
    } catch (error) {
      throw new APIError(500, "Failed to add post to API");
    }
  }

  displayPosts() {
    const postsList = this.posts
      .map((post) => `${post.displayPost()}`)
      .join("");
    return `${postsList}`;
  }
}
