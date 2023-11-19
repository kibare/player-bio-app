import React from 'react';
import { Player } from '@/types/Player';
import { convertPosition } from '@/utils/position';
import { capitalizeFirstLetter } from '@/utils/capitalize';

interface PlayerDetailProps {
  player: Player;
}

export default async function PlayerDetail({ params }: { params: { id: Number } }){
  const player = await getData(params.id)

  if (!player) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 w-full max-w-md mx-auto">
        <div className="flex justify-center px-4 pb-4">
          <img src={player.avatar} alt={`${player.firstName} ${player.lastName}`} width={150} height={150} className='rounded-lg' />
        </div>
        <div className="flex flex-col p-4 items-center">
          <div className='mb-6'>
            <p className="text-2xl text-gray-800">{`${player.firstName} ${player.lastName}`.trim()}</p>
            <p className="text-xl text-gray-800 text-center">{convertPosition(player.position)}</p>
            <p className="text-xl text-gray-800 text-center">{capitalizeFirstLetter(player.position)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Username: {player.username}</p>
            <p className="text-sm text-gray-600">Email: {player.email}</p>
            <p className="text-sm text-gray-600">Phone: {player.phoneNumber}</p>
            <p className="text-sm text-gray-600">City: {player.city}, {player.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

async function getData(id: Number) {
  const res = await fetch(`http://localhost:3000/api/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}