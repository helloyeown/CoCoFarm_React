import { useEffect, useState } from "react";

const BoardSearchComponent = ({queryObj, moveSearch}) => {

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

    console.log("search queryObj..................")
    console.log(queryObj)


    return (  
        <div>
            <div>

                <select
                    className="border-2 m-2 p-2 "
                    value={searchObj.type}
                    onChange={e => {
                        searchObj.type = e.target.value
                        setSearchObj({ ...searchObj })
                    }}
                >

                    <option value={''}>---</option>
                    <option value={'t'}>제목</option>
                </select>

                <input className="rounded-sm border-2 p-2" value={searchObj.keyword}
                onChange={e => {
                    searchObj.keyword = e.target.value
                    setSearchObj({...searchObj})}}/>    

                <button className="border-2 p-2 w-20 hover:bg-black hover:text-white"
                onClick={e => moveSearch(searchObj.type, searchObj.keyword)}>SEARCH</button>
            </div>
        </div>
    );
}
 
export default BoardSearchComponent;