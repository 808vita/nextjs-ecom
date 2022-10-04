import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'


export default function Home() {
  return (
    <div>
     <Header/>
     <ProductCard/>
     <ProductCard/>
    </div>
  )
}
