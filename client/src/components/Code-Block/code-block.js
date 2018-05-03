import React from "react";
import Prism from "prismjs";

let CodeBlock = {
  Block (props){
    //console.log(props.value)
    let html = Prism.highlight(props.value||"...", Prism.languages["js"]);
    let cls = "language-js";
    
    return (
      <pre className={cls}>
        <code
          dangerouslySetInnerHTML={{__html: html}}
          className={cls}
        />
      </pre>
    );
  },
  InLine(props) {
      let html = props.value;
      let cls = "language-js";    
      return (
          <code
            dangerouslySetInnerHTML={{__html: html}}
            className={cls}
          />
      );
  }
};

export default CodeBlock;