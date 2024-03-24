import Vapi from "@vapi-ai/react-native";

const vapi = new Vapi(
  process.env.api_key || "812437de-42ce-4bca-a9e7-e62cd170e882"
);

export default vapi;
