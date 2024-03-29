import Parser from "rss-parser";
import { JSDOM } from "jsdom";

const parser = new Parser();

export type Member = {
  feedLinks: string[];
  name: string;
};
export type Post = {
  url: string;
  title: string;
  publishedAt: string;
  ogImageUrl: string;
  author: string;
};

export const parseRSSFeed = async (url: string) => {
  const feed = await parser.parseURL(url);

  return feed.items.map((item: any) => {
    return {
      title: item.title,
      url: item.link,
      publishedAt: item.pubDate,
    };
  });
};

export const getOgImagePath = async (url: string) => {
  const dom = await JSDOM.fromURL(url);
  const document = dom.window.document;
  const documentMetadata = document
    .querySelector("meta[property='og:image']")
    ?.getAttribute("content");
  return documentMetadata;
};

export const getArticlePost = async (member: Member): Promise<Post[]> => {
  const memberPostsEachByfeed = await Promise.all(
    member.feedLinks.map(async (feedUrl: string) => {
      const articles = await parseRSSFeed(feedUrl);
      return await Promise.all(
        articles.map(async (article) => {
          const ogImageUrl = await getOgImagePath(article.url);
          return {
            title: article.title,
            url: article.url,
            publishedAt: article.publishedAt,
            ogImageUrl: ogImageUrl ? ogImageUrl : "",
            author: member.name,
          };
        })
      );
    })
  );
  return memberPostsEachByfeed.flat(1);
};

export const getMembersPosts = async (members: Member[]): Promise<Post[]> => {
  const memberPostsEachBymember = await Promise.all(members.map(getArticlePost))
  return memberPostsEachBymember.flat(1);
};
