import { serve } from "inngest/next";
import { inngest } from "../../lib/inngest/client";
//import { helloWorld } from "../../lib/inngest/function";
// Create an API that serves zero functions
import {
  checkBudgetAlerts
} from "../../lib/inngest/function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
 
    checkBudgetAlerts,
  ],
});