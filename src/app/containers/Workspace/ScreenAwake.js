// import both default and named
import React from 'react';
import { useEffect } from 'react';
import useStayAwake from 'use-stay-awake';

const ScreenAwake = ({ children }) => {
  const device = useStayAwake();

  useEffect(() => {
    device.preventSleeping();
  }, []);

  return <>{children}</>;
};

export default ScreenAwake;
