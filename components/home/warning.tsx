'use client';
import Link from 'next/link';
import React, { type FC } from 'react';

const Warning: FC = () => {
  return (
    <div className="items-center  rounded-xl border-2  px-2 py-1 text-purple-500 dark:text-purple-300 ">
      <span>
        &quot;This guide is a work in progress. If you have any suggestions,
        please feel free to contact me on
      </span>{' '}
      <Link href={'https://www.linkedin.com/'}>
        <span className="text-blue-500 dark:text-blue-300">LinkedIn </span>
      </Link>
      <span>
        {''}
        If your suggestions are valuable, I will add them to the list and give
        you credit.&quot;
      </span>
    </div>
  );
};

export default Warning;
