import Button from "@components/UI/button/Button";

const btnStyles = {
  background: "bg-[color:var(--primary-clr)]",
  border: "border-[color:var(--primary-clr)]",
  textHover: "hover:text-[color:var(--primary-clr)]",
};

export default function OfferImage({ details }) {
  return (
    <div className="relative h-96 overflow-hidden group">
      <div
        className={`border-2 h-full flex-center filter hover:scale-110 transition-all duration-1000 ease-in-out ${details.bg}`}>
        <h2 className="heading-styles text-white">{details.title}</h2>
        <div class="h-full opacity-0 group-hover:opacity-100 duration-1000 absolute inset-x-0 bottom-0 flex-center flex-col text-xl bg-[color:var(--secondary-clr)] text-gray-900 font-semibold z-20">
          <p className="mb-4 text-sm">{details.desc}</p>
          <Button href={details.link} styles={btnStyles}>
            Check it out
          </Button>
        </div>
      </div>
    </div>
  );
}
