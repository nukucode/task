function Collection({ Icon, title, totalTask, pendingTask, colorCode }) {
  return (
    <div className="w-[190px] bg-[#21212b] rounded-xl py-4 px-3 h-[160px] relative">
      <div className="bg-indigo-400 w-10 h-10 rounded-xl flex items-center justify-center">
        <Icon className="h-6 w-6" />
      </div>
      <div className="absolute bottom-4 left-3 right-3">
        <h1 className="text-[20px] font-bold">{title}</h1>
        <div className="flex items-center justify-between">
          <span className="text-[#8f8f94] text-[12px]">6/10 done</span>
          <div className="border-[3px] border-indigo-400 w-5 h-5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
