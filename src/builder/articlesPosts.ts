import Parser from "rss-parser";
const parser = new Parser();

export const parseRSSFeed = async (url: string) => {
  const feed = await parser.parseURL(url);

  return feed.items.map((item:any) => {
    return {
        title:item.title,
        url:item.link
    };
  });
  
};
