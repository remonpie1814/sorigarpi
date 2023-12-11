import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class MediaComponent extends React.Component {
  render() {
    const { block, contentState } = this.props;
    const { foo } = this.props.blockProps;
    const data = contentState.getEntity(block.getEntityAt(0)).getData();

    const emptyHtml = " ";
    return (
      <div>
        {emptyHtml}
        <img
          src={data.src}
          alt={data.alt || ""}
          style={{
            height: data.height || "auto",
            width: data.width || "auto",
          }}
        />
      </div>
    );
  }
}

export default class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  myBlockRenderer = (contentBlock) => {
    const type = contentBlock.getType();

    // Convert image type to mediaComponent
    if (type === "atomic") {
      return {
        component: MediaComponent,
        editable: false,
        props: {
          foo: "bar",
        },
      };
    }
  };

  render() {
    const { editorState } = this.state;

    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          customBlockRenderFunc={this.myBlockRenderer}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    );
  }
}
