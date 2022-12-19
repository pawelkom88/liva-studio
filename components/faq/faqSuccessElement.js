export default function FaqSuccessElement({}) {
  return (
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
        <p className="text-[color:var(--primary-clr)]" />
      </div>
    </div>
  );
}
