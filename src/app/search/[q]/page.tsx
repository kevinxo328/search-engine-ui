import { getSearch } from "@/actions/action";
import { Metadata } from "next/types";

type Props = {
  params: {
    q: string;
  };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { q } = await props.params;
  return {
    title: `Search: ${q}`,
    description: `Search: ${q}`,
  };
};

const Page = async (props: Props) => {
  const { q } = await props.params;
  const data = await getSearch(q);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </div>
  );
};

export default Page;
