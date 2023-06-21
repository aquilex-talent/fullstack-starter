import React from 'react';
import Head from "next/head";

import { Card, CardContent, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS with MUI, TailwindCSS and TypeScript Starter</title>
        <meta
          name="description"
          content="NextJS with MUI, Tailwind CSS and TypeScript Starter"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Card>
          <CardContent>
            <Typography variant="h1" className="text-red-500">
              An example of working MUI components, styled with TailWind!
            </Typography>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
