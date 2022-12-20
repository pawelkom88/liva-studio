import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@helpers/contentful";

export default function BlogDetails({ post }) {
  const { photographyBlog: title, slug, thumbnail, featuredImage, content, date } = post.fields;
  const { url } = thumbnail.fields.file;
  const { width, height } = featuredImage.fields.file.details.image;

  return (
    <article className="overflow-hiddenbg-white lg:max-w-lg">
      <Image
        width={width}
        height={height}
        src={"https:" + url}
        className="object-cover w-full h-64"
        alt=""
      />
      <div className="py-5 border-2 border-t-0 p-2 rounded">
        <p className="mb-2 text-xs font-semibold text-[color:var(--primary-clr)] uppercase">
          {date.replace("T", " at ").slice(0, 19)}
        </p>
        <h2 className="text-2xl font-bold leading-5 my-4">{title}</h2>

        <p className="mb-4 text-[color:var(--primary-clr)] p-2">
          {documentToReactComponents(content, options)}
        </p>
        <Link href={"/blog/" + slug}>read more</Link>
      </div>
    </article>
  );
}
