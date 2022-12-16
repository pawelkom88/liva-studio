import Image from "next/image";

export default function Faq() {
  return (
    <article>
      <h4 className="heading-styles text-center">HOW IT WORKS ?</h4>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="relative flex items-center bg-[color:var(--teriary-clr)] p-4">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-right-16 lg:block lg:w-16 lg:bg-[color:var(--teriary-clr)]"></span>

            <div className="lg:py-6 lg:pr-16">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24">
                        <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22" />
                        <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>

                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">Step 1</p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, deleniti!
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24">
                        <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22" />
                        <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">Step 2</p>
                  <p className="text-gray-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, in.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24">
                        <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22" />
                        <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">Step 3</p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sequi!
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24">
                        <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22" />
                        <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">Step 4</p>
                  <p className="text-gray-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, id!
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg className="w-6 text-green-700" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          points="6,12 10,16 18,8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="mb-2 text-lg font-bold text-green-700">Success</p>
                  <p className="text-gray-700" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-64 sm:h-96 my-auto">
            <Image
              width={200}
              height={200}
              className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </article>
  );
}
