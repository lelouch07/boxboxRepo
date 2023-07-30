// src/components/TeamTile.tsx
import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export interface TeamTileProps {
    teamName: string;
    thumbnail: string; // Assuming you provide the SVG thumbnail as a string
}

const TeamTile: React.FC<TeamTileProps> = ({ teamName, thumbnail }) => {
    return (
        <Link to={`/teams/${teamName}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 345 }}>
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
        </Link>
    );
};

export default TeamTile;
