import axios from "axios"
import { createSearchParams } from "react-router-dom"

export const URL = 'APIServer-env.eba-zijv4vbj.ap-northeast-2.elasticbeanstalk.com'

export const getFarmerList = async (queryObj) =>{

    const parameter = createSearchParams(queryObj).toString()

    console.log("getFarmerList.........................")
    console.log(parameter)
    console.log(queryObj)
    console.log(queryObj)
    console.log(queryObj)
    console.log(queryObj)
    console.log(queryObj)
    console.log(queryObj)


    const res = await axios.get(`http://${URL}/api/admin/farmer?${parameter}`)
    return res.data
    
}

export const getConsumerList = async (queryObj) =>{

    console.log("getConsumerList.........................")
    console.log(queryObj)
    console.log(queryObj)
    console.log(queryObj)
    console.log(queryObj)
    console.log(queryObj)
    console.log(queryObj)

    const parameter = createSearchParams(queryObj).toString()

    const res = await axios.get(`http://${URL}/api/admin/consumer?${parameter}`)
    return res.data
    
}

// 문의 게시판 관련 api
export const getBoardList = async (queryObj) =>{

    const parameter = createSearchParams(queryObj).toString()

    const res = await axios.get(`http://${URL}/api/board/list?${parameter}`)
    
    return res.data

}

export const getBoardListbyWriter = async (mno,queryObj) =>{

    const parameter = createSearchParams(queryObj).toString()

    const res = await axios.get(`http://${URL}/api/board/list/${mno}?${parameter}`)
    
    return res.data
}


export const getBoardOne = async (bno) =>{

    const res = await axios.get(`http://${URL}/api/board/${bno}`)
    return res.data

}

export const addBoard = async () =>{

    const res = await axios.get(`http://${URL}/api/admin/consumer`)
    return res.data

}

export const getMemberOne = async (mno) => {

    const res = await axios.get(`http://${URL}/api/admin/memberOne`)
    return res.data
    
}

export const getReplyList = async (bno , page = 1 , last = false) =>{

    console.log("=====================================================================");
    console.log(bno);
    console.log(page);
    console.log(last);
    console.log("=====================================================================");

    const res = await axios.get(`http://${URL}/api/replies/${bno}/list?page=${page}&last=${last}`)
    return res.data

}

export const readMember = async (mno) =>{

    const res = await axios.get(`http://${URL}/api/admin/read/${mno}`)
    return res.data

}

export const deleteMember = async (mno) =>{

    const res = await axios.delete(`http://${URL}/api/admin/${mno}`)
    return res.data

}

export const insertReply = async (reply) => {

    console.log(reply)


    const res = await axios.post(`http://${URL}/api/replies/`, reply)
  
    return res.data
  
  }


  
export const getReplyOne = async (rno) => {

    console.log(rno)

    const res = await axios.get(`http://${URL}/api/replies/${rno}`)
  
    return res.data
  
  }

  export const putReply = async (reply) => {

    console.log(reply)

    const res = await axios.put(`http://${URL}/api/replies/`, reply)
  
    return res.data
    
  }

  export const deleteReply = async (rno) => {

    console.log(rno)

    const res = await axios.delete(`http://${URL}/api/replies/${rno}`)
  
    return res.data
    
  }

  // product 
  export const getProductList = async (queryObj) => {

    const parameter = createSearchParams(queryObj).toString()

    const res = await axios.get(`http://${URL}/api/products/list?${parameter}`)
    return res.data
    
  }

  export const readProduct = async (pno) =>{

    const res = await axios.get(`http://${URL}/api/products/${pno}`)
    return res.data

}

    export const deleteProduct = async (pno) =>{

    const res = await axios.delete(`http://${URL}/api/products/${pno}`)
    return res.data

}

    export const registerProduct = async (FormData) =>{

        const header = {
            headers: {
                    "Content-Type": "multipart/form-data",
            }
        }

        const res = await axios.post(`http://${URL}/api/products/`, FormData, header)
        return res.data

}

    export const getListByMno = async (queryObj, mno) =>{

        const parameter = createSearchParams(queryObj).toString()

        const res = await axios.get(`http://${URL}/api/products/list/${mno}?${parameter}`)
        return res.data

}

    // board
    export const deleteBoard = async (bno) =>{

        const res = await axios.delete(`http://${URL}/api/board/${bno}`)
        return res.data
    
    }


    export const postLogin = async(params) => {

        let header = {
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                }
    }

    const res = await axios.post(`http://${URL}/api/member/login`, params, header)

    return res.data
    
    }


    export const signupMember = async(params) => {

    let header = {
      headers: {
          "content-type": "multipart/form-data",
      }
    }
    console.log("===========================================")
    console.log(params);
    console.log("===========================================")
  
    const res = await axios.post(`http://${URL}/api/admin`,params,header)
  
    return res.data
    
  }

    // review
    export const getReviewList = async (pno, page) =>{

        console.log("APIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
        console.log(pno)
        console.log(page)

        const res = await axios.get(`http://${URL}/api/reviews/${pno}/list?page=${page}`)
        return res.data

}

    export const registerReview = async (formData) =>{

        const header = {
            headers: {
                    "Content-Type": "multipart/form-data",
            }
        }

        const res = await axios.post(`http://${URL}/api/reviews`, formData, header)
        return res.data

}

    export const readReview = async (rno) =>{

        const res = await axios.get(`http://${URL}/api/reviews/${rno}`)
        return res.data

}

    export const deleteReview = async (rno) =>{

        const res = await axios.delete(`http://${URL}/api/reviews/${rno}`)
        return res.data

}

    export const modifyReview = async (formData) =>{

        const res = await axios.put(`http://${URL}/api/reviews`, formData)
        return res.data

}
