import React from 'react';
import Image from 'next/image';
import { Player } from '@/types/Player';
import dataset from '@/public/dataset.json'
import { convertPosition } from '@/utils/position';
import { capitalizeFirstLetter } from '@/utils/capitalize';

interface PlayerDetailProps {
  player: Player;
}

function getData(id: Number) {
  const player = dataset.find((p) => p.id.toString() === id);
  return player;
}

export default function PlayerDetail({ params }: { params: { id: Number } }){
  const player = getData(params.id)

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
