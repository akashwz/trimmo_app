"use client";
import Button from "../ui/Button";

const FeaturesSection = () => {

  return (
    <div class="container max-w-[1530px] mx-auto flex flex-col sm:flex-col container-responsive responsive-section justify-between animate-fade-in-up py-[100px]">

      <div class="flex justify-between items-start mb-8 flex-wrap gap-4">
        <h1 class="text-2xl md:text-4xl font-semibold">
          Lorem Ipsum is simply dummy text of the <br></br><span class="font-bold">printing</span> and <span class="text-gray-500">typesetting</span> industry.
        </h1>
        <a href="#" class="flex items-center text-sm text-gray-700 hover:underline">
          Read More
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="flex w-full gap-4">
        <div class="bg-amber-50 p-6 rounded-lg min-h-[200px] flex flex-col justify-between">
          <div>
            <h2 class="font-semibold mb-2">Real-time analytics to measure what works</h2>
            <p class="text-sm text-gray-600">Create your free Trimme profile and start sharing smarter.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <h3 class="font-semibold mb-2">Beautiful templates that speak your brand</h3>
              <p class="text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
            </div>
            <Button className="bg-[#cefc6c] text-black hover:bg-[#cefc6c]/90 rounded-[27.5px] px-[37px] py-[13px]">
              <span className="flex items-center justify-center [font-family:'PolySans-Median',Helvetica] font-normal text-base">
                Start Building<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Button>
          </div>

          <div class="bg-amber-50 p-6 rounded-lg min-h-[200px] flex flex-col justify-between">
            <div>
              <h2 class="font-semibold mb-2">Accept payments, collect leads, run surveys</h2>
              <p class="text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
            </div>
          </div>

          <div class="md:col-span-2 bg-blue-50 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <h3 class="font-semibold mb-2">Beautiful templates that speak your brand</h3>
              <p class="text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
            </div>
            <Button className="bg-[#cefc6c] mt-10 text-black hover:bg-[#cefc6c]/90 rounded-[27.5px] px-[37px] py-[13px]">
              <span className="flex items-center justify-center [font-family:'PolySans-Median',Helvetica] font-normal text-base">
                Start Building<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default FeaturesSection;
