import {
  StatsigProviderExpo,
  warmCachingFromAsyncStorage,
} from "@statsig/expo-bindings";
import { StatsigClient } from "@statsig/js-client";
import { useEffect, useMemo } from "react";

export function StatsigProvider({ children }: { children: React.ReactNode }) {
  const myStatsigClient = useMemo(
    () =>
      new StatsigClient("YOUR_KEY", {
        userID: "anonymous",
      }),
    []
  );

  const warming = useMemo(() => {
    return warmCachingFromAsyncStorage(myStatsigClient);
  }, []);

  useEffect(() => {
    myStatsigClient.initializeAsync();
  }, []);

  return (
    <StatsigProviderExpo client={myStatsigClient} cacheWarming={warming}>
      {children}
    </StatsigProviderExpo>
  );
}
