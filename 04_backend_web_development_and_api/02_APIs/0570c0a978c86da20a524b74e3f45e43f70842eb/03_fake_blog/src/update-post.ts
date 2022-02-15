import request from "@fewlines-education/request";
import "dotenv/config";

function updatePostTitle(id: number, newTitle: string): void {
  const body = { id: id, title: newTitle };
  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log("update post title\n", data);
    },
  );
}
updatePostTitle(1, "The Adventures of Huckleberry Finn");

function updatePostAuthor(id: number, newAuthor: string): void {
  const body = { id: id, author: newAuthor };
  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log("update post author\n", data);
    },
  );
}
updatePostAuthor(2, "updated title v2");

function updatePost(id: number, newTitle: string, newAuthor: string): void {
  const body = { id: id, title: newTitle, author: newAuthor };
  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log("update post\n", data);
    },
  );
}
updatePost(3, "POST updated title v2", "POST updated author v2");

export { updatePost, updatePostAuthor, updatePostTitle };
