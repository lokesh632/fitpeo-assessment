import {lazy, useId} from 'react'

const Table = () => {
    const uid=useId();
    const salesData=[
        {
            title:'Product 1',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            image:'https://elements-cover-images-0.imgix.net/c031d43f-427a-4a2b-b428-61c29806a4a1?auto=compress%2Cformat&fit=max&w=900&s=2a9a6cb7aab80522a1d1a6e0f3552e4f',
            stock:32,
            price:45.99,
            total:20
        },
        {
            title:'Product 2',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            image:'https://i.pinimg.com/1200x/71/1f/cf/711fcf265738a8dedd8695038c4ac28c.jpg',
            stock:30,
            price:54.59,
            total:39
        },
        {
            title:'Product 3',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            image:'https://i.pinimg.com/1200x/2d/4f/46/2d4f46487391afc61a74edddc31b1a0f.jpg',
            stock:12,
            price:30.99,
            total:23
        }
    ];

  return (
    <div className='mt-8 bg-white rounded-md px-6 py-4'>
        <div className='flex flex-wrap justify-between items-center mb-8'>
            <h3 className='text-gray-900 text-left text-xl font-semibold'>Product Sell</h3>
            <form className="lg:pl-2">
                <div className='flex items-center gap-2'>

                <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> </svg>
                </div>
                <input 
                type="text" 
                name="email" 
                id="table-search" 
                className="bg-gray-100 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block text-left pl-9 p-2.5 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder="Search"
                />
                </div>

                <div>
                    <select id="days" defaultValue="30" className="bg-gray-100 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option className='text-left' value="30" selected>Last 30 days</option>
                        <option className='text-left' value="15">Last 15 days</option>
                        <option className='text-left' value="7">Last 7 days</option>
                    </select>
                </div>
                </div>
            </form>           
        </div>

        {/* <article className='overflow-auto'>

            <div className='grid grid-cols-8 text-gray-600 mb-3 text-md'>
                <div className='col-span-5 text-left'>
                    Product Name
                </div>
                <div className='col-span-1'>Stock</div>
                <div className='col-span-1'>Price</div>
                <div className='col-span-1'>Total Sales</div>
            </div>
            <hr/>

            {salesData.map((product)=><div className='grid grid-cols-8 p-1 md:py-4 md:px-2' key={uid}>
                <div className='col-span-5 flex items-center'>
                    <img 
                    src={product.image} 
                    alt={product.title} 
                    loading={lazy} 
                    className="rounded-md hidden md:block md:w-[80px]" 
                    />                    
                    <div className='flex flex-col ml-4'>
                        <p className='text-md text-left font-semibold'>{product.title}</p>
                        <p className='text-sm text-gray-400 text-left'>{product.description}</p>
                    </div>
                </div>
                <div className='col-span-1 flex items-center'>{product.stock}</div>
                <div className='col-span-1 flex items-center text-gray-950 font-semibold'>$ {product.price}</div>
                <div className='col-span-1 flex items-center'>{product.total}</div>
            </div>)
            }
        </article> */}

        <article>
            <div className="relative overflow-x-auto">
                <table className="w-full">
                    <thead className="text-gray-600 text-sm border-b">
                        <tr>
                            <th colSpan={2} scope="col" className="font-medium text-left">
                                Product Name
                            </th>
                            <th scope="col" className="font-medium">
                                Stock
                            </th>
                            <th scope="col" className="font-medium">
                                Price
                            </th>
                            <th scope="col" className="font-medium">
                                Total Sales
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {salesData.map((product)=><tr className="bg-white dark:bg-white dark:border-gray-700 text-sm">
                            <td className="py-2 w-auto md:w-20">
                                <img 
                                src={product.image} 
                                alt={product.title} 
                                loading={lazy} 
                                className="rounded-md" 
                                />     
                            </td>
                            <td colSpan={1} scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex flex-col ml-4'>
                                    <p className='text-md text-left font-semibold'>{product.title}</p>
                                    <p className='text-xs text-gray-400 text-left'>{product.description}</p>
                                </div>
                            </td>
                            <td className="py-2">
                                {product.stock} in stock
                            </td>
                            <td className="py-2 font-semibold">
                                $ {product.price}
                            </td>
                            <td className="py-2">
                                {product.total}
                            </td>
                            
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>

        </article>

    </div>
  )
}

export default Table