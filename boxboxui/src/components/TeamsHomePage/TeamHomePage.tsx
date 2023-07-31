// src/components/TeamHomePage.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const TeamHomePage: React.FC = () => {
    interface News {
        _id: number;
        author: string;
        title: string;
        content: string;
        tags: string[];
        description: string;
        url: string;
        urlToImage: string;
        // publishedAt: Date,
        // comments: mongoose.Types.ObjectId[];
    }
    const { teamName } = useParams<{ teamName: string }>();
    const [latestNews, setLatestNews] = useState<News[]>([]);

    const fetchLatestNews = useCallback(async () => {
        // Replace 'YOUR_BACKEND_API_URL' with the actual backend API endpoint
        const response = await fetch(`/api/news/${teamName}`);
        const data = await response.json();
        return data;
    }, [teamName])
    useEffect(() => {
        // Fetch latest news from backend API and set it to the state
        fetchLatestNews()
            .then((data) => {
                setLatestNews(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching latest news:', error);
            });
    }, [fetchLatestNews]);


    return (
        <div>
            <h1>{teamName} Team Home Page</h1>
            {latestNews.map((news) => (
                <div key={news._id}>
                    <h2>{news.title}</h2>
                    <p>{news.content}</p>
                    <p>Author: {news.author}</p>
                    {/* <p>{news.publishedAt}</p> */}
                    {/* <p>{news.}</p> */}
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default TeamHomePage;
