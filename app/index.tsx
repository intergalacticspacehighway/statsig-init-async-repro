import { StatsigProvider } from "@/components/statsig-provider";
import { useDynamicConfig } from "@statsig/expo-bindings";

export default function App() {
  return (
    <StatsigProvider>
      <AccessDynamicConfig />
    </StatsigProvider>
  );
}

const AccessDynamicConfig = () => {
  const config = useDynamicConfig("test_flag");
  const enabled = config.get("testFlag", false);
  return <div>{enabled.toString()}</div>;
};
