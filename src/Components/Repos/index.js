import React from 'react';
import { useSelector } from 'react-redux';
import RepoCard from '../RepoCard';

function Repos() {
    const theRepos = useSelector((state) => state.repos);
    const loading = useSelector((state) => state.loading);

    const renderRepos = theRepos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
    ));

    return (
        <>
            {loading ? (
                <h2>Loading . . .</h2>
            ) : (
                <section aria-label="repos" id="repos">
                    {renderRepos}
                </section>
            )}
        </>
    );
}

export default Repos;
