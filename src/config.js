import convict from "convict";

const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV"
  },
  app: {
    port: {
      doc: "The applications exposed port",
      format: Number,
      default: 3000,
      env: "PORT"
    }
  },
  darkskies: {
    key: {
      doc: "API Key for Darkskies",
      format: String,
      default: "",
      env: "DARK_SKIES_API_KEY"
    },
    host: {
      doc: "Root domain for DarkSkies API",
      format: String,
      default: "",
      env: "DARK_SKIES_API_HOST"
    }
  }
});

// Perform validation
config.validate({ allowed: "strict" });

export { config };
