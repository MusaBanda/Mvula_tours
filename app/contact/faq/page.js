'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";

function FAQ() {


  const router = useRouter();

  const goToForm = (formNumber) => {
    router.push(`/booking?form=${formNumber}`);
  };

  return (
    <div>
      <div className="flex justify-center bg-black">
        <Image width={200} height={200} src="/logo/logo1.png" alt="logo" />
      </div>
      <div>
        <h1 className="p-1 h-[5vh] bg-gray-200">Frequently Asked Questions</h1>
      </div>
      <div className="p-4 cursor-pointer">

        <details className="mb-4 border-b">
          <summary>What is Mvula Tours?</summary>
          <p className="bg-gray-200 p-10">Mvula Tours is a travel company offering personalized tours to make every trip memorable.</p>
        </details>

        <details className="mb-4 border-b ">
          <summary>What services do you offer?</summary>
          <p className="bg-gray-200 p-10">We offer a variety of services including flight bookings, hotel reservations, and customized tour packages.
            <p>For more information<link className="text-blue-500 text-2xl" href="/"> Click here</link>.</p>
          </p>
        </details>

        <details className="mb-4 border-b ">
          <summary>How can I book a tour?</summary>
          <p className="bg-gray-200 p-10">You can book a tour through our website or by contacting our customer service team.
            <p>For bookings<a className="text-blue-500 text-2xl" onClick={() => goToForm(1)}> Click here</a></p>
          </p>
          
        </details>

        <details className="mb-4 border-b ">
          <summary>Are the tours customizable?</summary>
          <p className="bg-gray-200 p-10">Yes! We tailor every tour to your preferences, from destinations to activities.</p>
        </details>

      </div>
    </div>
  );
}

export default FAQ;
