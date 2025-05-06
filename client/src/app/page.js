import Image from "next/image";
// import styles from "./page.module.css";
import Header from "../../../client/src/app/components/Header";
import QuickAction from "../../../client/src/app/components/QuickAction";
import SummaryCards from "../../../client/src/app/components/SummaryCards";
import CiCdIntegration from "../../../client/src/app/components/CiCdIntegration";
import RecentActivity from "../../../client/src/app/components/RecentActivity";

export default function Home() {
  return (
  <>
  <Header/>
  <QuickAction/>
  <SummaryCards/>
  <CiCdIntegration/>
  <RecentActivity/>
  </>
  );
}
