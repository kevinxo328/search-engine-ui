"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};
const Error = (props: Props) => {
  useEffect(() => {
    console.error(props.error);
  }, [props.error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button onClick={() => props.reset()}>Reset</Button>
    </div>
  );
};

export default Error;
