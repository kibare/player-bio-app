"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PlayerCard from '@/components/PlayerCard';
import { Player } from '../types/Player';

const PlayerList = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPosition, setSelectedPosition] = useState('all');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:3000/api');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();

        setPlayers(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  }, []);
  

  const filteredPlayers = players.filter((player) => {
    return selectedPosition === 'all' || player.position === selectedPosition;
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPosition(event.target.value);
  };

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
