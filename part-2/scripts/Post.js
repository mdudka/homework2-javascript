export class Post {
  constructor(id, title, body, userId) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.userId = userId;
  }

  displayPost() {
    return `
    <li class="post-list-item">
        <span>Post ${this.id}. ${this.title}</span>
        <span>User ID: ${this.userId}</span>
        <p>${this.body}</p>
    </li>`;
  }
}
