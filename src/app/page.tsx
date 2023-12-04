import Image from 'next/image';
import Link from "next/link";

async function getCategories() {
  const res = await fetch('http://localhost:5000/api/categories');

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

export default async function Home() {
  const categories = await getCategories();

  return (
      <main>
        <ul className={'flex justify-center text-center'}>
          {categories.map(category => (
              <li className={'border border-black border-solid'}>
                <Link
                    href={'/' + category.name.toLowerCase()}
                    key={category.id}
                    className={'block p-3'}
                >
                  {category.name}
                </Link>
              </li>
          ))}
        </ul>
      </main>
  )
}
