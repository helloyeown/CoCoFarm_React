import { useState } from "react"
import { insertReply } from "../../api/adminAPI";
import { getCookis } from "../../util/cookieUtil";

const initState = {
    bno: 0,
    mno: 0,
    gno: 0,
    reply: '',
    // replyFile: '',
    email: '',
    replyer: ''
}

const ReplyChild = ({ bno, rno, refreshLast, handleClickForceClose,handleClickReplyAnswer, refreshPage }) => {


    console.log("ReplyChild---------------------------------------1")
    console.log(rno)
    const {mno} = getCookis('login')
    



    // 상태 함수 설정
    const [reply, setReply] = useState({...initState})

    const handleChange = (e) => {

        reply[e.target.name] = e.target.value
        setReply({ ...reply })
    }   

    const handleClickRegister = (e) =>{

        console.log("rno" + rno)

        reply.bno = bno
        reply.gno = rno  !== 0 ? rno : null 

        // 나중에 바꿔야함
        reply.mno = mno;
        // reply.replyText = '';
        reply.email = '나중에 쿠키값 들어감';

        console.log(reply)
        
        insertReply(reply).then(data =>{
            
            console.log(data)

            alert(`${data.result}번 댓글 등록완료`)
            
            // refreshLast()
            refreshPage()

            // inputTag내 데이터들을 삭제
            setReply({...initState})
            handleClickForceClose()

        })



    }

    return ( 
    <div className="w-full absolute left-0 top-1/2 addModal">
        <div className="m-8 bg-gray-200 border-2 absolute left-1/4 top-1/3 p-3 rounded-sm">
            <div className="font-bold ml-3">답글 달기</div>
            <div className="flex">
                <div className="m-2 flex">
                    <div><textarea className="border-2 w-[700px] h-[100px]" name="reply" value={reply.reply} onChange={handleChange}></textarea></div>
                    {/* type="hidden" 예정 */}
                    {/* <div><input type="text" className="border-2 w-44" name="replyer" value={reply.replyer} onChange={handleChange}></input></div> */}
                </div>
                <div>
                    <button onClick={handleClickRegister} className="bg-white p-2 rounded-xl mt-10 border-gray-500 border shadow-md hover:bg-gray-300 hover:text-white">
                        등록
                    </button>
                    <button onClick={handleClickForceClose} className="ml-2 bg-white p-2 rounded-xl mt-10 border-gray-500 border shadow-md hover:bg-gray-300 hover:text-white">
                        취소
                    </button>
                </div>
            </div>
        </div>
    </div>

    );
}
 
export default ReplyChild;