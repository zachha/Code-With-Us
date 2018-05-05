import React from "react";
import Prism from "prismjs";

let CodeBlock = {
  Block (props){
    let html;
    let cls;
    //console.log(props.value)
    try{
      html = Prism.highlight(props.value||"...", Prism.languages[props.language]);
      cls = `language-${props.language}`;
    }
    catch(er){
      console.log(er.message+": \""+props.language+"\"");
      let lang="js";
      html = Prism.highlight(props.value||"...", Prism.languages[lang]);
      cls = `language-${lang}`;
    }
    
    
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