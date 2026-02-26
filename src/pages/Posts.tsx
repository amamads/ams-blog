import AddPostSheet from "@/features/posts/components/AddPostSheet";
import Table from "@/features/posts/components/Table";
import usePostsTable from "@/features/posts/hooks/usePostsTable";
import { H3 } from "@/shared/components/Typography";

export const Posts = () => {
  const { table, isLoading } = usePostsTable();
  
  return (
    <div>
      <div className="px-5 space-y-5">
        <header className="flex justify-end">
          <AddPostSheet />
        </header>
        {isLoading ? <H3>Loading...</H3> : <Table table={table} />}
      </div>
    </div>
  );
};
