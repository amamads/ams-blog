import Table from "@/features/posts/components/Table";
import usePostsTable from "@/features/posts/hooks/usePostsTable";

export const Posts = () => {
  const { table } = usePostsTable();
  return (
    <div>
      <div className="px-5">
        {/* <div className="col-flex">
          <span>{'['}</span>
          <div className="ml-3">
          {content.map((item) => (
            <P className="flex gap-2">
              <span>{'{'}</span>
              {item.type === "text" ? (
                <>
                  <span>type: {item.type}</span>
                  <span>,</span>
                  <span className="truncate w-1/2">text: {item.content}</span>
                </>
              ) : (
                <>
                  <span>type: {item.type}</span>
                  <span>,</span>
                  <span>URL: {item.src}</span>
                  <span>,</span>
                  <span>alt: {item.alt}</span>
                </>
              )}
              <span>{'},'}</span>
            </P>
          ))}
          </div>
          <span>{']'}</span>
        </div> */}
        <Table table={table} />
      </div>
    </div>
  );
};
