import {message} from "antd";
import {MessageInstance} from "antd/lib/message";
import React, {createContext, ReactNode} from "react";
import useRequiredContext from "./use-required-context";

const MessagesContext = createContext<MessageInstance | undefined>(undefined);

export function MessagesProvider({children}: {children: ReactNode}) {
  const [api, contextHolder] = message.useMessage();

  return (
    <MessagesContext.Provider value={api}>
      <>
        {contextHolder}
        {children}
      </>
    </MessagesContext.Provider>
  );
}

export default function useMessages() {
  return useRequiredContext(MessagesContext);
}
