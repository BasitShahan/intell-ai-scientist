import YearlyPlan from  '@/components/YearlyPlan'
export default function page() {
  return (
    <>
      <div className=" px-10 py-10 w-full h-auto">
          <div className=" w-full flex-wrap flex gap-y-7 justify-center items-center">
            {/* monthly plan */}
           <YearlyPlan/>
           <YearlyPlan/>
           <YearlyPlan/>
      
           </div>
        </div>
      </>
  )
}
