import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { result } from "validate.js";
export const Dropzone: React.FC<any> = (props) => {
  const { fn, active, setter } = props;
  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    if (fileRejections && fileRejections.length > 0) {
      setter(true);
      return active({
        type: "display_name",
        payload: "Please select the rigth image format!",
      });
    }
    setter(false);
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () =>
        active({
          type: "display_name",
          payload: "Please select the rigth image format!",
        });
      reader.onload = (e) => {
        console.log(e.target?.result);
        // fn({ type: "photo_url", payload: reader.result });
      };
      //   reader.readAsArrayBuffer(file);
      acceptedFiles.forEach((file: any) => reader.readAsArrayBuffer(file));
    });
  }, []);
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      // Disable click and keydown behavior
      noClick: false,
      noKeyboard: true,
      accept: "image/jpeg, image/png",
      onDrop,
    });
  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {props.children}
      </div>
    </div>
  );
};
