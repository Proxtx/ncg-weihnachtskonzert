import { listen } from "@proxtx/framework";
import process from "process";

let result = await listen(process.env.PORT || 3007);
let combineHandler = await result.combineHandler(result.server);
combineHandler.onCombine("reactionReceiver", (module) => {
  try {
    global.handler(module);
  } catch {
    console.log("websocket error");
  }
});

combineHandler.onCombine("textReceiver", (module) => {
  try {
    global.textHandler(module);
  } catch {
    console.log("websocket error");
  }
});

console.log("Server started. Port:", process.env.PORT || 3007);
