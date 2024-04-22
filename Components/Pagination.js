import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";




const Pagination = () => 
{

    return(
        <div id= "pagination">
                    <ReactPaginate  
                    
                        previousLabel= {"Back"}
                        pageCount={4}
                        nextLabel= {"Next"}
                        onPageChange={changePage}
                        
                    />
                        
                
                    
                    
        </div>
    );
}


export default Pagination;