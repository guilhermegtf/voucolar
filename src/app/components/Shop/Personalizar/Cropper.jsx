import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Modal } from 'react-bootstrap';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Button, Label, Input, TextArea, Select, Option, Main } from './styles';
import ImageDnD from '../../ImageDnD';
import ImageCropper from './ImageCropper';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const CropperCasePhone = (props) => {
  const [show, setShow] = useState(false);
  const [cropperRef, setCropperRef] = useState([]);
  const [imageUrl, setImageUrl] = useState(props.url);
  const [load, setLoad] = useState(false);
  const [result, setResult] = useState(false);
  const [text, setText] = useState({
    data: '',
    size: 30,
    font: 'Arial, sans-serif',
    color: '#000000',
  });

  const drawCanvas = (canvas) => {
    if (!text.data) return;
    let context = canvas.getContext('2d');
    let maxWidth = canvas.width - 10;
    let lineHeight = text.size * 1.5;
    let x = (canvas.width - maxWidth) / 2;
    let y = lineHeight + 5;
    context.fillStyle = text.color;
    context.font = `${text.size * 1.5}px ${text.font}`;
    context.clearRect(0, 0, canvas.width, canvas.height);
    text.data.split('\n').forEach((lineValue) => {
      let words = lineValue.split(' ');
      var line = '';
      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          context.fillText(line, x, y);
          line = words[n] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      context.fillText(line, x, y);
      y += lineHeight;
      context.fillText('', x, y);
    });
    return canvas;
  };

  useEffect(() => {
    drawCanvas(document.getElementById('mytextcanvas'));
  }, [text]);

  useEffect(() => {
    props.output(result);
  }, [result]);

  const fileOutput = (files) => {
    const urls = files.map((file) => URL.createObjectURL(file));
    let newUrls = [...urls, ...imageUrl];
    setImageUrl([]);
    setImageUrl(newUrls);
    setLoad(true);
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    margin: `0 8px 0 0`,
    opacity: isDragging ? '1' : '0.7',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? '#a166954d' : 'none',
    display: 'flex',
    padding: 8,
    overflow: 'auto',
    maxHeight: '340px',
    border: 'dashed #ced4da 1px',
  });

  const reorder = (list, startIndex, endIndex) => {
    let result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    result = result.map((item, index, array) => {
      item.element.parentNode.style.zIndex = array.length - index;
      return item;
    });
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const croppers = reorder(
      cropperRef,
      result.source.index,
      result.destination.index
    );
    setCropperRef(croppers);
  };

  const downloadImage = () => {
    // Crop
    if (!cropperRef) return;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = true;
    const { width, height } = cropperRef[0].getCropBoxData();
    canvas.width = width * 5;
    canvas.height = height * 5;
    let downloadCropper = cropperRef.sort((a, b) =>
      a.element.parentNode.style.zIndex > b.element.parentNode.style.zIndex
        ? 1
        : -1
    );
    downloadCropper.forEach((crop) => {
      const croppedCanvas = crop.getCroppedCanvas();
      context.drawImage(croppedCanvas, 0, 0, width * 5, height * 5);
    });
    context.globalCompositeOperation = 'destination-in';
    canvas.toBlob(function (blob) {
      let url = URL.createObjectURL(blob);
      setResult(url);
      handleClose();
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Personalizar
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        scrollable
        size="xl"
        keyboard={false}
      >
        {/* <Modal.Header closeButton /> */}
        <Modal.Body>
          <Main>
            <div>
              <ImageCropper
                imageUrl={imageUrl}
                cropperRef={setCropperRef}
                phoneFace={`${props.phone}/Fundo-${props.phone}.jpg`}
                phoneMask={`${props.phone}/Web-${props.phone}.png`}
                type={props.type}
              />
            </div>

            {props.type === 'dev' && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px',
                }}
              >
                <div>
                  <ImageDnD
                    callback={fileOutput}
                    accept={['image/*']}
                    multiple={true}
                  />
                  <TextArea
                    value={text.data}
                    onChange={(event) => {
                      let data = event.target.value;
                      setText((oldText) => ({ ...oldText, data }));
                    }}
                    placeholder="Digite aqui para adicionar para colocar seu nome, o nome do seu pet ou qualquer texto que desejar!"
                  />
                  <Select
                    value={text.font}
                    onChange={(event) => {
                      let font = event.target.value;
                      setText((oldText) => ({ ...oldText, font }));
                    }}
                  >
                    <Option value="Arial, sans-serif">Arial, sans-serif</Option>
                    <Option value="Verdana, sans-serif">
                      Verdana, sans-serif
                    </Option>
                    <Option value="Trebuchet MS, sans-serif">
                      Trebuchet MS, sans-serif
                    </Option>
                    <Option value="Gill Sans, sans-serif">
                      Gill Sans, sans-serif
                    </Option>
                    <Option value="Arial Narrow, sans-serif">
                      Arial Narrow, sans-serif
                    </Option>
                    <Option value="Times, Times New Roman, serif">
                      Times, Times New Roman, serif
                    </Option>
                    <Option value="Georgia, serif">Georgia, serif</Option>
                    <Option value="Palatino, URW Palladio L, serif">
                      Palatino, URW Palladio L, serif
                    </Option>
                    <Option value="Andale Mono, monospace">
                      Andale Mono, monospace
                    </Option>
                    <Option value="Courier New, monospace">
                      Courier New, monospace
                    </Option>
                    <Option value="FreeMono, monospace">
                      FreeMono, monospace
                    </Option>
                    <Option value="Comic Sans MS, Comic Sans, cursive">
                      Comic Sans MS, Comic Sans, cursive
                    </Option>
                    <Option value="Brush Script MT, Brush Script Std, cursive">
                      Brush Script MT, Brush Script Std, cursive
                    </Option>
                    <Option value="Impact, fantasy">Impact, fantasy</Option>
                  </Select>
                  <div style={{ display: 'flex' }}>
                    <Input
                      max="92"
                      min="30"
                      type="number"
                      value={text.size}
                      onChange={(event) => {
                        let size = event.target.value;
                        setText((oldText) => ({
                          ...oldText,
                          size: parseInt(size),
                        }));
                      }}
                    />
                    <Input
                      type="color"
                      value={text.color}
                      style={{ height: '36.44px' }}
                      onChange={(event) => {
                        let color = event.target.value;
                        setText((oldText) => ({ ...oldText, color }));
                      }}
                    />
                    <Button
                      onClick={() => {
                        if (!text.data) return;
                        setLoad(false);
                        let canvas = document.getElementById('mytextcanvas');
                        canvas = drawCanvas(canvas);
                        canvas.toBlob(function (blob) {
                          let url = URL.createObjectURL(blob);

                          let newUrls = [...[url], ...imageUrl];
                          setImageUrl([]);
                          setImageUrl(newUrls);
                          setLoad(true);
                          setText({
                            data: '',
                            size: 30,
                            font: 'Arial, sans-serif',
                            color: '#000000',
                          });
                        });
                      }}
                    >
                      Adicionar
                    </Button>
                  </div>
                  {text.data.length > 0 && (
                    <div style={{ overflow: 'auto', height: '200px' }}>
                      <canvas id="mytextcanvas" width="500" height="500" />
                    </div>
                  )}

                  {load && (
                    <>
                      <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable
                          droppableId="droppable"
                          direction="horizontal"
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              style={getListStyle(snapshot.isDraggingOver)}
                              {...provided.droppableProps}
                            >
                              {cropperRef.map((item, index) => (
                                <Draggable
                                  key={index}
                                  draggableId={index.toString()}
                                  index={index}
                                >
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                      )}
                                      onDoubleClick={() => {
                                        const dragObject = {
                                          destination: { index: 0 },
                                          source: { index },
                                        };
                                        onDragEnd(dragObject);
                                      }}
                                    >
                                      <img
                                        alt="imagecropper"
                                        src={item.element.src}
                                        width="100"
                                        height="100"
                                      />
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </DragDropContext>
                      <Label>* Arraste as imagens para o nível desejado.</Label>
                      <Label>
                        ** Somente a primeira imagem pode ser editada no
                        dispositivo.
                      </Label>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '10px',
                        }}
                      >
                        <Button
                          onClick={() => {
                            setImageUrl([]);
                            setLoad(false);
                          }}
                        >
                          <AiOutlineCloseCircle style={{ fontSize: '25px' }} />
                          {' Substituir Imagens'}
                        </Button>
                      </div>
                      <br />
                    </>
                  )}
                </div>
              </div>
            )}
          </Main>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Fechar</Button>
          {props.type === 'dev' && (
            <Button onClick={downloadImage}>Salvar</Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

CropperCasePhone.propTypes = {
  type: PropTypes.string,
  url: PropTypes.array,
  phone: PropTypes.string,
  output: PropTypes.func,
};
CropperCasePhone.defaultProps = {
  type: 'prod',
  url: [],
  output: () => {},
};
export default CropperCasePhone;
