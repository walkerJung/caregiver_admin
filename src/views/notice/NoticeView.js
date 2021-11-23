import React, { useState } from "react";
import { Card, CardBody, Row, Col, ButtonGroup, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import {
  NOTICE_LIST_QUERY,
  NOTICE_DETAIL_QUERY,
  NOTICE_DELETE_MUTATION,
} from "../../config/Queries";
import ReactMoment from "react-moment";
import Alert from "react-bootstrap/Alert";
import { toast } from "react-toastify";

function NoticeView({ match }) {
  const [showAlert, setShowAlert] = useState(false);
  const code = parseInt(match.params.id);
  const { data, loading } = useQuery(NOTICE_DETAIL_QUERY, {
    variables: {
      code,
    },
  });
  const history = useHistory();
  const handleRowClick = (noticeCode) => {
    history.push(`/admin/notices`);
  };
  const [deleteNotice] = useMutation(NOTICE_DELETE_MUTATION, {
    variables: {
      code,
    },
    refetchQueries: () => [
      {
        query: NOTICE_LIST_QUERY,
        variables: {
          code,
        },
      },
    ],
  });
  const onDeleteClick = () => {
    deleteNotice();
    toast.success("공지사항 삭제가 완료되었습니다.", {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
    });
    history.push(`/admin/notices`);
  };
  return (
    <>
      {!loading && (
        <div className="content">
          <Card>
            <div className="card-heading">{data?.viewNotice?.title}</div>
            <CardBody>
              <div className="underline p-b-15 m-b-15">
                <span className="text-muted m-l-5">
                  작성일 :
                  <ReactMoment format="YYYY-MM-DD">
                    {parseInt(data?.viewNotice?.createdAt)}
                  </ReactMoment>
                </span>
              </div>

              <div className="article-editor">{data?.viewNotice?.content}</div>
            </CardBody>
          </Card>
          <Row>
            <Col xs="6" sm="6" className="text-left">
              <Button
                onClick={() => {
                  handleRowClick();
                }}
                className="btn-white"
              >
                <i className="fa fa-list"></i>
                목록
              </Button>
            </Col>
            <Col xs="6" sm="6" className="text-right">
              <ButtonGroup className="btn-group">
                <Button
                  onClick={() => {
                    history.push(`/admin/notices/${code}/edit`);
                  }}
                  className="btn-white text-success"
                >
                  <i className="fas fa-edit"></i>
                  수정
                </Button>
                <Button
                  onClick={() => {
                    setShowAlert(true);
                  }}
                  className="btn btn-white text-danger delete"
                >
                  <i className="fas fa-trash"></i>
                  삭제
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          {showAlert && (
            <Alert variant="danger">
              <Alert.Heading>공지사항을 삭제하시겠습니까?</Alert.Heading>
              <p>
                삭제된 공지사항은 복구가 불가능합니다. 확인 후 삭제를
                진행해주세요!
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={onDeleteClick} variant="outline-success">
                  삭제
                </Button>
                <Button
                  onClick={() => setShowAlert(false)}
                  variant="outline-success"
                >
                  취소
                </Button>
              </div>
            </Alert>
          )}
        </div>
      )}
    </>
  );
}

export default NoticeView;
