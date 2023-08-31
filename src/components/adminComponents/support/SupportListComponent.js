import { getBoardList } from "../../../api/adminAPI";
import { useEffect, useState } from "react";
import PagingComponent from "../../commonComponents/PagingComponent";
const date = new Date();
const day = date.getDate();
const month = date.getMonth()


const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO: null,
    cateno: 1
  }

const SupportListComponent = ({queryObj , moveSupportReadPage, movePage }) => {

    // 처음 목록 뿌릴 때 에러 안 나도록 initState 넣어줌
    const [listData, setListData] = useState(initState)

    // 비동기 통신은 항상 useEffect
    useEffect(() => {
        
        queryObj.cateno = 1
        //axios로 데이터 가져오기
        getBoardList(queryObj).then(data => {
           
            setListData(data)
        }
        )
        
    }, [queryObj])
    

    console.log("----------------------out --------------------")
    console.log(listData.dtoList)


    return (  

      <div className="justify-center items-center container mt-3 ">

      {/* <div className="w-full h-[100px] flex justify-center items-center ">
        <div className="items-center justify-center flex">
          <input className="rounded-sm border-2 p-2"/>          
          <button type="submit" className="border-2 p-2 w-20 hover:bg-black hover:text-white">검색</button>
        </div>
      </div>       */}
      
      <table className="w-[1200px] items-center justify-center container m-auto">

        <thead>
          <tr className="border-b-2 border-gray-300 text-center h-12 font-bold">
            <td className="w-1/12">No</td>
            <td className="w-7/12">Title</td>
            <td className="w-1/12">Nickname</td>
            <td className="w-2/12">Duedate</td>
            <td className="w-1/12">ReplyCnt</td>          
          </tr>
        </thead>

        <tbody>
          {listData.dtoList.map( ({bno,title,nickname,regDate,rcnt}) => 
            <tr className="border-b-2 border-gray-300 text-center h-12"
                key={bno}
                onClick={() => moveSupportReadPage(bno)}
            >
              <td>{bno}</td>
              <td className="text-left hover:underline hover:cursor-pointer">{title}</td>
              <td>{nickname}</td>
              <td>{regDate}</td>
              <td>{rcnt}</td>
            </tr>
          
          )}
        </tbody>
      </table>

      <PagingComponent movePage={movePage} {...listData}></PagingComponent>

    </div>
    );
}
 
export default SupportListComponent;