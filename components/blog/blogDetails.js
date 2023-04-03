import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@helpers/contentful";

export default function BlogDetails({ post }) {

  const { photographyBlog: title, slug, thumbnail, featuredImage, content, date } = post?.fields;
  const { url } = thumbnail?.fields?.file;
  const { width, height } = featuredImage?.fields?.file.details.image;

  return (
    <article className="overflow-hiddenbg-white lg:max-w-lg">
      <Image
        width={width}
        height={height}
        src={"https:" + url}
        className="h-64 w-full object-cover"
        alt=""
      />
      <div className="rounded border-2 border-t-0 p-2 py-5">
        <div className="mb-2 text-xs font-semibold uppercase text-[color:var(--primary-clr)]">
          {date.replace("T", " at ").slice(0, 19)}
        </div>
        <h2 className="my-4 text-center text-2xl font-bold leading-8">{title}</h2>
        {/* <div className="mb-4 text-[color:var(--primary-clr)] p-2">
          {documentToReactComponents(content, options)}
        </div> */}
        <Link className="underline" href={"/blog/" + slug}>
          read more
        </Link>
      </div>
    </article>
  );
}
