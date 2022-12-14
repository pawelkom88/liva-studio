import Wrapper from "@components/UI/wrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";
import SkeletonLoader from "@components/UI/skeleton/Skeleton";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@helpers/contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const response = await client.getEntries();
  const paths = response.items.map(item => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "photographyBlog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { post: items[0] }, revalidate: 60 };
}

export default function BlogDetails({ post }) {
  if (!post) return <SkeletonLoader />;

  const { photographyBlog: title, slug, thumbnail, featuredImage, content, date } = post?.fields;
  const { url } = thumbnail.fields?.file;
  const { width, height } = featuredImage?.fields.file.details.image;
  return (
    <Wrapper>
      <article className="px-4 md:px-16 break-words">
        <h1 className="heading-styles text-center my-8">{title}</h1>
        <figure>
          <Image
            className="w-full h-64 object-cover"
            src={"https:" + url}
            alt={title}
            width={width}
            height={height}
          />
          <figcaption className="text-xs">
            <i>Image source: {"https:" + url}</i>
          </figcaption>
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
  );
}
