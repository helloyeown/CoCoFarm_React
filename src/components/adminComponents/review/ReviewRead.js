import { useEffect, useRef, useState } from "react"
import { deleteReview, modifyReview, readReview } from "../../../api/adminAPI"

const initState = {
    rno:0,
    pno:0,
    review:'',
    fname:'',
    email:'',
    nickname:'',
    file: []
}

const ReviewRead = ({rno, cancelRead, refreshPage}) => {

    console.log("ReViewRead..........." + rno)

    const [review, setReview] = useState(initState)
    const fileRef = useRef()

    useEffect(() => {

        readReview(rno).then(data => {

            console.log(data)
            console.log(data.fname)

            setReview(data)

            const files = data.fname.split(",")
            console.log("filesssssssssssssssssssss")
            console.log(files)

            review.file = files
            setReview({...review})

        })

    }, [rno])

    const handleClickDelete = () => {

        deleteReview(rno).then(data => {
            alert(`${data.result}번 리뷰가 삭제되었습니다.`)
            refreshPage(true)

            cancelRead()
        })
    }

    const handleChange = (e) => {
        review[e.target.name] = e.target.value
        setReview({...review})

        console.log(review)
    }

    const handleClickModify = () => {

        const formData = new FormData()
        formData.append("rno", review.rno)
        formData.append("pno", review.pno)
        formData.append("mno", review.mno)
        formData.append("review", review.review)
        
        // 파일이 있을 때
        if(review.files != null){
            const arr = fileRef.current.files

            for(let file of arr) {
                formData.append("files", file)
            }
        }

        modifyReview(formData).then(data => {
            alert(`${data.result}번 리뷰가 수정되었습니다`)
            refreshPage(true)
        })
    }

    // if(review.reviewText === '해당 글은 삭제되었습니다.'){
    //     return <></>
    // }

    console.log(review.file)
    
    
    return (  
        <div className="ml-20 p-3 w-[800px] bg-gray-200 rounded-md">
            <div>
                <table className="w-[500px] m-2">
                    {/* <tr className="border-b-2">
                        <td className="w-28 ">댓글번호 : </td>
                        <td className="border-2"><input value={reply.rno}></input></td>
                    </tr> */}
                    {/* <tr> */}
                        {/* <td className="w-28">내용</td> */}
                        {/* <td><input type="file" multiple></input></td>
                    </tr> */}
                    {/* <tr>
                        <td><div value={review.review} type="text" name="review" onChange={handleChange} className="border-2 w-[500px] h-[100px]"></div> </td>
                    </tr> */}
                    <tr className="flex">
                        {review.file.map(img =>     
                            <td className="m-1"><img src={`http://192.168.0.48/${img}`}></img></td>
                        )}
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
                {/* <button className="rounded-md hover:text-white text-center text-sm m-2 p-2 bg-blue-500" onClick={handleClickModify}>MODIFY</button> */}
                <button className="rounded-md hover:text-white text-center text-sm m-1 p-2 bg-red-500" onClick={handleClickDelete}>강제삭제</button>
                <button className="rounded-md hover:text-white text-center text-sm m-1 p-2 bg-slate-400" onClick={cancelRead}>취소</button>
            </div>

        </div>
    );
}
 
export default ReviewRead;