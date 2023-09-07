import { OpenAIApi, Configuration } from "openai";
import { config } from "dotenv"
import readline from "readline"

config()

const configuration = new Configuration({
    organization: "org-M1aW1Urhq8iZOmvK9MfHPkgL",
    apiKey: process.env.OPENAI_API_KEY,
});

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

userInterface.prompt()
userInterface.on("line", async input => {
    const openai = new OpenAIApi(configuration);
    openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello ChatGPT"}]
    })
    .then(res => {
        console.log(response.data.choices[0].message.content)
        userInterface.prompt()
    })
})

