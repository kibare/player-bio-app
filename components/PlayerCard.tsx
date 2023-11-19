import React from 'react';
import { Player } from '../types/Player';
import { convertPosition } from '@/utils/position';
import { capitalizeFirstLetter } from '@/utils/capitalize';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="p-2 flex flex-row gap-2 bg-white rounded-lg border border-gray-200 shadow-md transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
      <img className="rounded-lg w-32 h-44 object-cover" src={player.avatar} alt="avatar" />
      <div className='flex flex-col ml-4'>
        <h5 className="text-lg font-bold">{player.firstName} {player.lastName}</h5>
        <p className="text-gray-600">{convertPosition(player.position)} ({capitalizeFirstLetter(player.position)})</p>
        <div className='mt-4'>
          <table>
            <tbody>
              <tr>
                <td>City</td>
                <td className='pl-6'>:</td>
                <td>{player.city}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td className='pl-6'>:</td>
                <td>{player.country}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td className='pl-6'>:</td>
                <td>{player.phoneNumber}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td className='pl-6'>:</td>
                <td>{player.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;


