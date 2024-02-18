"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { PropsWithChildren } from "react"

const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
      mutations: {
        retry: 1
      }
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Providers