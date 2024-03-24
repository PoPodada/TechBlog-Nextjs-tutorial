import { parseRSSFeed } from "../articlesPosts";
describe("Articlesposts", () => {
  test("sample", async () => {
    const results = await parseRSSFeed("https://qiita.com/PoPodada/feed");
    expect(results).toEqual([{
      title: "ハッカソンに参加する良さについて",
      url: "https://qiita.com/PoPodada/items/30bdf57e1d3ea7bc070b",
    }]);
  });
});
