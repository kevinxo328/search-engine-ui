import { getSearch } from "@/actions/action";
import { Metadata } from "next/types";

type Props = {
  params: {
    q: string;
  };
};

export const generateMetadata = (props: Props): Metadata => {
  return {
    title: `Search: ${props.params.q}`,
    description: `Search: ${props.params.q}`,
  };
};

const Page = async (props: Props) => {
  const data = await getSearch(props.params.q);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </div>
  );
};

export default Page;
