import {setupWorker} from "msw";
import handlers from "../handlers/handlres";

const worker = setupWorker(...handlers);

export default worker;
