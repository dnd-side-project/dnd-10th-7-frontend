// _app.tsx
"use client";
import React from "react";
import queryClient from "@component/api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

function MyApp({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
