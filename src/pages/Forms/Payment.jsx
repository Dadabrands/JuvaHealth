
const Payment = () => {
  return (
    <div className="flex flex-col mt-8 max-md:mt-10 max-md:max-w-full">
    
      <div className="mt-2 text-5xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Payment process
      </div>
      <div className="mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-0 self-start text-lg rounded-lg border border-solid border-[color:var(--UI-Gray-20,#CFCFD2)]">
                <div className="justify-center px-4 py-5 text-purple-800 whitespace-nowrap bg-fuchsia-200 border-r border-solid border-r-[color:var(--UI-Gray-20,#CFCFD2)]">
                  PAY IN
                </div>
                <div className="flex gap-5 justify-between px-2 py-5 text-gray-900 rounded-md">
                  <div className="flex-auto">Nigeria Naira (₦)</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/349eda318c7bf13da1b9f5ad8d3130c664b3cc1972f8a5f511d0371eb63b346f?"
                    className="my-auto w-4 aspect-square"
                  />
                </div>
              </div>
              <div className="self-start mt-9 ml-3 text-xl font-semibold text-gray-900 whitespace-nowrap max-md:ml-2.5">
                Payment method
              </div>
              <div className="flex gap-0 pr-10 mt-4 text-lg font-semibold whitespace-nowrap text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="grow justify-center py-2.5 pr-11 pl-2.5 text-purple-800 border-b-2 border-solid border-b-purple-800 max-md:pr-5">
                  Use Credit/Debit
                </div>
                <div className="grow justify-center items-start py-2.5 pr-16 pl-2.5 bg-purple-50 border-solid border-l-[0.5px] border-l-stone-300 max-md:pr-5">
                  Bank Transfer
                </div>
                <div className="grow justify-center items-start py-2.5 pr-16 pl-2.5 bg-purple-50 border-solid border-l-[0.5px] border-l-stone-300 max-md:pr-5">
                  Use USSD
                </div>
              </div>
              <div className="self-start mt-12 text-zinc-500 max-md:mt-10">
                Billing country/region
              </div>
              <div className="flex gap-5 justify-between px-2 py-3.5 mt-2 max-w-full text-lg whitespace-nowrap rounded-md border border-solid border-slate-500 text-zinc-700 w-[260px]">
                <div>Nigeria</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/61a079062e356f4d34e6c4a9f92be8b1e1783be356dd069da39089a1ffd7f096?"
                  className="my-auto w-4 aspect-square"
                />
              </div>
              <div className="mt-8 text-xl font-semibold text-gray-900 max-md:max-w-full">
                Credit/Debit Card Info
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap text-zinc-700 max-md:flex-wrap max-md:max-w-full">
                <div className="grow justify-center items-start py-2.5 pr-16 pl-2.5 border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] max-md:pr-5">
                  Name on card
                </div>
                <div className="grow justify-center items-start py-2.5 pr-16 pl-2.5 border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] max-md:pr-5">
                  Card number
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-4 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="grow justify-center items-start py-2.5 pr-16 pl-2.5 border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] text-zinc-700 max-md:pr-5">
                  Expires (MM/YY)
                </div>
                <div className="grow justify-center items-start self-start py-2.5 pr-16 pl-2.5 border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] text-zinc-500 max-md:pr-5">
                  CVV / CVC
                </div>
              </div>
              <div className="flex gap-3 self-start py-2.5 mt-4 whitespace-nowrap text-zinc-900">
                <div className="w-6 h-6 rounded border border-solid border-neutral-400" />
                <div className="grow self-start mt-1">
                  Save my card for future use.
                </div>
              </div>
              <div className="mt-8 text-xl font-semibold text-gray-900 max-md:max-w-full">
                Billing Address
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap text-zinc-700 max-md:flex-wrap max-md:max-w-full">
                <div className="grow justify-center items-start py-2.5 pr-16 pl-2.5 border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] max-md:pr-5">
                  Address 1
                </div>
                <div className="grow justify-center items-start py-2.5 pr-16 pl-2.5 border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] max-md:pr-5">
                  Address 2 (optional)
                </div>
              </div>
              <div className="justify-center items-start py-2.5 pr-16 pl-2.5 mt-4 max-w-full whitespace-nowrap border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] text-zinc-500 w-[300px] max-md:pr-5">
                Postcode
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-between items-end self-stretch max-md:mt-10">
              <div className="flex flex-col self-stretch px-6 py-11 w-full bg-purple-50 rounded-3xl max-md:px-5">
                <div className="text-2xl font-bold whitespace-nowrap text-stone-500">
                  Transaction Summary
                </div>
                <div className="flex gap-5 justify-between mt-10 max-md:mt-10">
                  <div className="flex-auto text-lg font-medium text-stone-500">
                    Consultation fee:
                  </div>
                  <div className="text-xl font-bold text-gray-900">₦5,000</div>
                </div>
                <div className="shrink-0 mt-36 h-px bg-neutral-300 max-md:mt-10" />
                <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                  <div className="self-start mt-2 text-2xl font-semibold text-stone-500">
                    Total
                  </div>
                  <div className="flex-auto text-3xl font-bold text-purple-800">
                    ₦5,000
                  </div>
                </div>
              </div>
              <div className="mt-32 text-2xl text-gray-900 max-md:mt-10">
                Total
              </div>
              <div className="mt-3 text-5xl font-bold text-slate-800 max-md:text-4xl">
                ₦5,000
              </div>
              <div className="justify-center px-4 py-5 mt-6 text-lg font-semibold text-white whitespace-nowrap bg-purple-800 rounded-xl">
                Agree and pay now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Payment