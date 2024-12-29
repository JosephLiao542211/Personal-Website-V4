'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GithubStats = () => {
    const [languageStats, setLanguageStats] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLanguageStats = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // Use your GitHub token here
                const headers = {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                    Accept: 'application/vnd.github.v3+json',
                };

                // Fetch repos
                const reposResponse = await fetch(
                    'https://api.github.com/users/josephliao542211/repos',
                    { headers }
                );

                if (!reposResponse.ok) {
                    throw new Error(
                        `GitHub API error: ${reposResponse.statusText}`
                    );
                }

                const repos = await reposResponse.json();

                // Fetch languages for each repo
                const languagePromises = repos.map((repo) =>
                    fetch(repo.languages_url, { headers }).then((res) =>
                        res.json()
                    )
                );

                const languageResponses = await Promise.all(languagePromises);

                // Aggregate language data
                const languageData = languageResponses.reduce((acc, data) => {
                    Object.entries(data).forEach(([language, lines]) => {
                        acc[language] = (acc[language] || 0) + lines;
                    });
                    return acc;
                }, {});

                // Sort languages by lines of code
                const sortedLanguages = Object.entries(languageData)
                    .sort(([, a], [, b]) => b - a)
                    .reduce(
                        (acc, [key, value]) => ({
                            ...acc,
                            [key]: value,
                        }),
                        {}
                    );

                setLanguageStats(sortedLanguages);
            } catch (error) {
                console.error('Error fetching language stats:', error);
                setError(
                    'Failed to load GitHub statistics. Please try again later.'
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchLanguageStats();
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 py-4">{error}</div>;
    }

    const languageEntries = Object.entries(languageStats);
    const half = Math.ceil(languageEntries.length / 2);
    const firstColumn = languageEntries.slice(0, half);
    const secondColumn = languageEntries.slice(half);
    const maxLines = Math.max(...Object.values(languageStats));

    return (
        <div className="py-4">
            <div className="flex">
                <div className="flex-1 min-w-[200px]">
                    {firstColumn.map(([language, lines]) => (
                        <div key={language} className="mb-3">
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-primary font-regular">
                                    {language}
                                </span>
                            </div>
                            <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
                                    initial={{ width: '0%' }}
                                    whileInView={{
                                        width: `${(lines / maxLines) * 100}%`,
                                    }}
                                    transition={{
                                        duration: 0.5, // Adjust the duration as needed
                                        ease: 'easeOut',
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-1 min-w-[200px] px-8">
                    {secondColumn.map(([language, lines]) => (
                        <div key={language} className="mb-3">
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-primary font-regular">
                                    {language}
                                </span>
                            </div>
                            <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
                                    initial={{ width: '0%' }}
                                    whileInView={{
                                        width: `${(lines / maxLines) * 100}%`,
                                    }}
                                    transition={{
                                        duration: 0.5, // Adjust the duration as needed
                                        ease: 'easeOut',
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GithubStats;
