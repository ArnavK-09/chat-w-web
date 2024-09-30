// Imports required
import { createServer } from "node:http";
import {
  GroqAdapter,
  CopilotRuntime,
  copilotRuntimeNodeHttpEndpoint,
} from "@copilotkit/runtime";
import Groq from "groq-sdk";

// Init Groq
const groq = new Groq({ apiKey: process.env["GROQ_API_KEY"] });

// Setting up model
const serviceAdapter = new GroqAdapter({
  groq,
  model: "llama3-8b-8192",
});

// Creating server
const server = createServer((req, res) => {
  const runtime = new CopilotRuntime();
  const handler = copilotRuntimeNodeHttpEndpoint({
    endpoint: "/copilotkit",
    runtime,
    serviceAdapter: serviceAdapter,
  });

  return handler(req, res);
});

// Starting server
server.listen(4000, () => {
  console.log("[Copilot Kit Server Started!]");
});
