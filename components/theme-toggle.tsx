'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

import { Button } from './ui/button';

const ThemeToggle = () => {
  const Toggle = () => {
    setToggle(!toggle);
    toggle ? setTheme('dark') : setTheme('light');
  };
  const { setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);

  return (
    <Button className="rounded-lg px-3 py-2" onClick={() => Toggle()}>
      {toggle ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

export default ThemeToggle;
