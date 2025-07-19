'use client'
import { Card } from "../../components/Card";

interface Publication{
  name:string
  imageUrl: string
}

const publicationArray: Publication[] = [
  {name: 'Matheus', imageUrl: '/img/Matheus.jpg'},
  {name: 'Matheus', imageUrl: '/img/Matheus.jpg'},
  {name: 'Matheus', imageUrl: '/img/Matheus.jpg'},
  {name: 'Matheus', imageUrl: '/img/Matheus.jpg'},
  {name: 'Matheus', imageUrl: '/img/Matheus.jpg'},
  {name: 'Matheus', imageUrl: '/img/Matheus.jpg'},
  {name: 'Matheus', imageUrl: '/img/Matheus.jpg'},
]

function handlePage(publicationArray:Publication[]) {
  const result = publicationArray.map((e, i) => {
    return <Card key={i} name={e.name} imageUrl={e.imageUrl} />

  })
  return result
}

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap w-fit bg-black h-screen">
      {handlePage(publicationArray)}
    </main>
  );
}
