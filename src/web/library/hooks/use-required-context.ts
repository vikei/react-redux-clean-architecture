import {useContext, Context} from "react";

export default function useRequiredContext<T>(context: Context<T>) {
  const ctx = useContext(context);
  if (!ctx) {
    throw Error(`You should wrap component in ${context.displayName ?? "Context Provider"}`);
  }
  return ctx!;
}
