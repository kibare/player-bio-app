"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link dari next/link
import PlayerCard from '@/components/PlayerCard';
import { Player } from '../types/Player';

const PlayerList = ({ players }: { players: Player[] }) => {
  const [selectedPosition, setSelectedPosition] = useState('all');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPosition(event.target.value);
  };

  const filteredPlayers = players.filter((player) => {
    return selectedPosition === 'all' || player.position === selectedPosition;
  });

  return (
    <div className="my-14">
      <select 
        title='Filter by position'
        value={selectedPosition} 
        onChange={handleFilterChange} 
        className="mb-5 p-2 border border-grey-900 rounded"
      >
        <option value="all">All Positions</option>
        <option value="goalkeeper">Goalkeeper</option>
        <option value="defender">Defender</option>
        <option value="midfielder">Midfielder</option>
        <option value="forward">Forward</option>
      </select>

      <div className="grid grid-cols-3 gap-14">
        {filteredPlayers.map((player) => (
          <Link key={player.id} href={`/details/${player.id}`} passHref>
            <div className="block cursor-pointer">
              <PlayerCard player={player} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;

