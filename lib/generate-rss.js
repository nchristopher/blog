import { escape } from "@/lib/utils/htmlEscaper";

import metadata from "@/data/metadata";

const generateRssItem = (post) => `
  <item>
    <guid>${metadata.url}/blog/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${metadata.url}/blog/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${metadata.email} (${metadata.name})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join("")}
  </item>
`;

const generateRss = (posts, page = "feed.xml") => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(metadata.name)}</title>
      <link>${metadata.url}/blog</link>
      <description>${escape(metadata.description)}</description>
      <language>${metadata.language}</language>
      <managingEditor>${metadata.email} (${metadata.name})</managingEditor>
      <webMaster>${metadata.email} (${metadata.name})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${
			metadata.url
		}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`;
export default generateRss;
