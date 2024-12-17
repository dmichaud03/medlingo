// app/admin/ClientApp.tsx
'use client';

import dynamic from 'next/dynamic';

const App = dynamic(() => import('./app'), { ssr: false });

const ClientApp = () => {
    return <App />;
};

export default ClientApp;
