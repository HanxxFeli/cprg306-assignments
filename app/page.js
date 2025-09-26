import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link href="/week-2">Go to the Week 2 page</Link></li>
        <li><Link href="/week-3">Go to the Week 3 page</Link></li>
      </ul>
    </main>
  );
}