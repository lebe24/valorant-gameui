import { Box } from "./Box.jsx";
import Bar from "./navbar.jsx";

export const Layout = ({ children }) => (
  <Box
  css={{
    Width: '$100%',
    marginTop:'$50',
}}
  >
    <Bar />
    {children}
  </Box>
);