import styled from "styled-components";

export const BoldTxt = styled.span`
  font-weight: bold;
  color: #111;
`;
export const Center = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.mt}px;
`;
export const FormControl = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #212121;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;
export const Panel = ({ panelHeadingTit, children }) => {
  const PanelBox = styled.div`
    border: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    box-shadow: 0px 2px 6px rgb(0 0 0 / 10%);
    margin-bottom: 20px;

    .panelHeading {
      background-color: #333;
      padding: 10px 15px;
      border: none;
    }
    .panelHeadingTit {
      font-size: 12px;
      line-height: 20px;
      color: #fff;
      margin: 0;
    }
    .panel-body {
      background-color: #fff;
      padding: 0;
    }
    .panel-body.form-horizontal .form-group {
      border-bottom: 1px solid #eee;
      margin: 0;
      &:last-child {
        border-bottom: 0;
      }
      .control-label {
        margin: 0;
        padding: 10px;
        font-weight: 700;
      }
      > div {
        padding: 10px;
        border-left: 1px solid #eee;
      }
      p {
        margin: 0;
      }
    }
  `;

  return (
    <PanelBox>
      <div className="panelHeading">
        <h2 className="panelHeadingTit">{panelHeadingTit}</h2>
      </div>
      <div className="panel-body form-horizontal">{children}</div>
    </PanelBox>
  );
};
