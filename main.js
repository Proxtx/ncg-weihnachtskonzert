import { listen } from "@proxtx/framework";
import process from "process";

let result = await listen(process.env.PORT);
let combineHandler = await result.combineHandler(result.server);
combineHandler.onCombine("reactionReceiver", (module) => {
  global.handler(module);
});

console.log("Server started. Port:", process.env.PORT);
