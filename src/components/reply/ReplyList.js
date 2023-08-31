import { useEffect, useState } from "react";
import { getReplyList } from "../../api/adminAPI";
import PagingComponent from "../commonComponents/PagingComponent";
import ReplyChild from "./ReplyChild";
import { getCookis } from "../../util/cookieUtil";

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

const ReplyList = ({ bno, page, last, refresh, movePage, changeCurrent, cancelRead, refreshPage}) => {
    
    const [current, setCurrent] = useState({rno:0, replyAnswer:false})

    // rendering시 에러방지
    const [listData, setListData] = useState(initState)
    const cookie = getCookis('login')

    useEffect(() => {

        getReplyList(bno, page, last).then( data => {
            setListData(data)
        })


    }, [bno,page,last,refresh])

    const handleClickReplyAnswer = (targetRno) => {

        console.log("click reply answer")
        console.log("targetRno: " + targetRno)
        current.rno = targetRno
        current.replyAnswer = !current.replyAnswer
        setCurrent({...current})

        if(!current.replyAnswer) {
            setTimeout(() => {
                current.rno = targetRno
                current.replyAnswer = true
                setCurrent({...current})
            }, 100)
        }
    }

    const handleClickForceClose = () => {

        setCurrent({rno:current.rno, replyAnswer:false})
    }

    console.log("mnooooooooooooooooooooooooooo")
    console.log(cookie.mno)

    return (

        <div className="container mt-5 m-auto w-[1400px]">
            <div>
                <ul>
                    {listData.dtoList.map( reply => 
                    
                    <li 
                    className="hover:cursor-pointer" key={reply.rno}
                    >

                    {/* <table className="w-[500px] m-2 bg-slate-300 border-4" style={ ord == 1 ? { margin-left : "3px" } : <></>}> */}
                    <table className="w-[1000px] m-5 p-2" style={reply.ord === true ? { marginLeft: "50px" } : {}}>
                        {/* <tr className="border-b-2">
                            <td className="w-28 ">댓글번호 : </td>
                            <td className="border-2 bg-slate-50">{reply.rno}</td>
                        </tr> */}
                        <tr className="font-bold text-gray-500">
                            <td className="bg-slate-50">{reply.nickname}</td>
                        </tr>
                        <tr>
                            <td className="bg-slate-50">
                                {reply.reply}
                            </td>
                        </tr>
                        <tr>
                            <td>
                            {/* {reply.gno === reply.rno ? 
                                (reply.mno == cookie.mno ?
                                <button className="mb-5 hover:text-gray-500" onClick={() =>handleClickReplyAnswer(reply.rno)}>↳ 답글 달기</button>
                                : 
                                <div>
                                <button className="mb-5 hover:text-gray-500" onClick={() =>handleClickReplyAnswer(reply.rno)}>↳ 답글 달기</button>
                                <button className="rounded-md hover:text-white text-center text-sm m-2 p-1 bg-blue-200" onClick={() => changeCurrent(reply.rno)}>MOD</button>
                                </div>)
                            :
                            <button className="rounded-md hover:text-white text-center text-sm m-2 ml-0 p-1 bg-blue-200" onClick={() => changeCurrent(reply.rno)}>MOD</button>
                            } */}
                            
                            {reply.gno === reply.rno ?
                                    <button className="mb-2 hover:text-gray-500" onClick={() =>handleClickReplyAnswer(reply.rno)}>↳ 답글 달기</button>
                                : 
                                <></>
                            }

                            {reply.mno === cookie.mno  ? 
                            
                            <button className={`rounded-md hover:text-white text-center text-sm ${reply.gno === reply.rno ? "m-2" : "ml-0 mb-2"} p-1 bg-blue-200`} onClick={() => changeCurrent(reply.rno)}>MOD</button>
                            :
                            <></>
                            }
                            {current.replyAnswer ? 
                                <ReplyChild bno={bno} rno={current.rno} refreshLast={reply.refreshLast} handleClickForceClose={handleClickForceClose} handleClickReplyAnswer={handleClickReplyAnswer} refreshPage={refreshPage}></ReplyChild> 
                                : 
                                <></>
                            }
                            <div className=" border-b-gray-300 border-b"></div>
                            </td>
                        </tr>
                    </table>
                    </li>)}
                </ul>
                
                <PagingComponent {...listData} movePage={movePage}></PagingComponent>
            </div>
        </div>

    );
}

export default ReplyList;