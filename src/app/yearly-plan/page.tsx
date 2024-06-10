import YearlyPlan from "@/components/YearlyPlan";
export default function page() {
  return (
    <>
      <div className="p-14 gap-6 lg:grid lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 ">
        <div className="">
          <YearlyPlan />
        </div>
        <div className="">
          <YearlyPlan />
        </div>
        <div className="md:relative md:left-[50%] lg:left-0    md:mt-4  lg:mt-0">
          <YearlyPlan />
        </div>
      </div>

    </>
  );
}
