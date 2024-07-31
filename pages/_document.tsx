import { Html, Head, Main, NextScript } from 'next/document';
import { SkipNavLink } from 'nextra-theme-docs';

import { ThemeProvider } from '@components/theme-provider';

import { fonts } from './_app';

const Document = () => {
  return (
    <Html className={fonts.sans.variable} dir="ltr" lang="en-US">
      <Head />
      <body className="min-h-screen w-full bg-background">
        <SkipNavLink styled />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
