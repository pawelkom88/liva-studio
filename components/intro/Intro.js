import Article from "../article/Article";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="mx-auto mt-12 px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pt-8">
      <Article heading="Bristol newborn and maternity photographers">
        Bristol is a city that celebrates the beauty of life. From its vibrant arts and culture
        scene to its stunning natural surroundings. What could be more beautiful than the arrival of a new baby?
      </Article>

      <Article>
        At Liva Studio, we believe that every family deserves to have beautiful photos of their
        newborn baby. We are passionate about capturing the special moments of your pregnancy and
        early parenthood, and we will work with you to create images that you will cherish for years
        to come.
      </Article>

      <Article heading="Our Philosophy">
        We are experienced in newborn and maternity photography, and I know how to handle little
        ones and make sure they are comfortable and safe during the shoot. We also have a wide
        variety of props and settings to choose from, so you can create the perfect photos for your
        family.
      </Article>
      <Article>
        Every family is unique, and we strive to create custom photography sessions that reflect the
        personality of each family. We take the time to get to know you and your family so that we
        can create a unique and personal experience that you will remember for years to come.
      </Article>

      <article>
        <h2 className="heading-styles mb-8 mt-12 text-center">Our incredible package</h2>
        <ul className="text-md mx-auto max-w-readable indent-5 text-gray-900 lg:text-lg">
          <li className="my-2 indent-5">
            <strong>Newborn photography</strong>: Choose from a variety of newborn photography
            packages to suit your needs. Our sessions are relaxed and stress-free, and we take the
            time to get to know you and your baby so that we can capture their unique personality.
          </li>
          <li className="my-2 indent-5">
            <strong>Maternity photography</strong>: Select from a range of maternity photography
            sessions to capture your pregnancy journey. Our sessions are designed to be fun and
            relaxed, and we will work with you to create a beautiful and timeless portrait of your
            growing family.
          </li>
          <li className="my-2 indent-5">
            <strong>Family photography</strong>: Pick from a selection of family photoshoots to capture your family&apos;s one-of-a-kind moments. Our sessions are tailored
            to your family&apos;s needs and interests, and we will work with you to create a
            beautiful and lasting memory. We have had the privilege of working with many wonderful
            families over the years.
          </li>
          <li>
            <Link href="/offer" className="underline">
              Click here to see full offer
            </Link>
          </li>
        </ul>
      </article>
    </section>
  );
}
