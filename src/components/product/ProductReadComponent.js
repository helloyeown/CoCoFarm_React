import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { deleteProduct, readMember, readProduct, registerProduct } from "../../api/adminAPI"
import { Link, createSearchParams } from "react-router-dom"

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    modDate: '',
    mno: 0,
    email: '',
    nickname: '',
    roleName: '',
    procatename: '',
    delFlag: false,
    fname: ''
}

const ProductReadComponent = ({queryObj}) => {

    const [product, setProduct] = useState(initState)
    const {pno} = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        readProduct(pno).then(data => {

            console.log(data)
            setProduct(data)
            console.log(product)

        })

    }, [pno, product.mno])

    // 상품 삭제 확인 모달
    const handleClickDelete = () => {

      console.log("click modal")
      alert(product.pno + "번 게시글이 삭제되었습니다.")
      deleteProduct(product.pno).then(data => {setProduct(data)
        navigate('/products/list?' + queryString)
    })

      const queryString = createSearchParams(queryObj).toString()

    }


    return (  
      <>
        <div className="items-center justify-center container flex mt-5">

        <table className="w-[1400px] items-center justify-center">
          <thead className="">
            <tr className="bg-gray-200">
                <td className="border-2 font-medium w-32 text-center ">No</td>
                <td className="border-2">{product.pno}</td>
            </tr>
  
            <tr>
                <td className="border-2 font-medium text-center p-3 m-3">상품이름</td>
                <td className="border-2 p-2 m-2">{product.pname}</td>
            </tr>
  
            <tr >
                <td className="border-2 font-medium text-center p-3 m-3">상품설명</td>
                <td className="border-2">{product.pdesc}</td>
            </tr>
  
            <tr >
                <td className="border-2 font-medium text-center p-3 m-3">닉네임</td>
                <td className="border-2">{product.nickname}</td>
            </tr>
  
            <tr >
                <td className="border-2 font-medium text-center p-3 m-3">게시일</td>
                <td className="border-2">{product.modDate}</td>
            </tr>
  
            <tr className="border-2">
                <td className="border-2 font-medium h-80 text-center p-3 m-3">파일</td>
                {/* <td className="border-2">{product.modDate}</td> */}
                <td>
                    <img src={`http://192.168.0.48/${product.fname}`} alt="No image"></img>
                </td>
            </tr>
  
            {/* <tr>
              <td className="border-2 font-medium h-80 text-center">Fname</td>
              <td className="border-2">
                <ul>
                  {board.fname.map( fileList => <li>{fileList}</li>
                  )}
                </ul>
              </td>
            </tr> */}
  
              
          </thead>
      
        </table>
        </div>
      <div className="flex justify-end">
        <button onClick={handleClickDelete} className="border-gray-400 p-1 border-2 rounded-md mt-2 mr-20
                    hover:bg-red-600 hover:text-white text-center text-sm">
                        강제삭제
        </button>
      </div>
      </>
  

        // <div>

        // {/* <div>
        //   <input type="file" multiple name="fname" onChange={handleChange}></input>
        //   <button className="bg-gray-200"
        //   onClick={handleClickUpload}
        //   >SUBMIT</button>
        // </div> */}

        //     <table className="border-2">
        //         <tr>
        //             <th>No</th>
        //             <td>{product.pno}</td>
        //         </tr>
        //         <tr>
        //             <th>Name</th>
        //             <td>{product.pname}</td>
        //         </tr>
        //         <tr>
        //             <th>Desc</th>
        //             <td>{product.pdesc}</td>
        //         </tr>
        //         <tr>
        //             <th>Price</th>
        //             <td>{product.price}</td>
        //         </tr>
        //         <tr><Link to={`/member/read/${product.mno}`}>
        //             <th>Email</th>
        //             <td>{product.email}</td>
        //         </Link></tr>
        //         <tr>
        //             <th>Nickname</th>
        //             <td>{product.nickname}</td>
        //         </tr>
        //         <tr>
        //             <th>CateName</th>
        //             <td>{product.procatename}</td>
        //         </tr>
        //         <tr>
        //             <th>Date</th>
        //             <td>{product.modDate}</td>
        //         </tr>
        //     </table>
        //     <div onClick={handleClickDelete}>
        //         <button className="bg-red-500 text-white">Delete</button>
        //     </div>

        //     {/* <button onClick={moveList}>List</button> */}

        // </div>
    );
}
 
export default ProductReadComponent;