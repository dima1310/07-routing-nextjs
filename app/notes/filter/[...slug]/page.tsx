import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import SidebarNotes from "../@sidebar/page";
import css from "./NotesPage.module.css";

export default async function FilterPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const tag = slug?.[0] || "All";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tag],
    queryFn: () => fetchNotes({ tag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={css.layout}>
        <aside className={css.sidebar}>
          <SidebarNotes />
        </aside>
        <main className={css.main}>
          <NotesClient tag={tag} />
        </main>
      </div>
    </HydrationBoundary>
  );
}
