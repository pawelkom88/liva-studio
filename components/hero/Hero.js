export default function Hero({ heading, children, heroImg = "", backgroundImage = " " }) {
  return (
    <div
      style={{ backgroundImage: backgroundImage }}
      className={`w-full aspect-video bg-no-repeat bg-center bg-cover h-[38rem] lg:h-[calc(100vh-139px)] ${heroImg}`}>
      <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
        <div className="text-center">
          <h1 className="heading-styles text-white tracking-wider lg:text-6xl">{heading}</h1>
          <p className="max-w-sm lg:max-w-2xl mt-4 text-white text-md lg:text-xl px-4">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
