export default function Hero({ heading, children, heroImg = "", backgroundImage = " " }) {
  return (
    <div
      style={{ backgroundImage: backgroundImage }}
      className={`aspect-video h-[38rem] w-full bg-cover bg-center bg-no-repeat lg:h-[calc(100vh-139px)] ${heroImg}`}>
      <div className="flex h-full w-full items-center justify-center bg-gray-900/20">
        <div className="text-center">
          <p className="heading-styles tracking-wider text-white lg:text-8xl mx-2">{heading}</p>
          <p className="text-md mt-4 max-w-sm text-white lg:max-w-2xl lg:text-xl">{children}</p>
        </div>
      </div>
    </div>
  );
}
