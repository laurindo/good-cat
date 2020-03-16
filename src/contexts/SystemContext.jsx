import React from "react";

const SystemContext = React.createContext({});

export const SystemProvider = SystemContext.Provider;
export const SystemConsumer = SystemContext.Consumer;

export default SystemContext;