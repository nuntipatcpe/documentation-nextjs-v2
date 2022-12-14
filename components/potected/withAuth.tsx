import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { TOKEN } from "@/utils/constant";
import { authenSelector, singOut } from "@/store/slices/authenSlice";
import { useAppDispatch } from "@/store/store";

// eslint-disable-next-line react/display-name

const withAuth = (WrappedComponent: React.FC<any>) => (props: any) => {
  // this hoc only supports client side rendering.
  //   const token = localStorage.getItem(TOKEN);
  const selec = useSelector(authenSelector);

  if (isClient) {
    const router = useRouter();
    if (!selec.isAuthen) {
      if (isClient()) {
        router.push(`/auth/login`);
      }
    }
    return <WrappedComponent {...props} />;
  }

  return null;
};

export default withAuth;

export const isClient = () => typeof window !== "undefined";
