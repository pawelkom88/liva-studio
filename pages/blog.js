import BlogDetails from "@components/blog/blogDetails";
import { createClient } from "contentful";

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
      <h1 className="heading-styles text-center mt-8">Welcome on our blog</h1>
      <main className="max-w-7xl mx-auto px-4 sm:p-0 flex-center flex-wrap gap-8 my-16">
        {posts?.length === 0 && <h3>There are no posts</h3>}
        {posts?.map(post => (
          <BlogDetails key={post.sys.id} post={post} />
        ))}
      </main>
    </>
  );
}
