"use client";
import { Provider } from "react-redux";
import { store } from "@/Store/store"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}
  {/* <Toaster position='top-right' reverseOrder={true}/> */}
  </Provider>;
};
export default Providers;