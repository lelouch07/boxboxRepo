// src/components/TeamTile.tsx
import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export interface TeamTileProps {
    teamName: string;
    thumbnail: string; // Assuming you provide the SVG thumbnail as a string
}

const TeamTile: React.FC<TeamTileProps> = ({ teamName, thumbnail }) => {
    const navigate = useNavigate();

    const handleTeamClick = () => {
        navigate(`/team/${teamName}`);
    };
    return (
        
            <Card sx={{ maxWidth: 345 }} onClick={handleTeamClick}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={thumbnail}
                        alt={`${teamName} Thumbnail`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {teamName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
      
    );
};

export default TeamTile;
