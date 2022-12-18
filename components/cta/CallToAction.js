import Button from "@components/button/Button";

export default function CallToAction() {
  const btnStyles = {
    background: "bg-[color:var(--primary-clr)]",
    border: "border-[color:var(--primary-clr)]",
    textHover: "hover:text-[color:var(--primary-clr)]",
  };

  return (
    <section className="flex-center flex-col py-8">
      <p className="my-8 text-sm lg:text-md">LET&apos;S WORK TOGETHER</p>

      <h6 className="heading-styles text-4xl lg:text-7xl tracking-widest text-center">
        I CAN&apos;T WAIT TO HEAR FROM YOU
      </h6>

      <p className="my-8 text-md lg:text-xl">I&apos;LL SHOW YOU HOW BEAUTIFUL THE WORLD IS</p>
      <Button styles={btnStyles} href="/contact">
        get in touch
      </Button>
    </section>
  );
}
