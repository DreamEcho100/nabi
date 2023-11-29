import { type PropsWithChildren } from "react";
import MainHeader, { NavMenuOnLtLg } from "./Header";
import MainFooter from "./Footer";
import CursorContainer from "./CursorContainer";
import { cx } from "class-variance-authority";

const MainLayout = (props: PropsWithChildren) => {
  return (
    <CursorContainer>
      <MainHeader />
      <main className={cx("flex flex-grow flex-col bg-special-primary-200")}>
        {props.children}
      </main>
      <MainFooter />
      <NavMenuOnLtLg />
    </CursorContainer>
  );
};

export default MainLayout;
