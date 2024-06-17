import { useDynamicConfig } from "@statsig/expo-bindings";

export default function App() {
  return <AccessDynamicConfig />;
}

const AccessDynamicConfig = () => {
  const config = useDynamicConfig("test_flag");
  const enabled = config.get("testFlag", false);
  console.log("testFlag", enabled);
  return enabled;
};
