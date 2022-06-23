import React, { useState } from 'react';
import styles from './index.module.css';

function SearchForm({ fetchGitRepo }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchGitRepo(username);
        setUsername('');
    };

    const updateInput = (e) => {
        const input = e.target.value;
        setUsername(input);
    };

    return (
        <form aria-label="form" onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="username"></label>
            <input
                id="searchEntry"
                type="text"
                value={username}
                onChange={updateInput}
                placeholder="Find a repository..."
                className={styles.input}
            />
            <input className={styles.btn} type="submit" value={'Search'} />
        </form>
    );
}

export default SearchForm;
