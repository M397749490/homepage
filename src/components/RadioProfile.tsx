export function RadioProfile() {
  return (
    <div className="border-2 border-green-700 p-4 bg-green-950/30 my-6 font-vt323 shadow-[0_0_10px_rgba(0,255,0,0.1)]">
      <h2 className="text-xl border-b-2 border-green-700 mb-2 pb-1 flex justify-between">
        <span>STATION INFO</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="text-green-600 block text-sm">CALLSIGN</span> 
          <span className="text-3xl font-bold text-green-300 tracking-widest">BI3BFG</span>
        </div>
        <div>
          <span className="text-green-600 block text-sm">MODE</span>
          <span className="text-xl">FM / CW / SSTV</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-green-600 block text-sm">GRID (HOME)</span>
            <span className="text-xl">OM89pb</span>
          </div>
          <div>
            <span className="text-green-600 block text-sm">GRID (SCHOOL)</span>
            <span className="text-xl">PN35ir</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-green-600 block text-sm">RIG</span>
            <span className="text-xl">UV-K6</span>
          </div>
        </div>
      </div>
    </div>
  );
}
