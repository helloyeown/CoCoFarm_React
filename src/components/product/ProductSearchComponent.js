import { useEffect, useState } from "react"

const ProductSearchComponent = ({queryObj, moveSearch}) => {

    const [searchObj, setSearchObj] = useState({ type: '', keyword: '' })
    const [changeSize, setChangeSize] = useState({ size: 10 })

    // 랜더링 완료시 queryObj 바뀌면 내용물을 변경
    useEffect(() => {
        
        searchObj.type = queryObj.type || ''
        searchObj.keyword = queryObj.keyword || ''
        changeSize.size = queryObj.size || 10

        setSearchObj({ ...searchObj })
        setChangeSize({ ...changeSize })

    }, [queryObj])

    const handleSize = (e) => {

        changeSize.size = e.target.vlaue
        setChangeSize(changeSize.size)

    }


    return (    
                <div>
            <div className="items-center justify-center flex container mt-5">
             
                <select
                    className="border-2 m-2 p-2 "
                    value={searchObj.type}
                    onChange={e => {
                        searchObj.type = e.target.value
                        setSearchObj({ ...searchObj })
                    }}
                >
                    <option value={''}>---</option>
                    <option value={'n'}>상품이름</option>
                    <option value={'d'}>상품설명</option>
                    <option value={'e'}>이메일</option>
                    <option value={'m'}>닉네임</option>
                </select>

                <input
                    type="text"
                    className="rounded-sm border-2 p-2"
                    value={searchObj.keyword}
                    onChange={e => {
                        searchObj.keyword = e.target.value
                        setSearchObj({ ...searchObj })
                    }}
                ></input>

                <button
                    className="border-2 p-2 w-22 hover:bg-black hover:text-white"
                    onClick={e => moveSearch(searchObj.type, searchObj.keyword)}

                > SEARCH

                </button>

            </div>
        </div>
    );
}
 
export default ProductSearchComponent;