import { useEffect, useState } from "react";
import BoardSearchComponent from "../board/BoardSearchComponent";
import PagingComponent from "../../commonComponents/PagingComponent";
import { getListByMno } from "../../../api/adminAPI";

const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO: null
  }

const FarmerProductListComponent = ({queryObj, setSearch, moveProductReadPage, moveSearch, movePage, mno}) => {

    const [products, setProducts] = useState(initState)

    useEffect(() => {

      getListByMno(queryObj, mno).then(data => {

          console.log("get List By Mno........................")
          console.log(data.dtoList)

          setProducts(data)

      })

    }, [queryObj])

    console.log("products...............................")
    console.log(products.dtoList)


    return (     
        <div className="container h-[1200px] mt-3">
      {/* <ul className="flex flex-wrap container items-center justify-center mt-2 "> */}
 
        <BoardSearchComponent queryObj={queryObj} moveSearch={moveSearch}></BoardSearchComponent>

        {products !== null && products.dtoList.length > 0 ? 
            
        <div className="justify-center items-center container mt-3">
  
        <table className="items-center justify-center container">

          <thead>
            <tr className="border-b-2 border-gray-300 bg-gray-200 text-center h-12">
                <th className="w-1/12">No</th>
                <th className="w-1/12"></th>
                <th className="w-2/12">Name</th>
                <th className="w-1/12">Price</th>
                <th className="w-2/12">Time</th>
                <th className="w-1/12">View</th>      
            </tr>
          </thead>

          <tbody>
            {products.dtoList.map( ({pno, pname, modDate, view, price, fname}) => 
              <tr className="border-b-2 border-gray-300 text-center h-12 hover:bg-gray-200"
                  key={pno}>
                <td>{pno}</td>
                <td className="p-2 items-center justify-center">
                  <img src={`http://192.168.0.48/s_${fname}`} className="w-20 h-20"  alt="No image"></img>
                </td>
                <td className="text-left hover:underline hover:cursor-pointer" onClick={() => moveProductReadPage(pno)}>{pname}</td>
                <td>{price}</td>
                <td>{modDate}</td>
                <td>{view}</td>
              </tr>
            
            )}
          </tbody>
        </table>
        </div>

        : 

        <div className="justify-center items-center container mt-3">
  
        <table className="items-center justify-center container">

          <thead>
            <tr className="border-b-2 border-gray-300 bg-gray-200 text-center h-12">
                <th className="w-1/12">No</th>
                <th className="w-1/12"></th>
                <th className="w-2/12">Name</th>
                <th className="w-1/12">Price</th>    
                <th className="w-2/12">Email</th>    
                <th className="w-2/12">Time</th>
                <th className="w-1/12">View</th>       
            </tr>
          </thead>
          </table>
          <div className="text-center mt-5 text-gray-500">등록된 게시물이 없습니다.</div>
          </div>}

        <PagingComponent movePage={movePage} {...products}></PagingComponent>

        

        </div>
    );
}
 
export default FarmerProductListComponent;