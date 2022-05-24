import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";

const Content = ({ dark, className,handleChangeEssayAnswer,answers,questionSelected}) => {
    const i =questionSelected.data.id
    return (
    <div className={className}>
      <CKEditor
        editor={ClassicEditor}
        data={answers[i]?`${answers[i]}`:'Trình bày câu trả lời của bạn ở đây'}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {

        }}
        onBlur={(event, editor) => {
          const data = editor.getData();
          handleChangeEssayAnswer(data)
        }}
        onFocus={(event, editor) => {
          if(!answers[i]){
              const data = '<p></p>'
            handleChangeEssayAnswer(data)
          }
        }}
      />
    </div>
  );
};

const EssayTest = styled(Content)`
      .ck.ck-editor__main>.ck-editor__editable {
        background: ${(props) => (props.dark ? "green" : "none")};
        border-radius: 0;
        min-height: 450px
    }
    }
  }
`;
export default EssayTest;
