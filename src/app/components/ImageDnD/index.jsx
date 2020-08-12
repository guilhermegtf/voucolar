import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Label, Box } from './style';

function ImageDnD({
  callback = () => {},
  label = 'Escolha uma imagem ou arraste e solte aqui',
  dragLabel = 'Solte o arquivo aqui!',
  multiple = false,
  accept = [],
}) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      callback(acceptedFiles);
    },
    [callback]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Box {...getRootProps()} isDragActive={isDragActive}>
      <input {...getInputProps({ multiple, accept })} />
      {isDragActive ? <Label>{dragLabel}</Label> : <Label>{label}</Label>}
      <FaCloudUploadAlt size="50px" />
    </Box>
  );
}
ImageDnD.propTypes = {
  callback: PropTypes.func,
  label: PropTypes.string,
  dragLabel: PropTypes.string,
  multiple: PropTypes.bool,
  accept: PropTypes.array,
};

export default ImageDnD;
