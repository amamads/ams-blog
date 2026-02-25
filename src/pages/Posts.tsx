import AddPostSheet from "@/features/posts/components/AddPostSheet";
import Table from "@/features/posts/components/Table";
import usePostsTable from "@/features/posts/hooks/usePostsTable";

export const Posts = () => {
  const { table } = usePostsTable();
  return (
    <div>
      <div className="px-5 space-y-5">
        <header className="flex justify-end">
        <AddPostSheet/>
        </header>
        <Table table={table} />
      </div>
    </div>
  );
};
