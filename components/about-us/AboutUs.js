import Image from "next/legacy/image";
import Link from "next/link";
import StyledLink from "../link/StyledLink";

export default function AboutUs() {
  return (
    <section className="mx-auto px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
      <div className="my-24">
        <h2 className="heading-styles my-8 text-center">ABOUT US</h2>

        <div className="grid gap-4 lg:grid-cols-2 ">
          <Image
            width={760}
            height={507}
            src="/assets/images/MAINPAGE/ABOUT_US_HIGH.webp"
            alt="liva studio team"
          />

          <div>
            <h1 className="my-4 text-2xl font-bold lg:mt-8">LIVA STUDIO</h1>
            <p className="text-md lg:text-lg">
              Bristol specialists in newborn, maternity, and wedding photography. We use wooden
              handmade photography props to create one-of-a-kind images. Our skilled team works
              closely with clients to understand their vision and style, whether it&apos;s natural
              and authentic or more stylized. We offer mobile studio services and strive to capture
              life&apos;s precious and unique moments through our photographs. Contact us today to
              experience the Liva Studio difference.
            </p>
            <StyledLink href="about-us">Our story</StyledLink>
          </div>
        </div>
      </div>
    </section>
  );
}
