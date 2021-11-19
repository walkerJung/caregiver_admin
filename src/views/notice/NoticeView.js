import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { NOTICE_LIST_QUERY } from "../../config/Queries";

function NoticeView() {
  return (
    <div className="content">
      <div className="row m-b-15">
        <div className="col-xs-6 col-sm-6 text-left">
          <button onClick={() => {}} className="btn btn-white" role="button">
            <i className="fa fa-list"></i>
            <span> 목록</span>
          </button>
        </div>
        <div className="col-xs-6 col-sm-6 text-right">
          <div className="btn-group">
            <button
              onClick={() => {}}
              className="btn btn-white text-success"
              role="button"
            >
              <i className="fas fa-edit"></i>
              <span> 수정</span>
            </button>
            <button
              onClick={() => {}}
              className="btn btn-white text-danger delete"
              role="button"
            >
              <i className="fas fa-trash"></i>
              <span> 삭제</span>
            </button>
          </div>
        </div>
      </div>
      <Card>
        <div className="card-heading">해당 공지사항 제목이 들어옵니다.</div>
        <CardBody>
          <div className="underline p-b-15 m-b-15">
            <span className="text-muted m-l-5">작성일 : 2021-11-09</span>
          </div>

          <div className="article-editor">여기에 본문이 들어옵니다</div>
        </CardBody>
      </Card>
      <div className="row">
        <div className="col-xs-6 col-sm-6 text-left">
          <button onClick={() => {}} className="btn btn-white" role="button">
            <i className="fa fa-list"></i>
            <span> 목록</span>
          </button>
        </div>
        <div className="col-xs-6 col-sm-6 text-right">
          <div className="btn-group">
            <button
              onClick={() => {}}
              className="btn btn-white text-success"
              role="button"
            >
              <i className="fas fa-edit"></i>
              <span> 수정</span>
            </button>
            <button
              onClick={() => {}}
              className="btn btn-white text-danger delete"
              role="button"
            >
              <i className="fas fa-trash"></i>
              <span> 삭제</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeView;
