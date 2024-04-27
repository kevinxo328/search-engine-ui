import { getCustomSearch } from "@/actions/action";

type Props = {
  params: {
    q: string;
  };
};

const Page = async (props: Props) => {
  const data = await getCustomSearch(props.params.q);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </div>
  );
};

export default Page;
