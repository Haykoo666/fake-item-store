import Footer from './components/Footer'
import Header from './components/Header'
import Items from './components/items/Items'
import './styles/App.css'
import { ToastContainer  } from 'react-toastify';
import Categories from './components/Categories';
import PaginationControl from './components/PaginationControl';
import { SkeletonTheme } from 'react-loading-skeleton';


function App() {

  return (
    <div className="container">
      <SkeletonTheme >
        <ToastContainer />
        <Header />
        <Categories />
        <Items />
        <PaginationControl />
      </SkeletonTheme>
      <Footer />
    </div>
  )
}

export default App
