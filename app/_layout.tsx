import { StatsigProvider } from "@/components/statsig-provider";
import { Slot } from "expo-router";

export const Layout = () => {
  return (
    <StatsigProvider>
      <Slot />
    </StatsigProvider>
  );
};
