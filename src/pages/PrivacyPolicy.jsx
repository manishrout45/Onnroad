import React, { useEffect, useState } from "react";

// Section component with animation on scroll
function Section({ title, children }) {
  const [visible, setVisible] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`relative group mb-14 bg-white rounded-3xl p-6 md:p-10 shadow-md border border-indigo-300
        transition-shadow duration-500 hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)]
        transform transition-transform duration-700
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
      `}
    >
      {/* Left vertical gradient bar */}
      <div className="absolute left-0 top-6 bottom-6 w-2 rounded-l-3xl bg-gradient-to-b from-indigo-500 to-indigo-700 group-hover:from-indigo-700 group-hover:to-indigo-900 transition-all duration-300" />

      <h2 className="relative text-2xl md:text-4xl font-extrabold text-indigo-800 mb-6 md:mb-8 tracking-wide">
        {title}
        <span className="block w-16 md:w-20 h-1 rounded-full mt-2 md:mt-3 bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-400" />
      </h2>

      <div className="relative text-gray-900 text-sm md:text-lg leading-relaxed space-y-5 md:space-y-6">
        {React.Children.map(children, (child, idx) => (
          <div key={idx} className="flex items-start space-x-3 md:space-x-4">
            <span className="flex-shrink-0 mt-1">
              <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-700 shadow-md" />
            </span>
            <div className="flex-1">{child}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-indigo-50 shadow-[0_20px_40px_rgba(99,102,241,0.15)] relative overflow-hidden">
      {/* Decorative background shapes */}
      <svg
        className="absolute top-[-60px] left-[-60px] w-32 h-32 md:w-48 md:h-48 opacity-10 text-indigo-300"
        fill="currentColor"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>
      <svg
        className="absolute bottom-[-60px] right-[-60px] w-36 h-36 md:w-56 md:h-56 opacity-10 text-indigo-300"
        fill="currentColor"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <rect width="100" height="100" rx="20" />
      </svg>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center text-indigo-800 pt-10 my-6 md:my-10  drop-shadow-md tracking-wide select-none">
  Privacy Policy & Terms
</h1>


      <Section title="FEE POLICY">
        <>
          <p>The two-wheeler must be returned at the specified Date and Time as per the website/invoice. A delay over 15 minutes without intimation will attract Rs 50/hr penalty plus standard hourly charges.</p>
          <p>Trip extension requests must be made at least 1 hour before drop-off. Requests are confirmed/denied based on bike availability. Unauthorized extensions will attract Rs.100/hr plus hourly rent.</p>
          <p>Lending the vehicle without informing ONNROAD and verifying the additional rider&apos;s documents will attract a Rs. 1000 penalty.</p>
          <p>Minor helmet damages: Rs. 200; major damages or loss: Rs. 500.</p>
          <p>Over-speeding fines: Rs. 100 for exceeding 80 km/hr (&lt; 125 CC) or 100 km/hr (&gt; 150 CC). GPS-based monitoring applies.</p>
          <p>Servicing every 1500 Kms is mandatory. Invoices must be shared or a fine will be calculated.</p>
          <p>In case of damage due to mishandling/accident, the customer must pay the calculated cost plus daily rent until the bike is rentable again.</p>
          <p>In case of theft, the full market value of the vehicle must be paid.</p>
          <p>Engine issues must be reported before repairs. Reimbursement only on valid printed invoices.</p>
          <p>Refunds take 7–10 business days to reflect in your bank account.</p>
          <p>Minimum age: 18 years. For super-bikes (&gt; 200 CC): 21 years. Bookings by underage riders will be canceled without a refund.</p>

          <div>
            <p>Required Documents:</p>
            <div className="ml-6 md:ml-10 space-y-2 text-gray-700 text-sm md:text-base">
              <div className="flex items-start space-x-3 md:space-x-4">
                <span className="flex-shrink-0 mt-1">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-300 shadow-sm" />
                </span>
                <p>Driving License (original for verification)</p>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4">
                <span className="flex-shrink-0 mt-1">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-300 shadow-sm" />
                </span>
                <p>Passport, Election Card, Aadhaar Card (submit one at pickup; returned at drop-off)</p>
              </div>
            </div>
          </div>

          <p>Operational hours: 8 AM to 8 PM. No pickups/drop-offs before 11 AM or after 8 PM.</p>
          <p>Bookings are subject to availability. ONNROAD reserves the right to cancel any booking.</p>
          <p>Complimentary helmets must be returned undamaged.</p>
          <p>Riders must follow traffic rules. All challans due to negligence are to be paid by the rider.</p>
          <p>Drunk/drugged driving is prohibited. Customers bear full liability for resulting damages.</p>
          <p>Bikes must be dropped at FLOOR NO-501, SHREE PALACE, VIP ROAD, PURI. Drop location changes are not allowed.</p>
          <p>Trip extensions are subject to availability and must be requested beforehand.</p>
          <p>Pickup date/time/location cannot be changed post booking confirmation.</p>
          <p>Rule violations (e.g., over-speeding or drunk driving) will be solely the rider’s responsibility.</p>
        </>
      </Section>

      <Section title="TRIP EXTENSION">
        <>
          <p>Requests should be made at least 2 hours before drop-off via phone to customer care or field executive.</p>
          <p>Approval depends on bike availability per booking schedule.</p>
          <p>Extension charges are as per standard rates.</p>
        </>
      </Section>

      <Section title="BOOKING CANCELLATION">
        <>
          <p>Cancellation within 0-24 hours before the trip: No refund; full amount is charged as a cancellation fee.</p>
          <p>Cancellation more than 24 hours before the trip: 20% charged as cancellation fee; 80% refunded within 7-10 business days.</p>
          <p>If ONNROAD cancels a booking, a full refund will be issued and reflected within 7-10 business days.</p>
        </>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
