import { Link } from 'react-router-dom'
import Cards from './Cards'
import axios from 'axios'
import { useEffect, useState } from 'react'
function Course() {

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/books");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
            console.log(error);
      }
    };
    getBook();
  }, []);
  
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='pt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We&apos;re delighted to have you <span className='text-pink-500'>Here! :)</span>
          </h1>
          <p className='mt-12 text-wrap'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim perspiciatis suscipit
            quod eveniet. Autem, in nulla architecto vero tempora quasi veniam aut suscipit et laborum
            consequuntur cumque reiciendis vel!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim perspiciatis suscipit
            quod eveniet. Autem, in nulla architecto vero tempora quasi veniam aut suscipit et laborum
            consequuntur cumque reiciendis vel!
          </p>
          <Link to="/">
            <button className='bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {book.map((item) => (
            <Cards item={item} key={item.key} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course