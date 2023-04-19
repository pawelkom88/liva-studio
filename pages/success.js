export default function success() {
  return (
    <div className="flex-center flex-col mt-8 mb-24 min-h-[60vh] lg:min-h-[25vh]">
      <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
        <path
          fill="currentColor"
          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
      </svg>
      <div className="text-center">
        <h3 className="heading-styles my-4 text-center">All Done!</h3>
        <p className="text-lg my-2">Thank you for your message</p>
        <p> We&apos;ll get back to you as soon as we can !</p>
        <p> Have a great day! </p>
      </div>
    </div>
  );
}
