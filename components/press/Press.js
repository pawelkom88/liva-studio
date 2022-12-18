import Link from "next/link";
import Image from "next/image";

export default function Press() {

  return (
    <section className="-mt-8 lg:mt-0 mb-12">
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid large:gap-20 gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center md:pr-8 xl:pr-0 lg:max-w-lg order-1">
            <div className="max-w-xl mb-6 text-left large:flex-center large:flex-col">
              <h4 className="max-w-lg mb-6 large:text-center heading-styles tracking-tight text-[color:var(--primary-clr)] sm:leading-loose">
                OUR LATES ON INSTAGRAM
              </h4>
              <p className="text-base large:text-center md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
              </p>
            </div>
            <div className="large:text-left text-right">
              <Link
                className="underline font-semibold ml-8 hover:text-[color:var(--secondary-clr)]"
                href="/">
                Learn more
              </Link>
              <svg className="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
          <div className="flex-center order-2">
            <div className="flex flex-col items-end ">
              <Image
                width={160}
                height={192}
                className="relative -mr-8 object-cover mb-6 rounded shadow-lg h-48 xl:h-72 w-48 xl:w-72 z-10"
                src="https://scontent.flhr6-1.fna.fbcdn.net/v/t39.30808-6/278243342_1667298410280418_7852507031280963432_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=SI6Y_kioZuMAX-jMG5k&_nc_ht=scontent.flhr6-1.fna&oh=00_AfDO2gsmW_0L35SSFIhZAta39SKUsp45DUtj_AA0Fmfe0Q&oe=63A2660D"
                alt=""
              />
              <Image
                width={228}
                height={228}
                className="-mr-6 object-cover  rounded shadow-lg h-32 xl:h-44 w-32 xl:w-44"
                src="https://scontent.flhr6-1.fna.fbcdn.net/v/t39.30808-6/292083784_1724267224583536_286574393802491749_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=pu9MeKkIlZAAX-QP07r&_nc_ht=scontent.flhr6-1.fna&oh=00_AfCAmxma8767Wf811eiCSkepIxzEBvEfDTvrdGNdr0NTAA&oe=63A2B80D"
                alt=""
              />
            </div>

            <Image
              width={256}
              height={256}
              className="object-cover rounded shadow-lg h-64 xl:h-96 w-64 xl:w-96"
              src="https://scontent.flhr6-1.fna.fbcdn.net/v/t39.30808-6/289968917_1718155045194754_8451991120748487385_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=lX7pbW1NqPEAX-3NSgN&_nc_ht=scontent.flhr6-1.fna&oh=00_AfBJwbTIRP1D5XJVe74_Zj1RUD_c-mxnf6KUZNuK1TvIEA&oe=63A34CC9"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
