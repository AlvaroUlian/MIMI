import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home() {
  const [items, setItems] = useState(null)

  // useEffect(() => {
  //   fetch('https://api.escuelajs.co/api/v1/products')
  //     .then(response => response.json())
  //     .then(data => setItems(data))
  // }, [])

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-purple-400">
        <h1 className="text-4xl font-bold text-white mb-4">🚧 ¡Página en construcción! 🚧</h1>
        <p className="text-lg text-white mb-8 text-center">
          Estamos trabajando para traerte algo increíble. <br />
          Mientras tanto, disfruta de un café ☕ o da un paseo 🌳.
        </p>
        <div className="relative w-64 h-64">
          <div className="absolute top-0 left-0 w-full h-full bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 rounded-full"></div>
          <div className="absolute top-8 left-8 w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-3xl">🔧</span>
          </div>
        </div>
        <a
          href="#"
          className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-purple-100"
        >
          Volver pronto
        </a>
      </div>

      Productos
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home