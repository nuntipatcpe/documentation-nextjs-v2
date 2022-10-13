import React, { useState } from "react";
import { PrismLight } from "react-syntax-highlighter";
import * as theme from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {};
//a11yDark
function Code({ children, language }: any) {
  const [copyAc, setCopyAc] = useState("copy");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  function hendleCopyied() {
    setCopyAc("copyed");
    setButtonDisabled(true);
    setTimeout(function () {
      setButtonDisabled(false);
      setCopyAc("copy");
    }, 1000);
  }
  return (
    <div className="code">
      <CopyToClipboard text={children} onCopy={() => hendleCopyied()}>
        <button disabled={buttonDisabled} className="copy active">
          {copyAc}
        </button>
      </CopyToClipboard>
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
