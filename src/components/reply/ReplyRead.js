import { useEffect, useState } from "react";
import { deleteReply, getReply, getReplyOne, putReply } from "../../api/adminAPI";

const initState = {
    rno:0,
    bno:0,
    reply:'',
    // replyFile:'',
    email:'',
    nickname:''
}

const ReplyRead = ({rno,cancelRead,refreshPage}) => {

    console.log("ReplyRead..........." + rno)

    const [reply,setReply] = useState(initState)

    useEffect(() =>{

        console.log(rno)


        getReplyOne(rno).then(data => {
            console.log(data)
            setReply(data)
        })
    },[rno])

    const handleClickDelete = () => {

        deleteReply(rno).then(data => {
            alert(`${data.result}번 댓글이 삭제되었습니다.`)
            refreshPage(true)
        })

    }

    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleClickModify = () => {

        putReply(reply).then(data => {
            alert(`${data.result} 수정되었습니다`)
            refreshPage(true)
        })

    }

    if(reply.replyText === '해당 글은 삭제되었습니다.'){
        return <></>
    }


    return ( 
        <div className="ml-20 p-3 w-[800px] bg-gray-200 rounded-md">
            <div>
                <table className="w-[500px] m-2 ">
                    {/* <tr className="border-b-2">
                        <td className="w-28 ">댓글번호 : </td>
                        <td className="border-2"><input value={reply.rno}></input></td>
                    </tr> */}
                    <tr>
                        {/* <td className="w-28">내용</td> */}
                        <td><textarea value={reply.reply} type="text" name="reply" onChange={handleChange} className="border-2 w-[500px] h-[100px]"></textarea> </td>
                    </tr>
                    {/* <tr>
                        <td className="w-28">작성자</td>
                        <td><input value={reply.nickname}></input></td>
                    </tr> */}
                </table>


                {/* <div>{rno}</div>
                <div> 
                    <input type="text" name="replyText" onChange={handleChange} value={reply.replyText}></input>
                </div>
                <div>{reply.replyer}</div> */}
            </div>
            <div>
                <button className="rounded-md hover:text-white text-center text-sm m-2 p-2 bg-blue-500" onClick={handleClickModify}>MODIFY</button>
                <button className="rounded-md hover:text-white text-center text-sm m-2 p-2 bg-red-500" onClick={handleClickDelete}>DELETE</button>
                <button className="rounded-md hover:text-white text-center text-sm m-2 p-2 bg-slate-400" onClick={cancelRead}>CANCEL</button>
            </div>

        </div>
     );
}
 
export default ReplyRead;