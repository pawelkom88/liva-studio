import Image from "next/image";

export default function ReviewCotent({ review }) {
  // if (!review) return <SkeletonLoader />;
  const { name, avatar, content, date, numberOfStars } = review.fields;
  const { url } = avatar[0].fields?.file;

  return (
    <div className="w-full h-[435px] lg:h-[375px] lg:col-span-2 ">
      <blockquote className="flex h-full flex-col justify-between bg-white p-8 shadow-lg">
        
          <div className="flex items-center justify-start gap-0.5">
            <Image
              width={80}
              height={80}
              className="rounded-full mr-4"
              src={"https:" + url}
              alt="asad"
            />
            {new Array(numberOfStars).fill("star")?.map((_, idx) => {
              return (
                <svg
                  key={idx}
                  className="h-5 w-5"
                  fill="gold"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              );
            })}
          </div>
          <div className="mt-4 text-[color:var(--primary-clr)]">
            <p className="text-2xl font-bold sm:text-3xl mr-4">{name}</p>
            <time className="text-sm" datetime={date}>
              {date.replace("T", " at ").slice(0, 19)}
            </time>
            <p className="mt-4 italic leading-relaxed">{content}</p>
          </div>
        
        <footer className="mt-8 text-sm text-gray-500">&mdash; {name}</footer>
      </blockquote>
    </div>
  );
}
