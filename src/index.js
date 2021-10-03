import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DropzoneArea } from "material-ui-dropzone";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files) {
    this.setState({
      files: files
    });
  }

  render() {
    return (
      <DropzoneArea
        dropzoneProps={{
          validator: (file) => {
            console.log("is this even called?");
            return {
              code: "i-wanted",
              message: `Because I wanted`
            };
          }
        }}
        acceptedFiles={["text/csv"]}
        showPreviews={true}
        showPreviewsInDropzone={false}
        showFileNames={true}
        keepLocal={true}
        useChipsForPreview
        previewText="Selected File"
        dropzoneText={"upload csv file"}
        onDrop={this.handleUpload}
        showAlerts={true}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
