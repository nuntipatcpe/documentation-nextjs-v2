import React, { useState } from "react";
import { PrismLight } from "react-syntax-highlighter";
import * as theme from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

//a11yDark
//atomDark
//dracula
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
    <>
      <div className="code">
        <CopyToClipboard text={children} onCopy={() => hendleCopyied()}>
          <button disabled={buttonDisabled} className="copy active">
            {copyAc}
          </button>
        </CopyToClipboard>
        <PrismLight
          language={language === undefined ? "javascript" : language}
          style={theme.dracula}
        >
          {children}
        </PrismLight>
      </div>
    </>
  );
}

export default Code;
