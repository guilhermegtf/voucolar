import React, { useEffect, useState, createRef } from 'react';
import Cropper from 'cropperjs';
import PropTypes from 'prop-types';
import {
  FiPlus,
  FiMinus,
  FiRefreshCcw,
  FiRotateCw,
  FiRotateCcw,
} from 'react-icons/fi';
import {
  FaArrowsAltH,
  FaArrowsAltV,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
  FaCloudDownloadAlt,
} from 'react-icons/fa';
import { Button, Phone, PhoneMask, Container } from './styles';
import 'cropperjs/dist/cropper.css';
import availableOptions from './helper';

const ImageCropper = (props) => {
  const ref = Array.from({ length: props.imageUrl.length | 0 }, (a) =>
    createRef()
  );
  const [cropper, setCropper] = useState({});
  const [, setCropperReady] = useState(false);
  const [touch, setTouch] = useState(true);

  const cropOptions = Object.entries(props).reduce((acc, [key, value]) => {
    if (availableOptions.join().includes(key)) {
      acc[key] = value;
    }
    return acc;
  }, {});

  const downloadImage = () => {
    // Crop
    if (!cropper) return;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = true;
    const { width, height } = cropper[0].getCropBoxData();
    canvas.width = width * 5;
    canvas.height = height * 5;
    let downloadCropper = cropper.sort((a, b) =>
      a.element.parentNode.style.zIndex > b.element.parentNode.style.zIndex
        ? 1
        : -1
    );
    downloadCropper.forEach((crop) => {
      const croppedCanvas = crop.getCroppedCanvas();
      context.drawImage(croppedCanvas, 0, 0, width * 5, height * 5);
    });
    context.globalCompositeOperation = 'destination-in';
    const downloadFile = document.createElement('a');
    downloadFile.href = canvas.toDataURL();
    downloadFile.download = 'cropped.png';
    downloadFile.click();
  };
  const getActiveCropper = () => {
    return cropper.reduce((acc, item) => {
      if (!acc) acc = item;
      else if (
        item.element.parentNode.style.zIndex >
        acc.element.parentNode.style.zIndex
      )
        acc = item;
      return acc;
    }, null);
  };

  useEffect(() => {
    setCropper([]);
    if (props.imageUrl && ref.length) {
      const newCropper = props.imageUrl.map(
        (image, index) =>
          new Cropper(ref[index].current, {
            ...cropOptions,
            ready() {
              setCropperReady(true);
              props.onReady();
            },
          })
      );
      setCropper(newCropper);
      props.cropperRef(newCropper);
      setTouch(true);
      if (props.type === 'prod') setTouch(false);
    }
  }, [props.imageUrl]);

  if (props.imageUrl.length > 0)
    return (
      <div
        style={{
          display: 'grid',
        }}
      >
        <Container margin="10px">
          <Container margin="">
            <PhoneMask
              image={() =>
                require('../../../../../assets/phones/'.concat(props.phoneMask))
              }
              touch={touch}
            />
            {props.imageUrl.map((image, index, array) => (
              <div
                key={index}
                style={{
                  display: 'inline-block',
                  width: '230px',
                  height: '420px',
                  minWidth: '230px',
                  minHeight: '420px',
                  zIndex: array.length - index,
                  position: index && 'absolute',
                }}
              >
                <img
                  alt="crop"
                  ref={ref[index]}
                  src={image}
                  style={{ display: 'none', width: '100%' }}
                />
              </div>
            ))}
          </Container>
          {props.type === 'dev' && (
            <div style={{ display: 'grid', paddingLeft: '10px' }}>
              <Container>
                <Button
                  onClick={() => {
                    getActiveCropper().zoom(0.1);
                  }}
                >
                  <FiPlus />
                </Button>
                <Button
                  onClick={() => {
                    getActiveCropper().zoom(-0.1);
                  }}
                >
                  <FiMinus />
                </Button>
              </Container>
              <Container>
                <Button onClick={() => getActiveCropper().rotate(-15)}>
                  <FiRotateCcw />
                </Button>
                <Button onClick={() => getActiveCropper().rotate(15)}>
                  <FiRotateCw />
                </Button>
              </Container>
              <Container>
                <Button
                  onClick={() =>
                    getActiveCropper().scaleX(
                      -getActiveCropper().getImageData().scaleX
                    )
                  }
                >
                  <FaArrowsAltH />
                </Button>
                <Button
                  onClick={() =>
                    getActiveCropper().scaleY(
                      -getActiveCropper().getImageData().scaleY
                    )
                  }
                >
                  <FaArrowsAltV />
                </Button>
              </Container>
              <Container>
                <Button onClick={() => getActiveCropper().move(-10, 0)}>
                  <FaArrowLeft />
                </Button>
                <Button onClick={() => getActiveCropper().move(10, 0)}>
                  <FaArrowRight />
                </Button>
              </Container>
              <Container>
                <Button onClick={() => getActiveCropper().move(0, -10)}>
                  <FaArrowUp />
                </Button>
                <Button onClick={() => getActiveCropper().move(0, 10)}>
                  <FaArrowDown />
                </Button>
              </Container>
              <Container>
                <Button onClick={() => getActiveCropper().reset()}>
                  <FiRefreshCcw /> Reset
                </Button>
              </Container>
            </div>
          )}
        </Container>
        {props.type === 'prod' && (
          <>
            <Button onClick={downloadImage}>
              <FaCloudDownloadAlt /> Download
            </Button>
          </>
        )}
      </div>
    );
  return (
    <>
      <Container margin="9px">
        <Phone
          image={() =>
            require('../../../../../assets/phones/'.concat(props.phoneFace))
          }
          touch={touch}
        />
      </Container>
    </>
  );
};

