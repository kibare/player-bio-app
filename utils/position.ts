const positionAbbreviations: { [key: string]: string } = {
    forward: 'FW',
    midfielder: 'MF',
    defender: 'DF',
    goalkeeper: 'GK'
  };
  
  export const convertPosition = (position: string): string => {
    return positionAbbreviations[position.toLowerCase()] || position;
  };
  