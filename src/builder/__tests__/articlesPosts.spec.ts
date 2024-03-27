import { server } from "../../mocks/node";
import { parseRSSFeed,getOgImagePath ,getArticlePost} from "../articlesPosts";
import { Member,Post } from "../articlesPosts";

describe("Articlesposts", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe("parseRSSFeed",()=>{
    test("feedのUrlをパースする", async () => {
      const results = await parseRSSFeed("https://qiita.com/PoPodada/feed");
      expect(results).toEqual([{
        title: "ハッカソンに参加する良さについて",
        url: "https://qiita.com/PoPodada/items/30bdf57e1d3ea7bc070b",
        publishedAt: "2024-03-15T13:16:16.000Z",
      }]);
    });
  })
  describe("getOgimage",()=>{
    test("OG画像のURLを取得できる", async () => {
      const results = await getOgImagePath("https://qiita.com/PoPodada/items/30bdf57e1d3ea7bc070b");
      expect(results).toEqual(
        "https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9JUUzJTgzJThGJUUzJTgzJTgzJUUzJTgyJUFCJUUzJTgyJUJEJUUzJTgzJUIzJUUzJTgxJUFCJUU1JThGJTgyJUU1JThBJUEwJUUzJTgxJTk5JUUzJTgyJThCJUU4JTg5JUFGJUUzJTgxJTk1JUUzJTgxJUFCJUUzJTgxJUE0JUUzJTgxJTg0JUUzJTgxJUE2JnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9NTYmdHh0LWNsaXA9ZWxsaXBzaXMmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz0yZjIyYmNlZjFmMjIxYmZjMWEyNDQ0MTMwNGEwZTEyZg&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTcxNiZ0eHQ9JTQwUG9Qb2RhZGEmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zMiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTUzYWU0OTkxYTc1OGIyNGZmZjk5MDI1YzQ5MGE0ODNj&blend-x=142&blend-y=491&blend-mode=normal&s=3fb180bb0bb604a7ed8e0d8126e8aa09"
      );
    });
  })
  describe("getArticlePost",()=>{
    test("", async () => {
      const member:Member = {name:"PoPodada",feedLinks:["https://qiita.com/PoPodada/feed"]}
      const results = await getArticlePost(member);
      expect(results).toEqual([{
        title: "ハッカソンに参加する良さについて",
        url: "https://qiita.com/PoPodada/items/30bdf57e1d3ea7bc070b",
        publishedAt: "2024-03-15T13:16:16.000Z",
        ogImageUrl:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9JUUzJTgzJThGJUUzJTgzJTgzJUUzJTgyJUFCJUUzJTgyJUJEJUUzJTgzJUIzJUUzJTgxJUFCJUU1JThGJTgyJUU1JThBJUEwJUUzJTgxJTk5JUUzJTgyJThCJUU4JTg5JUFGJUUzJTgxJTk1JUUzJTgxJUFCJUUzJTgxJUE0JUUzJTgxJTg0JUUzJTgxJUE2JnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9NTYmdHh0LWNsaXA9ZWxsaXBzaXMmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz0yZjIyYmNlZjFmMjIxYmZjMWEyNDQ0MTMwNGEwZTEyZg&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTcxNiZ0eHQ9JTQwUG9Qb2RhZGEmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zMiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTUzYWU0OTkxYTc1OGIyNGZmZjk5MDI1YzQ5MGE0ODNj&blend-x=142&blend-y=491&blend-mode=normal&s=3fb180bb0bb604a7ed8e0d8126e8aa09",
        author:member.name
      }]);
    });
  })
  
});
