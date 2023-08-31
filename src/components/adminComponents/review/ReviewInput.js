import { useEffect, useRef, useState } from "react";
import { getReviewList, registerReview } from "../../../api/adminAPI";

const initState = {
    pno: 0,
    review: '',
    mno: 0,
    files: []
}

const ReviewInput = ({pno, refreshPage}) => {

    const [review, setReview] = useState({...initState})

    const fileRef = useRef()

    const handleChange = (e) => {

        review[e.target.name] = e.target.value
        setReview({ ...review })

    }   



    
    const handleClickRegister = (e) =>{

        let num = parseInt(pno)
        review.pno = num

        // 나중에 바꿔야함
        review.mno = 11;
        // reply.replyText = '';
        // review.email = '나중에 쿠키값 들어감';

        console.log(review)

        const formData = new FormData()
        formData.append("pno", review.pno)
        formData.append("mno", review.mno)
        formData.append("review", review.review)
        
        const arr = fileRef.current.files

        for(let file of arr) {
            formData.append("files", file)
        }
        //formData.append("files", paramObj.files)
        
        console.log("FormData")
        console.log(FormData)

        registerReview(formData).then(data =>{
            
            console.log(data)
            e.target.value = ''
            setReview({...initState})
            refreshPage()

        })

    }

    console.log("input!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log(review)


    return (  
        <div className="m-8 border-3 w-[1400px] container m-auto mt-10">
            <div className="ml-4 font-bold text-2xl">
                리뷰
            </div>
            {/* <div>Reply Input</div> */}
            <div className="flex">
                <div className="m-2">
                    <div><input type="file" ref={fileRef} multiple name="files" value={review.files} onChange={handleChange} className="mb-2 mt-3"></input></div>
                    <div><textarea className="border-2 w-[700px] h-[100px]" name="review" value={review.review} onChange={handleChange}></textarea></div>
                    {/* type="hidden" 예정 */}
                    {/* <div><input type="text" className="border-2 w-44" name="replyer" value={reply.replyer} onChange={handleChange}></input></div> */}
                </div>
                <div>
                <button onClick={handleClickRegister} className="border-gray-400 p-2 border-2 rounded-md mt-16
                    hover:bg-gray-400 hover:text-white text-center text-sm">
                        등록
                </button>
                </div>
            </div>
        </div>
    );
}
 
export default ReviewInput;