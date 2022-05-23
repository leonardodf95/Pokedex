import { PageSelect, PageNext, PreviouslyPage, PaginationDiv } from "./style";
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons'
import { useContext } from "react";
import PageContext from "../../../Contexts/PageContext";

const PaginationPokedex = () => {

    const { currentPage, setCurrentPage, totalPages, Previously, Next} = useContext(PageContext);
    
    let options = [];
    for (let i = 0; i < totalPages; i++) {
        options.push(i+1)
    }
    const selectPageHandler = evt => {
        evt.preventDefault()
        setCurrentPage(parseInt(evt.target.value))
    }

    
    return(
        <PaginationDiv>
            <span>Página:</span>
            {(currentPage > 0) ? <PreviouslyPage onClick={Previously} ><CaretLeftOutlined /></PreviouslyPage> : '' }
            <PageSelect value={currentPage} onChange={selectPageHandler}>
               {options.map((options) => (<option key={options} value={options-1}>{options} de {totalPages}</option>))}
            </PageSelect>
            {(currentPage < (totalPages - 1))?<PageNext onClick={Next}><CaretRightOutlined /></PageNext> : '' }
            
            </PaginationDiv>
    )

}

export default PaginationPokedex;