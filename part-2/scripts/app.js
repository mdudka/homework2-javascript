import { PostsManager } from "./PostsManager.js";

const getPostsBtn = document.getElementById("get-all-posts");
const postList = document.getElementById("posts-list");
const getSinglePostBtn = document.getElementById("get-single-post");
const postIdInput = document.getElementById("post-id-input");

const addPostBtn = document.getElementById("add-post");
const addPostIdInput = document.getElementById("add-post-user_id-input");
const addPostTitleInput = document.getElementById("add-post-title-input");
const addPostBodyInput = document.getElementById("add-post-body-input");

const getPosts = () => {
  const postsManager = new PostsManager();
  postsManager
    .getPosts()
    .then(() => {
      postList.innerHTML = postsManager.displayPosts();
    })
    .catch((error) => {
      alert(error.message);
    });
};

const getSinglePost = () => {
  const postId = postIdInput.value;
  if (postId) {
    const postsManager = new PostsManager();
    postsManager
      .getPostById(postId)
      .then((post) => {
        postList.innerHTML = post.displayPost();
      })
      .catch((error) => {
        alert(error.message);
      });
  } else {
    postList.innerHTML = "Please enter a post ID";
  }
};

const addPost = () => {
  const userId = addPostIdInput.value;
  const postTitle = addPostTitleInput.value;
  const postBody = addPostBodyInput.value;

  const postsManager = new PostsManager();
  postsManager
    .addPost(userId, postTitle, postBody)
    .then(() => {
      getPosts();
    })
    .catch((error) => {
      alert(error.message);
    });
};

addPostBtn.addEventListener("click", addPost);
getPostsBtn.addEventListener("click", getPosts);
getSinglePostBtn.addEventListener("click", getSinglePost);
