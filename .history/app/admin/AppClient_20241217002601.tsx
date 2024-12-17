"use client";

import dynamic from "next/dynamic";

const App = dynamic(() => import('./app'), { ssr: false });

const AppClient = async () => {
  return <App />;
};

export default AppClient;
