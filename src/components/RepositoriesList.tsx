import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector(
        (state) => state.repositories
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);

    }

    return (
        <div className='m-3'>
            <h1 className="m-3 title">Search for a Package</h1>
            <form onSubmit={onSubmit} className="form-control-lg">
                <input className="rounded m-3 input-box" value={term} onChange={e => setTerm(e.target.value)} />
                <button className="btn btn-primary">Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
        </div>)
};

export default RepositoriesList;