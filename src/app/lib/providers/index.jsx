import CallButtonContextProvider from "@/context/callButton.context";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Providers = ({ children }) => {
  return (
    <CallButtonContextProvider>
      {children}
      <ToastContainer />
    </CallButtonContextProvider>
  );
};

export default Providers;
