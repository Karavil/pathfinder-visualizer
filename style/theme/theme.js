import { theme } from "@chakra-ui/core";
import colors from "./colors";
import typography from "./typography";

export default {
   ...theme,
   colors: {
      ...theme.colors,
      ...colors,
   },
   fonts: typography.fonts,
   fontSizes: typography.fontSizes,
   breakpoints: ["30em", "48em", "62em", "80em"],
};
