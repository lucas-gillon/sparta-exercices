import request from "@fewlines-education/request";
import "dotenv/config";

function createPost(title: string, author: string): void {
  const body = { id: "", title: title, author: author };
  request(
    `http://${process.env.HOST}/posts/`,
    {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}
createPost("Guerre et Paix", "Leo Tolstoy");
export { createPost };
