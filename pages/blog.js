import BlogDetails from "@components/blog/blogDetails";
import PageSeo from "../seo/PageSeo";
import { createClient } from "contentful";
import { blogSeo } from "../seo/seo";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({ content_type: "photographyBlog", select: "fields" });

  return {
    props: {
      posts: response.items,
    },
    revalidate: 60,
  };
}
export default function BlogArticle({ posts }) {
  return (
    <>
      <PageSeo seo={blogSeo} />
      <h1 className="heading-styles mt-8 text-center">Welcome to our blog</h1>
      <main className="flex-center mx-auto my-16 max-w-7xl flex-wrap gap-8 px-4 sm:p-0">
        {posts?.length === 0 && <h3>There are no posts</h3>}
        {posts?.map(post => (
          <BlogDetails key={post.sys.id} post={post} />
        ))}
      </main>
    </>
  );
}
