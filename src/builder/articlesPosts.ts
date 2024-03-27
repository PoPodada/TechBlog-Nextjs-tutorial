import Parser from "rss-parser";
import {JSDOM} from "jsdom";

const parser = new Parser();

export const parseRSSFeed = async (url: string) => {
  const feed = await parser.parseURL(url);

  return feed.items.map((item:any) => {
    return {
        title:item.title,
        url:item.link,
        publishedAt:item.pubDate
    };
  });
  
};

export const getOgImagePath = async (url: string) => {
  const dom = await JSDOM.fromURL(url);
  const document = dom.window.document;
  const documentMetadata = document.querySelector("meta[property='og:image']")?.getAttribute("content")
  return documentMetadata; 
};
