import Wrapper from "@components/UI/wrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@helpers/contentful";
import PageSeo from "../../seo/PageSeo";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const response = await client.getEntries({ content_type: "photographyBlog" });
  const paths = response.items.map(item => {
    return {
      params: { slug: item?.fields?.slug || "" },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "photographyBlog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return { props: { post: items[0] }, revalidate: 60 };
}

export default function BlogDetails({ post }) {
  const { photographyBlog: title, thumbnail, featuredImage, content, date } = post?.fields;
  const { url } = thumbnail?.fields?.file;
  const { width, height } = featuredImage?.fields?.file.details.image;

   const individualBlogPostSeo = {
    pageDescription: `Learn more about ${title} and give us a shout what you think !`,
    canonical: `blog/${title}`,
    url: `blog/${title}`,
    title:  `'Liva Studio - Blog Post - ${title}` ,
    description: `Learn more about ${title} and give us a shout what you think !`,
  };

  return (
    <>
    <PageSeo seo={individualBlogPostSeo} />
      <Wrapper>
        <article className="my-8 break-words px-4 md:px-16">
          <h1 className="heading-styles my-8 text-center">{title}</h1>
          <figure>
            <Image
              className="aspect-video h-[25rem] w-full object-cover"
              src={"https:" + url}
              alt={title}
              width={width}
              height={height}
            />
          </figure>
          <div className="my-4 md:text-lg">{documentToReactComponents(content, options)}</div>
          <div className="my-4">
            <small>{date.replace("T", " at ").slice(0, 19)}</small>
          </div>
          <span className="my-4 underline">
            <Link href="/blog">back to blog</Link>
          </span>
        </article>
      </Wrapper>
    </>
  );
}
