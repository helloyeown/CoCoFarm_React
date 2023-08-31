import { useRef, useState } from "react"
import { registerProduct } from "../../api/adminAPI"
import { useNavigate } from "react-router-dom"
import { getCookis } from "../../util/cookieUtil"

const initState = {
	pname: '',
	pdesc: '',
	price: 0,
    procateno: 0,
    mno: 502
}

const ProductRegisterComponent = () => {

    const fileRef = useRef()    // 참조값 물기
    const [product, setProduct] = useState({...initState})
    const nav = useNavigate()
    const cookie = getCookis()

    const handleChange = (e) => {

        product[e.target.name] = e.target.value
        setProduct({ ...product })
	}

    const handleClickSave = (e) => {

        const formData = new FormData()

        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)
        formData.append("procateno", product.procateno)
        formData.append("mno", 502)

        console.log(fileRef.current)
        console.log(product)

        const arr = fileRef.current.files

        for(let file of arr) {
            formData.append("files", file)
        }

        console.log(fileRef.current)
        console.log(product)

        registerProduct(formData)

    }


    return (    
        <div>

        <div className="mt-24 w-3/6 border-4 border-gray-800 rounded-xl bg-slate-100">

            <div className="flex justify-between">
                <div className="m-2 text-3xl pl-2">Register</div>
            </div>
            <table className="m-4">
                <tr className="">
                    <td>
                        <label>*상품이름</label>
                    </td>
                    <td className="border-2 bg-white">
                        <input type="text" name="pname" value={product.pname} onChange={handleChange}></input>
                    </td>
                </tr>
                <tr className="">
                    <td>
                        <label>*상품설명</label>
                    </td>
                    <td className="border-2 bg-white">
                        <input type="text" name="pdesc" value={product.pdesc} onChange={handleChange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                </tr>
                <tr className="">
                    <td>
                        <label>*상품가격</label>
                    </td>
                    <td className="border-2 bg-white">
                        <input type="number" name="price" value={product.price} onChange={handleChange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                </tr>

                {/* <tr >
                    <td>
                        <label>*닉네임</label>
                    </td>
                    <td className="border-2 bg-white">
                        <input type="text" name="nickname" value={product.pname} onChange={handleChange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                </tr> */}

                <tr >
                    <td>
                        <label>*카테고리</label>
                    </td>
                    <td className="border-2 bg-white">
                        <select value={product.procateno}
                        onChange={e => {
                            product.procateno = e.target.value
                            setProduct({...product})
                        }}>
                            <option value={''}>---</option>
                            <option value={'1'}>곡류</option>
                            <option value={'2'}>채소</option>
                            <option value={'3'}>과일</option>
                            <option value={'4'}>곡류가공품</option>
                            <option value={'5'}>채소가공품</option>
                            <option value={'6'}>과일가공품</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td>
                    </td>
                </tr>

                <tr >
                    
                    <td>
                        <label>*상품사진</label>
                    </td>

                    <td className="border-2 bg-white">
                        <input type="file" multiple name="images" ref={fileRef} onChange={handleChange}></input>
                    </td>
                </tr>

                <tr>
                    <td className="">
                    </td>
                    <td className=" pt-2 pl-0">
                        <button className="border-4 border-gray-600 p-2 rounded-xl"
                        onClick={handleClickSave}>
                            등록
                        </button>
                        <button className="ml-2 border-4 border-gray-600 p-2 rounded-xl" onClick={() => nav("../products/list")}>
                            취   소
                        </button>
                    </td>
                </tr>

            </table>
        </div>

    </div>

    );
}
 
export default ProductRegisterComponent;