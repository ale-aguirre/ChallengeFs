import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductList from './ProductList'
import ProductoLista from './ProductoLista.jsx'
import ProductCard from './ProductCard'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <ProductoLista/>
            <Footer/>
        </div>
    )
}

export default Home
