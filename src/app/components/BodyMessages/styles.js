import styled from 'styled-components';

export const MensagensWrapper = styled.div`
  padding-top: 12px;
  overflow-y: auto;
`;

export const MensagemEntradaWrapper = styled.div`
  padding-left: 9%;
  padding-right: 9%;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MensagemSaidaWrapper = styled.div`
  padding-left: 9%;
  padding-right: 9%;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Wrapper = styled.div`
  max-width: 65%;
`;

export const Container = styled.div`
  background-color: white;
  display: flex;
  border-radius: 5px;
  padding: 5px;
`;

export const Mensagem = styled.div`
  padding-left: 10px;
  padding-bottom: 3px;
  padding-top: 3px;
  word-break: break-all;
`;

export const Hora = styled.div`
  font-size: 10px;
  display: flex;
  align-items: flex-end;
  padding-left: 20px;
  padding-right: 5px;
`;

export const NaoVisto = styled.span`
  padding-left: 5px;
  color: #ebd1e3;
`;

export const Visto = styled.span`
  padding-left: 5px;
  color: green;
`;
