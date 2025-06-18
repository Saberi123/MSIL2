import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

interface TimerProps {
  isActive: boolean; // Start or stop the timer
}

const Timer: React.FC<TimerProps> = ({ isActive }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isActive) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isActive]);

  // Format seconds to MM:SS
  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  };

  return <Text testID="text-time">{formatTime(seconds)}</Text>;
};

export default Timer;