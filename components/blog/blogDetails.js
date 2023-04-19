import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@helpers/contentful";

export default function BlogDetails({ post }) {
  const { photographyBlog: title, slug, thumbnail, featuredImage, content, date } = post?.fields;
  const { url } = thumbnail?.fields?.file;
  const { width, height } = featuredImage?.fields?.file.details.image;

  return (
    <article className="overflow-hiddenbg-white h-[15rem] lg:max-w-lg mx-auto">
      <Image
        width={width}
        height={height}
        src={"https:" + url}
        className="h-full w-full object-cover"
        alt="blog post image"
      />
      <div className="flex h-full flex-col justify-evenly rounded border-2 border-t-0 p-2">
        <h2 className="text-xl font-bold leading-8">{title}</h2>
        <Link className="underline" href={"/blog/" + slug}>
          read more
        </Link>
        <div className="mb-2 text-[.6rem] font-semibold uppercase text-[color:var(--primary-clr)]">
          {date.replace("T", " at ").slice(0, 19)}
        </div>
      </div>
    </article>
  );
}
