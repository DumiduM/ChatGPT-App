import { OpenAIApi, Configuration } from "openai";
import { config } from "dotenv"

config()

const configuration = new Configuration({
    organization: "org-M1aW1Urhq8iZOmvK9MfHPkgL",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

console.log(process.env.OPENAI_API_KEY);
