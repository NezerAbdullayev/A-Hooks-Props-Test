import { Box } from "./Box";

export const Table = (openEditPanel: () => void) => {
  const table = "a";

  return <Box onShow={openEditPanel}>table</Box>;
};
