import css from "./FilterLayout.module.css";

interface FilterLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}

export default function FilterLayout({
  children,
  sidebar,
  modal,
}: FilterLayoutProps) {
  return (
    <>
      <div className={css.layout}>
        <aside className={css.sidebar}>{sidebar}</aside>
        <main className={css.main}>{children}</main>
      </div>
      {modal}
    </>
  );
}
