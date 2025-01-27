import React from 'react'


const Pagination = (props) => {
    const pageLinks = []

    for(let i = 1; i <= props.pages + 1 ; i++){
        let active = props.currentPage === i 
        ? 'active'
        : '';

        pageLinks.push(
            <li className={`page-item ${active}`} key={i} onClick={() => props.nextPage(i)}>
                <a href="#" className="page-link">{i}</a>
            </li>
        )
    }
    return(
        <div className="container">
            <div className="row">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        { 
                            props.currentPage > 1  
                            ? <li className={`page-item`} onClick={() => props.nextPage(props.currentPage - 1)}><a href="#" className="page-link">Previus</a></li>
                            : ''
                        }
                        { pageLinks }
                        { 
                            props.currentPage < props.pages + 1  
                            ? <li className={`page-item`} onClick={() => props.nextPage(props.currentPage + 1)}><a href="#" className="page-link">Next</a></li>
                            : ''
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Pagination;