import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  Input,
  ButtonGroup,
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { NOTICE_LIST_QUERY } from "../../config/Queries";

function NoticeView() {
  return (
    <div className="content">
      <Row className="m-b-15">
        <Col xs="6" sm="6" className="text-left">
          <Button onClick={() => {}} className="btn-white">
            <i className="fa fa-list"></i>
            목록
          </Button>
        </Col>
        <Col xs="6" sm="6" className="text-right">
          <ButtonGroup className="btn-group">
            <Button onClick={() => {}} className="btn-white text-success">
              <i className="fas fa-edit"></i>
              수정
            </Button>
            <Button
              onClick={() => {}}
              className="btn btn-white text-danger delete"
            >
              <i className="fas fa-trash"></i>
              삭제
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Card>
        <div className="card-heading">해당 공지사항 제목이 들어옵니다.</div>
        <CardBody>
          <div className="underline p-b-15 m-b-15">
            <span className="text-muted m-l-5">작성일 : 2021-11-09</span>
          </div>

          <div className="article-editor">여기에 본문이 들어옵니다</div>
        </CardBody>
      </Card>
      <Row>
        <Col xs="6" sm="6" className="text-left">
          <Button onClick={() => {}} className="btn-white">
            <i className="fa fa-list"></i>
            목록
          </Button>
        </Col>
        <Col xs="6" sm="6" className="text-right">
          <ButtonGroup className="btn-group">
            <Button onClick={() => {}} className="btn-white text-success">
              <i className="fas fa-edit"></i>
              수정
            </Button>
            <Button
              onClick={() => {}}
              className="btn btn-white text-danger delete"
            >
              <i className="fas fa-trash"></i>
              삭제
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
}

export default NoticeView;
