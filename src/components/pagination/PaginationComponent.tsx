import {useSearchParams} from "react-router";

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    let currentPage = Number(query.get('page') || '1');

    return (
        <div className={'pagination'}>
            <button onClick={() => {
                if(currentPage > 1) {
                    setQuery({page: (--currentPage).toString()});
                }
            }}>Prev</button>

            <button onClick={() => {
                setQuery({page: (++currentPage).toString()});
            }}>Next</button>
        </div>
    );
};

export default PaginationComponent;