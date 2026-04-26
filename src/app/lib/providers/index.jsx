import CallButtonContextProvider from "@/context/callButton.context";

const Providers = ({ children }) => {
  return <CallButtonContextProvider>{children}</CallButtonContextProvider>;
};

export default Providers;
