import { useState } from "react";
import { insertReply } from "../../api/adminAPI";
import { getCookis } from "../../util/cookieUtil";


const initState = {
    bno: 0,
    mno: 0,
    reply: '',
    // replyFile: '',
    email: '',
    replyer: ''
}

const ReplyInput = ({ bno,refreshLast }) => {

    const [reply, setReply] = useState({...initState})
    const {mno} = getCookis('login')



    const handleChange = (e) => {

        reply[e.target.name] = e.target.value
        setReply({ ...reply })
    }   

    const handleClickRegister = (e) =>{

        if(reply.reply == null || reply.reply == '') {
            alert("내용을 입력해주세요.")
            return
        }

        reply.bno = bno;

        // 나중에 바꿔야함
        reply.mno = mno;
        // reply.replyText = '';
        reply.email = '나중에 쿠키값 들어감';
        
        insertReply(reply).then(data =>{
            
            console.log(data)

            alert(`${data.result}번 댓글 등록완료`)
            
            refreshLast()
            

            // inputTag내 데이터들을 삭제
            setReply({...initState})

        })



    }


    return (

        <div className="m-8 border-3 w-[1400px] container m-auto mt-10">
            <div className="ml-4 font-bold text-2xl">
                댓글
            </div>
            {/* <div>Reply Input</div> */}
            <div className="flex">
                <div className="m-2 flex">
                    <div><textarea className="border-2 w-[700px] h-[100px]" name="reply" value={reply.reply} onChange={handleChange}></textarea></div>
                    {/* type="hidden" 예정 */}
                    {/* <div><input type="text" className="border-2 w-44" name="replyer" value={reply.replyer} onChange={handleChange}></input></div> */}
                </div>
                <div>
                <button onClick={handleClickRegister} className="border-gray-400 p-2 border-2 rounded-md mt-10
                    hover:bg-gray-400 hover:text-white text-center text-sm">
                        등록
                </button>
                </div>
            </div>
        </div>

    );
}

export default ReplyInput;