import Link from "next/link";

export default function Page() {
  const weeks = [2, 3, 4, 5, 6, 7]
  
  return (
    <main className = "min-h-screen bg-emerald-100 flex flex-col items-center p-8">
      <h1 className = "text-4xl font-bold text-emerald-800 mb-8">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className = "flex flex-col gap-2">
        {weeks.map((week) => (
          <li key = {week}>
            <Link href = {`/week-${week}`}
            className = "flex flex-col items-center justify-center p-1 bg-emerald-800/50 w-75 text-center border-2 border-emerald-900/90 hover:bg-[#487558] rounded-sm"> Week: {week}    
       </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}