
const PagingComponent = ({ movePage, start, end, prev, next, pageNums,page }) => {

    const handleClickPage = (pageNum) => {
        movePage(pageNum)
    }

    return (
        <div className="flex m-4 p-2 justify-center">
            {/* 페이지클릭시 movePage 호출이 되는지 || 파라미터 갯수들이 얼마나 필요한지  */}
            <ul className="flex">
                {prev ? <li className="mb-2 p-2 text-gray-500 rounded-lg"
                    onClick={() => handleClickPage(start - 1)}
                >&lt;</li> : <></>}
                {pageNums.map(num => <li
                    className="mb-2 p-2 rounded-lg hover:cursor-pointer text-gray-400"
                    key={num}
                    onClick={() => handleClickPage(num)}
                >
                    {page === num ? <span className="text-gray-500 font-bold">{num}</span> : <span>{num}</span>}
                 
                </li>)}
                {next ? <li className="mb-2 p-2 rounded-lg text-gray-500"
                    onClick={() => handleClickPage(end + 1)}
                > &gt; </li> : <></>}

            </ul>
        </div>

    );
}

export default PagingComponent;