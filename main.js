import { listen } from "@proxtx/framework";
import config from "@proxtx/config";

let result = await listen(config.port);
let combineHandler = await result.combineHandler(result.server);
combineHandler.onCombine("reactionReceiver", (module) => {
  global.handler(module);
});

console.log("Server started. Port:", config.port);
