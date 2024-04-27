"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const GlobalError = (props: Props) => {
  useEffect(() => {
    console.error(props.error);
  }, [props.error]);

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => props.reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
