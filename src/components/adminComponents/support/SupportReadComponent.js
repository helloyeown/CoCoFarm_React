import { useEffect, useState } from "react";
import { deleteBoard, getBoardOne } from "../../../api/adminAPI";
import { useNavigate } from "react-router-dom";


const initState ={
    bno:0,
    title:'',
    content:'',
    email:'',
    nickname:'',
    catename:'',
    cateno:0,
    regDate:'',
    modDate:'',
    delFlag: false
}





const SupportReadComponent = ({bno, moveList}) => {

    const [board, setBoard] = useState(initState)
    const navigate = useNavigate()

    useEffect(()=>{
        getBoardOne(bno).then(data =>{
            setBoard(data)
        })

    },[bno])

    const handleClickDelete = () => {

      alert("문의글이 삭제되었습니다.")

      deleteBoard(bno).then(data => {
        setBoard(data)
        navigate('/support/list')
      })
    }

    console.log(board)

    return (  

        <div className="items-center justify-center container flex mt-5">

      <table className="w-[1400px] items-center justify-center">
        <thead className="">
          <tr className="bg-gray-200">
              <td className="border-2 font-medium w-32 text-center p-2">No</td>
              <td className="border-2 p-2">{board.bno}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center p-3">제목</td>
              <td className="border-2 p-3">{board.title}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center p-3">닉네임</td>
              <td className="border-2 p-3">{board.nickname}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center p-3">게시일</td>
              <td className="border-2 p-3">{board.regDate}</td>
          </tr>

          <tr >
              <td className="border-2 h-80 font-medium text-center p-3">내용</td>
              <td className="border-2 p-3">{board.content}</td>
          </tr>

          {board.fname != 'null' ?
            <tr>
                <td className="border-2 font-medium h-80 text-center p-3">파일</td>
                <td className="border-2 p-3">{board.fname}</td>             
            </tr>
            :
            <></>
          }

      <div className="flex justify-end">
        <button onClick={handleClickDelete} className="border-gray-400 p-1 border-2 rounded-md mt-2 mr-20
          hover:bg-red-600 hover:text-white text-center text-sm">
              삭제
        </button>
      </div>

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
    );
}
 
export default SupportReadComponent;