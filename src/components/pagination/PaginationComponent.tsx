import "./pagination.css";
import {useSearchParams} from "react-router";

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    let currentPage = Number(query.get('page') || '1');

    return (
        <section className={'pagination'}>
            <button className={"pagination-button"} onClick={() => {
                if(currentPage > 1) {
                    setQuery({page: (--currentPage).toString()});
                }
            }}>Prev</button>

            <button className={"pagination-button"} onClick={() => {
                setQuery({page: (++currentPage).toString()});
            }}>Next</button>
        </section>
    );
};

export default PaginationComponent;