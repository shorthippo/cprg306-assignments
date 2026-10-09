import Link from "next/link";

export default function Page() {
  return (
    <main className = "min-h-screen bg-green-950 p-8 text-green-50">
      <h1 className = "mb-6 text-3xl font-bold text-amber-200">CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <Link href = "week-2"
      className = "inline-block rounded-full border-2 border-emerald-700 bg-emerald-100 px-9 py-1 font-semibold text-emerald-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-100 hover:border-amber-600 hover:text-amber-900"> Week 2 </Link></div>
      <div><Link href = "week-3"
      className = "inline-block rounded-full border-2 border-emerald-700 bg-emerald-100 px-9 py-1 font-semibold text-emerald-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-100 hover:border-amber-600 hover:text-amber-900"> Week 3 </Link></div>
      <div><Link href = "week-4"
      className = "inline-block rounded-full border-2 border-emerald-700 bg-emerald-100 px-9 py-1 font-semibold text-emerald-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-100 hover:border-amber-600 hover:text-amber-900"> Week 4 </Link></div>
      <div><Link href = "week-5"
      className = "inline-block rounded-full border-2 border-emerald-700 bg-emerald-100 px-9 py-1 font-semibold text-emerald-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-100 hover:border-amber-600 hover:text-amber-900"> Week 5 </Link></div>
    </main>
  )
}