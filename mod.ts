import Client, { sendMessage, Intents, config } from "./deps.ts";
config({ export: true, safe: true, allowEmptyValues: true });

const DISCORD_TOKEN = Deno.env.get("DISCORD_TOKEN");
if (DISCORD_TOKEN == null) throw new Error("DISCORD_TOKEN env is undefined");

Client({
  token: DISCORD_TOKEN,
  intents: [Intents.GUILD_MESSAGES, Intents.GUILDS],
  eventHandlers: {
    ready: () => {
      console.log("Bot is ready.");
    },
    messageCreate: (message) => {
      if (message.author.bot) return;
      if (message.content === "!ping") {
        sendMessage(message.channel, "pong");
      }
    },
  },
});
