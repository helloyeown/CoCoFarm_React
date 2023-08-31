import { useEffect, useState } from "react"
import farmImage01 from "../../../public/farmerImage01.jpg"
import { deleteBoard, deleteMember, getBoardOne, readMember } from "../../../api/adminAPI"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"

const initState = {
        mno: 0,
        email: '',
        nickname: '',
        intro: '',
        roleName: '',
        delFlag: false
}

const BoardReadComponent = () => {

    const [farmer, setFarmer] = useState(initState)
    const [board, setBoard] = useState({title: '', content: ''})
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const {bno} = useParams()
    const mno = searchParams.get('mno')
    
    useEffect(() => {

        console.log("bno " + bno)
        console.log("mno " + mno)

        readMember(mno).then(data => {

          console.log("----------------------- data")
          console.log(data)
          setFarmer(data)

        })

        getBoardOne(bno).then(data => {

            console.log("board read..................")
            console.log(data)
            setBoard(data)
            
        }).catch(e => {
            alert("error")
        })
        
    }, [mno, bno])

    console.log("-----------------------------------")
    console.log(farmer)

    // 강제 삭제 확인 모달
    const handleClickDelete = () => {

        console.log("click modal")
        alert("게시글이 삭제되었습니다.")
        deleteBoard(bno)
    
        navigate('/member/read/' + mno)
    
        }


    return (  
        <>
        <div className="w-[1400px] items-center justify-center container m-auto mt-5 rounded-sm border-b-2 border-b-gray-300 mb-10">
  
                <div className="border-gray-300 border-b-2 h-[70px] w-[1400px] relative">
                    <div className="text-4xl absolute bottom-3">{board.title}</div>
                    <div className="absolute right-8 bottom-3">
                        <button className="bg-gray-300 border-gray-400 border-2 p-1 hover:bg-white"
                        onClick={handleClickDelete}
                        >DEL</button>
                    </div>
                </div>
                <div className="h-[500px] w-[1400px] mt-8">{board.content}</div>
                
            <div className="container h-[200px] mt-3 mb-20 flex border-t-2 border-b-gray-400 pt-5">
            <div className=" w-[300px] flex justify-center items-center mt-3">
            <img src={farmImage01} alt="farmImage01" 
            className="rounded-[50%] object-cover w-[180px] h-[180px] justify-center flex">
            </img>
            </div>
            <div className="w-full flex">
            <div className="m-3 w-full ">
                <div className="mt-5 ">
                    <span className="text-3xl font-semibold">{farmer.nickname} 농장</span>
                </div>
                <div className="mt-2">
                    <span className="">@{farmer.email}</span>
                    <span className="ml-5">구독자 1.2만명</span>
                    <span className="ml-5">게시글 120개</span>
                </div>
                <div className="mt-3">
                    <div>
                    안녕하세요 {farmer.nickname} 농장입니다.<br/>
                    저희 농장 페이지를 방문해 주셔서 감사합니다.<br/>
                    구입문의 {farmer.email}
                    
                    </div>
                </div>
                <div className="mt-5">
                <button className="border-gray-400 p-1 border-2 rounded-md
                    hover:bg-gray-400 hover:text-white text-center text-sm mr-2">
                    <Link to={"/member/read/" + mno}>
                    List
                    </Link>
                </button> 
                </div>
            </div>
            </div>
            <div>

            
            </div>
            </div>
            </div>
        </>
    );
}
 
export default BoardReadComponent;