ImageCropper.propTypes = {
  viewMode: PropTypes.number,
  dragMode: PropTypes.string,
  initialAspectRatio: PropTypes.number,
  aspectRatio: PropTypes.number,
  data: PropTypes.shape({}),
  preview: PropTypes.string,
  responsive: PropTypes.bool,
  restore: PropTypes.bool,
  checkCrossOrigin: PropTypes.bool,
  checkOrientation: PropTypes.bool,
  modal: PropTypes.bool,
  guides: PropTypes.bool,
  center: PropTypes.bool,
  highlight: PropTypes.bool,
  background: PropTypes.bool,
  autoCrop: PropTypes.bool,
  autoCropArea: PropTypes.number,
  movable: PropTypes.bool,
  rotatable: PropTypes.bool,
  scalable: PropTypes.bool,
  zoomable: PropTypes.bool,
  zoomOnTouch: PropTypes.bool,
  zoomOnWheel: PropTypes.bool,
  wheelZoomRatio: PropTypes.number,
  cropBoxMovable: PropTypes.bool,
  cropBoxResizable: PropTypes.bool,
  toggleDragModeOnDblclick: PropTypes.bool,
  minContainerWidth: PropTypes.number,
  minContainerHeight: PropTypes.number,
  minCanvasWidth: PropTypes.number,
  minCanvasHeight: PropTypes.number,
  minCropBoxWidth: PropTypes.number,
  minCropBoxHeight: PropTypes.number,
  ready: PropTypes.func,
  cropstart: PropTypes.func,
  cropmove: PropTypes.func,
  crop: PropTypes.func,
  zoom: PropTypes.func,
  onCrop: PropTypes.func.isRequired,
  onCropEnd: PropTypes.func,
  onCropStart: PropTypes.func,
  onCropMove: PropTypes.func,
  onReady: PropTypes.func,
  onZoom: PropTypes.func,
  cropperRef: PropTypes.func,
  imageUrl: PropTypes.array,
  phoneFace: PropTypes.string,
  phoneMask: PropTypes.string,
  type: PropTypes.string,
};

ImageCropper.defaultProps = {
  cropperRef: () => {},
  onCrop: () => {},
  onCropEnd: () => {},
  onCropStart: () => {},
  onCropMove: () => {},
  onReady: () => {},
  onZoom: () => {},
  checkCrossOrigin: true,
  viewMode: 0,
  dragMode: 'move',
  autoCropArea: 1,
  restore: false,
  modal: false,
  guides: false,
  center: false,
  highlight: false,
  cropBoxMovable: false,
  cropBoxResizable: false,
  toggleDragModeOnDblclick: false,
  background: false,
  zoomable: true,
  zoomOnWheel: true,
  wheelZoomRatio: 0.2,
  minCropBoxWidth: 230,
  minCropBoxHeight: 480,
  imageUrl: [],
  type: 'prod',
};

export default ImageCropper;
