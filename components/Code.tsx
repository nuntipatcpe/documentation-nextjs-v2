import React from "react";
import { PrismLight } from "react-syntax-highlighter";
import * as theme from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {};
//a11yDark
function Code({ children, language }: any) {
  return (
    <div>
      <PrismLight
        language={language === undefined ? "javascript" : language}
        style={theme.atomDark}
      >
        {children}
      </PrismLight>
    </div>
  );
}

export default Code;
