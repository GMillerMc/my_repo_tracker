import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { VscRepoForked } from 'react-icons/vsc';
import { TbCircleDot } from 'react-icons/tb';

import styles from './index.module.css';

const RepoCard = ({ repo }) => {
    const {
        name,
        description,
        stargazers_count,
        open_issues_count,
        forks_count,

        created_at,
        owner,
    } = repo;
    console.log(repo);

    return (
        <div className={styles.card}>
            <div className={styles.firstSection}>
                <a
                    href={`https://github.com/alicekres/${name}`}
                    className={styles.repoName}
                    target="_blank" rel="noreferrer"
                >
                    {name}{' '}
                </a>
                <p className={styles.description}>{description}</p>
                <p className={styles.date}>Created on: {created_at} </p>
            </div>
            <a
                href={`https://github.com/${owner.login}/${name}/stargazers`}
                target="_blank" rel="noreferrer"
                className={styles.link}
            >
                <AiOutlineStar /> <span>{stargazers_count}</span>
            </a>
            <a
                href={`https://github.com/${owner.login}/${name}/network/members`}
                target="_blank" rel="noreferrer"
                className={styles.link}
            >
                <VscRepoForked /> <span>{forks_count}</span>
            </a>
            <a
                href={`https://github.com/${owner.login}/${name}/issues`}
                className={styles.link}
                target="_blank" rel="noreferrer"
            >
                <TbCircleDot /> <span>{open_issues_count}</span>
            </a>
        </div>
    );
};

export default RepoCard;
