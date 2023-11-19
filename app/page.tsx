import HomePage from '@/app/PlayerList'
import Header from '@/components/Header'
import dataset from '../public/dataset.json'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4">
        <HomePage players={dataset} />
      </div>
    </main>
  )
}
