// src/components/LandingPage.tsx
import React from 'react';
import TeamTile, { TeamTileProps } from './TeamTile';
import hamilton from '../assets/hamilton.jpg'
import redbull from '../assets/bull.jsp.jpg'

const teamData: TeamTileProps[] = [
    { teamName: 'Petronas', thumbnail: hamilton },
    { teamName: 'Red Bull Racing', thumbnail: redbull },
    { teamName: 'Aston Martin', thumbnail: redbull },
    { teamName: 'Ferrari', thumbnail: redbull },
    { teamName: 'McLaren', thumbnail: redbull },
    { teamName: 'Alpine', thumbnail: redbull },
    { teamName: 'Williams', thumbnail: redbull },
    { teamName: 'Haas', thumbnail: redbull },
    { teamName: 'Alfa Romeo', thumbnail: redbull },
    { teamName: 'AlphaTauri', thumbnail: redbull },
    // Add more team data here
];

const LandingPage: React.FC = () => {
    return (
        <div>
            <h1>Formula 1</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {teamData.map((team, index) => (
                    <TeamTile key={index} teamName={team.teamName} thumbnail={team.thumbnail} />
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
