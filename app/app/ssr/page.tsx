import { app as getSdk } from "@/lib/get-sdk";
import { NextAppPage } from "@/types/app-dir";
import Button from "./buttons";

const Page: NextAppPage = async () => {
  const { sdk } = await getSdk();
  return <Button loggedIn={!!sdk} />;
};

export default Page;