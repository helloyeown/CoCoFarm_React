
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"


const checkNull = (obj) => {

    const result = {}

    for (const attr in obj) {
        const attrName = attr
        const attrValue = obj[attr]

        if (attrValue && attrValue !== 'null') {
            result[attrName] = attrValue
        }
    }

    return result
}

const useQueryObj = () => {
    // Query String 처리
    const [search, setSearch] = useSearchParams()

    const navigate = useNavigate()
    
    console.log(search)
    // page size 값은 없다면 초기값 설정
    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")
    const cateno = search.get("cateno") || 1

    // object로  묶어주기
    const queryObj = checkNull({ page, size, cateno, type, keyword })
    
    const moveList = () => {
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../support/list?${queryString}`)
    }

    // const moveRead = (bno)=>{

    //     console.log("moveRead: " + bno)

    //     const queryString = createSearchParams(queryObj).toString()
        
    //     navigate(`../read/${bno}?${queryString}`)
    // }

    // const moveModify = (bno) => {

    //     console.log("moveModify: " + bno)

    //     const queryString = createSearchParams(queryObj).toString()
        
    //     navigate(`../modify/${bno}?${queryString}`)
    // }


    
    //값을 가지고 가는 함수
    const moveSupportReadPage = (bno) => {
        console.log("moveModify: " + bno)
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../support/read/${bno}?${queryString}`)
    }

    const moveMemberReadPage = (mno) => {
        console.log("Member Number: " + mno)


        const queryString = createSearchParams(queryObj).toString().slice(-8)
        console.log("test.........................")
        console.log(queryString)

        navigate(`../member/read/${mno}`)
    }
    const moveMemberListPage = ()=>{
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../farmer/list?${queryString}`)
    }

    const moveProductReadPage = (pno) => {
        console.log("PNO--------------------" + pno)
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../products/read/${pno}?${queryString}`)
    }

    const moveBoardReadPage = (bno, mno) => {
        console.log("bno: " + bno)
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../board/read/${bno}?${queryString}&mno=` + mno)
    }


    return {queryObj, setSearch, moveSupportReadPage, moveMemberReadPage, moveList, moveProductReadPage, moveBoardReadPage}
}

export default useQueryObj