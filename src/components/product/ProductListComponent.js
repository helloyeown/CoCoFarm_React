import { useEffect, useState } from "react"
import PagingComponent from "../commonComponents/PagingComponent"
import { getProductList } from "../../api/adminAPI"
import { Link } from "react-router-dom"

const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO: null,
    cateno: 1
  }

const ProductListComponent = ({queryObj , moveProductReadPage, movePage, moveSearch}) => {

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProductList(queryObj).then(data => {

            console.log("get Consumer List....................")
            console.log(data)

            setProduct(data)
        })

    }, [queryObj])


    return (  
        <div className="justify-center items-center container mt-3 ">
          
        {/* <div className="text-3xl">
          <button><Link to={"/products/register"}>REG</Link></button>
        </div> */}
  
        <table className="w-[1200px] items-center justify-center container m-auto">
  
          <thead>
            <tr className="border-b-2 border-gray-300 text-center h-12">
                <th className="w-1/12">No</th>
                <th className="w-1/12"></th>
                <th className="w-2/12">Name</th>
                <th className="w-1/12">Price</th>    
                <th className="w-2/12">Email</th>    
                <th className="w-2/12">Time</th>
                <th className="w-1/12">View</th>
            </tr>
          </thead>
  
          <tbody>
            {product.dtoList.map( ({pno, pname, price, modDate, email, fname, view}) => 
              <tr className="border-b-2 border-gray-300 text-center h-12"
                  key={pno}
                  onClick={() => moveProductReadPage(pno)}
              >
                <td>{pno}</td>
                <td className="p-2 items-center justify-center">
                  <img src={`http://192.168.0.48/s_${fname}`} className="w-20 h-20"  alt="No image"></img>
                </td>
                <td className="hover:underline hover:cursor-pointer">{pname}</td>
                <td>{price}원</td>
                <td>{email}</td>
                <td>{modDate}</td>
                <td>{view}</td>
              </tr>
            
            )}
          </tbody>
        </table>
  
        <PagingComponent movePage={movePage} {...product}></PagingComponent>
  
      </div>
    );
}
 
export default ProductListComponent;