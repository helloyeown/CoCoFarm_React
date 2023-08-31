import { useEffect, useState } from "react";
import { getReviewList } from "../../../api/adminAPI";
import PagingComponent from "../../commonComponents/PagingComponent";

const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [],
    page: 0,
    size: 0,
    requestDTO: null
}

const ReviewList = ({pno, page, refresh, movePage, changeCurrent}) => {

    const [review, setReview] = useState(false)
    const [listData, setListData] = useState(initState)

    useEffect(() => {

        getReviewList(pno, page).then(data => {
            
            console.log("review data.........................")
            console.log(data)

            setListData(data)
            
        })

    }, [pno, page, refresh])


    return (  
        <div className="container mt-5 m-auto w-[1400px]">
            <div>
                <ul>
                    {listData.dtoList.map( review => 
                    
                    <li 
                    className="hover:cursor-pointer" key={review.rno}
                    >

                    {/* <table className="w-[500px] m-2 bg-slate-300 border-4" style={ ord == 1 ? { margin-left : "3px" } : <></>}> */}
                    <table className="w-[1000px] m-5 p-2" style={review.ord === true ? { marginLeft: "50px" } : {}}>
                        {/* <tr className="border-b-2">
                            <td className="w-28 ">댓글번호 : </td>
                            <td className="border-2 bg-slate-50">{review.rno}</td>
                        </tr> */}
                        <tr className="font-bold text-gray-500">
                            <td className="bg-slate-50">{review.nickname}</td>
                        </tr>
                        <tr>
                            <td className="bg-slate-50">{review.review}</td>
                        </tr>
                        <tr className="font-bold text-gray-500">
                            <td className="bg-slate-50">
                                <img src={`http://192.168.0.48/s_${review.fname}`} alt="No image"></img>
                            </td>
                        </tr>
                        <tr>
                            <td className="bg-slate-50 text-sm text-gray-400">{review.modDate}</td>
                        </tr>
                        <tr>
                            {/* <button className="mb-5 hover:text-gray-400">↳ 대댓글 달기</button> */}
                            {/* {replyAnswer ? <ReplyChild></ReplyChild> : <></>} */}
                            <button className="rounded-md text-gray-600 hover:text-white text-center text-sm m-2 ml-0 p-1 bg-blue-200" onClick={() => changeCurrent(review.rno)}>더보기</button>
                            <div className=" border-b-gray-300 border-b"></div>
                        </tr>
                    </table>
                    </li>)}
                </ul>
                
                <PagingComponent {...listData} movePage={movePage}></PagingComponent>
            </div>
        </div>
    );
}
 
export default ReviewList;