import HomePage from '@/app/PlayerList'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4">
        <HomePage/>
      </div>
    </main>
  )
}
