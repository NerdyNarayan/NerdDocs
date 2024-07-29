'use client';
import type { FC } from 'react';

import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { SiteConfig } from 'config/site';
const Hero: FC = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="text-8xl font-bold text-secondary">{SiteConfig.name}</h1>
        <p className="text-2xl text-secondary/80">{SiteConfig.description}</p>
        <a
          className=" underline"
          href={SiteConfig.links.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub className="text-3xl" />
        </a>
      </div>
    </main>
  );
};

export default Hero;
