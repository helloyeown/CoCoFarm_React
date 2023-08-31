import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FarmerSearchComponent = ({ queryObj, moveSearch }) => {

    const [searchObj, setSearchObj] = useState({ type: '', keyword: '' })


    // 랜더링 완료시 queryObj 바뀌면 내용물을 변경
    useEffect(() => {

        searchObj.type = queryObj.type || ''
        searchObj.keyword = queryObj.keyword || ''


        setSearchObj({ ...searchObj })
    }, [queryObj])



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
                    <option value={'e'}>이메일</option>
                    <option value={'n'}>닉네임</option>

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


        //     <div>
        //     <div className="float-left mt-3">
        //         <h1 className="text-3xl ml-12">Farmer List</h1>
        //     </div>
        //     <div className="mr-1 ml-auto pt-2 h-[50px] w-[280px] flex">
        //         <select className="boarder-2 m-2 p-2 font-serif"
        //          value={searchObj.type}
        //          onChange={e => {
        //              searchObj.type = e.target.value
        //              console.log(e.target.value)
        //              setSearchObj({ ...searchObj })
        //          }}
        //      >
        //             <option value={''}>------</option>
        //             <option value={'e'}>이메일</option>
        //             <option value={'n'}>닉네임</option>
        //         </select>

        //         <input type="text" className="m-2 p-1 bg-slate-200"  value={searchObj.keyword}
        //             onChange={e => {
        //                 searchObj.keyword = e.target.value
        //                 console.log(e.target.value)
        //                 setSearchObj({ ...searchObj })
        //                 console.log(searchObj)
        //             }}
        //         ></input>
        //         <button onClick={e => moveSearch(searchObj.type, searchObj.keyword)}>검색</button>
        //     </div>
        // </div>
    );
}

export default FarmerSearchComponent;