import {LoadingStatus} from "../loading.slice";

export default function isPending(status?: LoadingStatus) {
  return status === "pending";
}
