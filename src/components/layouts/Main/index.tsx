import type { PropsWithChildren } from "react";

import MainHeader, { NavMenuOnLtLg } from "./header";
import MainFooter from "./footer";
import CursorContainer from "./cursor-container";
import { cx } from "class-variance-authority";

const MainLayout = (props: PropsWithChildren) => {
  return (
    <CursorContainer>
      <MainHeader />
      <main className={cx("bg-special-primary-200 flex flex-grow flex-col")}>
        {props.children}
      </main>
      <MainFooter />
      <NavMenuOnLtLg />
    </CursorContainer>
  );
};

export default MainLayout;
