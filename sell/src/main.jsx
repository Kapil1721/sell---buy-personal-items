import React, { Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
// import './App.css'
import './index.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { BackdropLoader, BackdropLoaderProvider, GlobalLoader } from './components/backdropLoader/BackdropLoader.jsx'
import { Toaster } from 'sonner'
import router from "./routes/main.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AuthProvider } from './auth/AuthContext.jsx'
import { NextUIProvider } from '@nextui-org/react'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <BackdropLoaderProvider>
              <BackdropLoader>
                <Main />
              </BackdropLoader>
            </BackdropLoaderProvider>

            {/* <BackdropLoader /> */}
            <Toaster position="top-center" theme='light' richColors />
          </BrowserRouter>
        </QueryClientProvider>
      </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>
)

export default function Main() {
  const content = useRoutes(router);


  return (

    <Suspense fallback={<GlobalLoader />}>
      <div>
        {content}
      </div>
    </Suspense>
  );
}