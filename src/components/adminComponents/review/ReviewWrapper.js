import { useEffect, useState } from "react";
import ReviewInput from "./ReviewInput";
import ReviewList from "./ReviewList";
import ReviewRead from "./ReviewRead";

const initState = {
    pno: 0,
    page: 1,
    // 상태를 계속 바꾸게하기 위한 변수
    refresh: false,
    // read값의 cmd 작업을 위한 변수
    cmd: 0,
    current:0
}

const ReviewWrapper = ({pno, queryObj}) => {

    const [data, setData] = useState(initState)

    useEffect(() => {

        data.pno = pno
        data.page = 1
        setData({...data})

    }, [pno])

    // page를 바꿔주는 기능 설정 num 을 받아서 변경
    const movePage =  (num) => {
        data.page = num
        // 변경이 안된다. why? last가 true값으로 고정되있기때문에 last를 false로 변경해 줘야된다.
        data.last = false
        data.refresh = ! data.refresh
        setData({...data})
    }

    const changeCurrent = (rno) =>{
    
        data.current = rno
        
        setData({...data})
    }

    const cancelRead = () =>{
        data.current= 0 
        setData({...data})
    }

    const refreshPage = () => {

        data.refresh = !data.refresh
        setData({...data})

    }


    return (  
        <div>
            {/* 대댓글 등록창 */}
            <div></div>

            {/* 댓글 등록창 */}
            <ReviewInput pno={pno} refreshPage={refreshPage}></ReviewInput>
            {data.current!== 0 ? <ReviewRead rno={data.current} cancelRead={cancelRead} refreshPage={refreshPage}></ReviewRead>:<></>}
            <ReviewList {...data} movePage={movePage} changeCurrent={changeCurrent}></ReviewList>
        </div>
    );
}
 
export default ReviewWrapper;