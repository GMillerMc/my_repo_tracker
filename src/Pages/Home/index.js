import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm } from '../../Components';
import { fetchGitRepo } from '../../actions';
import { RepoCard } from '../../Components';
import { Repos } from '../../Components';


export const Home = () => {
    const loading = useSelector((state) => state.loading);
    const theRepos = useSelector((state) => state.repos);

    const dispatch = useDispatch();

    const search = (searchTerm) => dispatch(fetchGitRepo(searchTerm));

    const renderRepos = theRepos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
    ));

    return (
        <div className="home">
            <div className="firstpart">
                <p>Repositories</p>
                <p>Who do you want to search?</p>
            </div>
            <SearchForm fetchGitRepo={search} />
            <Repos />
            {loading ? (
                <h2>Loading . . .</h2>
            ) : (
                <section aria-label="repos" id="repos">
                    {renderRepos}
                </section>
            )}
        </div>
    );
};
