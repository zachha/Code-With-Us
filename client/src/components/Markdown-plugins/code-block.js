import React from "react";
import Async from "react-promise"
import Prism from "prismjs/components/prism-core";
//other languages depend on these
//import {loadLanguages} from "prismjs/components";
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
      //try to load prism component for language
     let out = import("prismjs/components/prism-"+props.language).then(() => {
        html = Prism.highlight(props.value ||"...", Prism.languages[props.language]);
        cls = `language-${props.language}`;
      })
      .catch(er => {
        console.log(er.message+": \""+props.language+"\"");
        let lang="js";
        html = Prism.highlight(props.value||"...", Prism.languages[lang]);
        cls = `language-${lang}`;
       })
      return ( <Async promise={out} then={() =>  <pre className={cls}>
            <code
              dangerouslySetInnerHTML={{__html: html}}
              className={cls}
            />
            </pre>} />
      )
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