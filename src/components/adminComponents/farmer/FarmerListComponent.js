import { useEffect, useState } from "react";
import { getFarmerList } from "../../../api/adminAPI";
import PagingComponent from "../../commonComponents/PagingComponent";

const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [],
    page: 0,
    size: 0,
    requestDTO: null,
    cateno: 1
}

const FarmerListComponent = ({ queryObj, moveMemberReadPage, movePage, moveSearch }) => {

    const [farmer, setFarmer] = useState(initState)

    useEffect(() => {
      
        getFarmerList(queryObj).then(data => {

          console.log("get Farmer List....................")
          console.log(data)

          setFarmer(data)

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
            {farmer.dtoList.map( ({email, nickname, mno}, idx) => 
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
  
        <PagingComponent movePage={movePage} {...farmer}></PagingComponent>
  
      </div>
    );
}

export default FarmerListComponent;
