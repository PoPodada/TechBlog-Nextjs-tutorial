import { server } from "../../mocks/node";
import { parseRSSFeed } from "../articlesPosts";
describe("Articlesposts", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe("parseRSSFeed",()=>{
    test("feedのUrlをパースする", async () => {
      server.events.on('request:start', ({ request }) => {
        console.log('MSW intercepted:', request.method, request.url)
      })
      const results = await parseRSSFeed("https://qiita.com/PoPodada/feed");
      expect(results).toEqual([{
        title: "ハッカソンに参加する良さについて",
        url: "https://qiita.com/PoPodada/items/30bdf57e1d3ea7bc070b",
      }]);
    });
  })
  
});
