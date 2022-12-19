// import Image from "next/image";
// import Link from "next/link";


// import { createClient } from "contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

// export async function getStaticPaths() {
//   const response = await client.getEntries();

//   const paths = response.items.map(item => {
//     return {
//       params: { slug: item.fields.slug },
//     };
//   });

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const { items } = await client.getEntries({
//     content_type: "sikorskaNotary",
//     "fields.slug": params.slug,
//   });

//   if (!items.length) {
//     return {
//       redirect: {
//         destination: "Home",
//         permanent: false,
//       },
//     };
//   }

//   return { props: { post: items[0] }, revalidate: 60 };
// }

// export default function BlogDetails({ post }) {
//   const { title, slug, thumbnail, featuredImage, content1, date } = post.fields;
//   const { url } = thumbnail.fields.file;
//   const { width, height } = featuredImage.fields.file.details.image;
//   return (
//     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
//         <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
//           <a href="/" aria-label="Article">
//             <img
//               src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
//               className="object-cover w-full h-64 rounded"
//               alt=""
//             />
//           </a>
//           <div className="py-5">
//             <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">13 Jul 2020</p>
//             <a
//               href="/"
//               aria-label="Article"
//               className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
//               <p className="text-2xl font-bold leading-5">Diving to the deep</p>
//             </a>
//             <p className="mb-4 text-gray-700">
//               Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni
//               voluptatem doloremque.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="/"
//                 aria-label="Likes"
//                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
//                 <div className="mr-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
//                     <polyline points="6 23 1 23 1 12 6 12" fill="none" strokeMiterlimit="10" />
//                     <path
//                       d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeMiterlimit="10"
//                     />
//                   </svg>
//                 </div>
//                 <p className="font-semibold">7.4K</p>
//               </a>
//               <a
//                 href="/"
//                 aria-label="Comments"
//                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
//                 <div className="mr-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
//                     <polyline
//                       points="23 5 23 18 19 18 19 22 13 18 12 18"
//                       fill="none"
//                       strokeMiterlimit="10"
//                     />
//                     <polygon
//                       points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeMiterlimit="10"
//                     />
//                   </svg>
//                 </div>
//                 <p className="font-semibold">81</p>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
//           <a href="/" aria-label="Article">
//             <img
//               src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
//               className="object-cover w-full h-64 rounded"
//               alt=""
//             />
//           </a>
//           <div className="py-5">
//             <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">4 Nov 2020</p>
//             <a
//               href="/"
//               aria-label="Article"
//               className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
//               <p className="text-2xl font-bold leading-5">Conquer the World</p>
//             </a>
//             <p className="mb-4 text-gray-700">
//               Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni
//               voluptatem doloremque.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="/"
//                 aria-label="Likes"
//                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
//                 <div className="mr-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
//                     <polyline points="6 23 1 23 1 12 6 12" fill="none" strokeMiterlimit="10" />
//                     <path
//                       d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeMiterlimit="10"
//                     />
//                   </svg>
//                 </div>
//                 <p className="font-semibold">7.4K</p>
//               </a>
//               <a
//                 href="/"
//                 aria-label="Comments"
//                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
//                 <div className="mr-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
//                     <polyline
//                       points="23 5 23 18 19 18 19 22 13 18 12 18"
//                       fill="none"
//                       strokeMiterlimit="10"
//                     />
//                     <polygon
//                       points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeMiterlimit="10"
//                     />
//                   </svg>
//                 </div>
//                 <p className="font-semibold">81</p>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
//           <a href="/" aria-label="Article">
//             <img
//               src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//               className="object-cover w-full h-64 rounded"
//               alt=""
//             />
//           </a>
//           <div className="py-5">
//             <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">28 Dec 2020</p>
//             <a
//               href="/"
//               aria-label="Article"
//               className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
//               <p className="text-2xl font-bold leading-5">Explore the beautiful</p>
//             </a>
//             <p className="mb-4 text-gray-700">
//               Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni
//               voluptatem doloremque.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="/"
//                 aria-label="Likes"
//                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
//                 <div className="mr-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
//                     <polyline points="6 23 1 23 1 12 6 12" fill="none" strokeMiterlimit="10" />
//                     <path
//                       d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeMiterlimit="10"
//                     />
//                   </svg>
//                 </div>
//                 <p className="font-semibold">7.4K</p>
//               </a>
//               <a
//                 href="/"
//                 aria-label="Comments"
//                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
//                 <div className="mr-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
//                     <polyline
//                       points="23 5 23 18 19 18 19 22 13 18 12 18"
//                       fill="none"
//                       strokeMiterlimit="10"
//                     />
//                     <polygon
//                       points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeMiterlimit="10"
//                     />
//                   </svg>
//                 </div>
//                 <p className="font-semibold">81</p>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// // <>
// //   <h1 style={{ margin: "2rem 0" }} className="heading">
// //     {title}
// //   </h1>
// //   <figure>
// //     <Image src={"https:" + url} alt="blog post image" width={width} height={height} />
// //     <figcaption style={{ fontSize: ".8rem" }}>
// //       <i>Image source: {"https:" + url}</i>
// //     </figcaption>
// //   </figure>
// //   <div style={{ margin: "2rem 0" }} className="paragraph">
// //     {documentToReactComponents(content1)}
// //   </div>
// //   <div style={{ margin: "2rem 0" }}>
// //     <h5>Patrycja Sikorska</h5>
// //     <small>{date.replace("T", " at ").slice(0, 19)}</small>
// //   </div>
// //   <span style={{ margin: "2rem 0" }} className="underline">
// //     <Link href="../blog">back to blog</Link>
// //   </span>
// // </>
