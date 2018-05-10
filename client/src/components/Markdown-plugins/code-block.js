import React from "react";
import Prism from "prismjs/components/prism-core";
//other languages depend on these
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import "prismjs/components/prism-java";
//include javascript as default fallback
import "prismjs/components/prism-javascript";

let CodeBlock = {
  Block (props){
    let html;
    let cls;
    //console.log(props.value)
    try{
      //try to load prism component for language
      import("prismjs/components/prism-"+props.language);
      html = Prism.highlight(props.value ||"...", Prism.languages[props.language]);
      cls = `language-${props.language}`;
    }
    catch(er){
      //if load failed, fall back to javascript
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