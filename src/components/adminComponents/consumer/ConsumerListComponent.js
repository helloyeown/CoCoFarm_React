import { useEffect, useState } from "react"
import { getConsumerList } from "../../../api/adminAPI"
import PagingComponent from "../../commonComponents/PagingComponent"

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

const ConsumerListComponent = ({queryObj , moveMemberReadPage, movePage, moveSearch}) => {

    const [consumer, setConsumer] = useState(initState)

    useEffect(() => {

        getConsumerList(queryObj).then(data => {

            console.log("get Consumer List....................")
            console.log(data)

            setConsumer(data)

        })

    }, [queryObj])


    return (  

        <div className="justify-center items-center container mt-3 ">
        
        <table className="w-[1200px] items-center justify-center container m-auto">
  
          <thead>
            <tr className="border-b-2 border-gray-300 text-center h-12">
                <th className="w-2/12">No</th>
                <th className="w-4/12">Email</th>
                <th className="w-3/12">Nickname</th>    
            </tr>
          </thead>
  
          <tbody>
            {consumer.dtoList.map( ({email, nickname, mno}, idx) => 
              <tr className="border-b-2 border-gray-300 text-center h-12"
                  key={idx}
                  onClick={() => moveMemberReadPage(mno)}
              >
                <td>{mno}</td>
                <td className="hover:underline hover:cursor-pointer">{email}</td>
                <td>{nickname}</td>
              </tr>
            
            )}
          </tbody>
        </table>
  
        <PagingComponent movePage={movePage} {...consumer}></PagingComponent>
  
      </div>

            // <div>
            //     <div className='border-2 border-black border-solid rounded-2xl m-10 mb-2 mt-2 h-[700px]'>
            //         <div className="m-2 p-2">
            //         <table className="w-full mt-3">
            //             <thead className="border-t-2 border-b">
            //             <tr className="bg-gray-200">
            //                 <th className="w-4/12">이메일</th>
            //                 <th className="w-3/12">닉네임</th>
            //             </tr>
            //             </thead>
            //             <tbody>
            //                 {consumer.dtoList.map(({email, nickname, mno}, idx) => 
            //                     (
                                   
            //                         <tr key={idx} className="hover:bg-gray-200" onClick={() => moveMemberReadPage(mno)}>
            //                             <td className="m-2 p-2 border-b-2 w-4/12 text-center">{email}</td>    
            //                             <td className="m-2 p-2 border-b-2 w-3/12 text-center">{nickname}</td> 
            //                         </tr>

            //                     ) 
            //                 ) 
            //                 }
            //             </tbody>
            //         </table>
            //     </div>
            //     </div>
            //     <PagingComponent movePage={movePage} {...consumer}></PagingComponent>
            // </div>
    );
}
 
export default ConsumerListComponent;