import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";
import ReactMoment from "react-moment";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { NOTICE_LIST_QUERY } from "../../config/Queries";

function NoticeList() {
  const { data, loading } = useQuery(NOTICE_LIST_QUERY);
  const history = useHistory();
  const handleRowClick = (noticeCode) => {
    history.push(`/admin/notices/${noticeCode}`);
  };

  const [open, SetToggle] = useState(false);
  const toggle = () => SetToggle(!open);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">공지사항 리스트</CardTitle>
              </CardHeader>

              <CardBody>
                <Row className="m-b-15">
                  <Col xs="12" sm="12" className="text-right">
                    <Button
                      onClick={() => {
                        history.push("/admin/noticewrite");
                      }}
                      className="btn-inverse"
                    >
                      <i className="fas fa-pen m-r-5"></i>
                      <span className="">글 작성</span>
                    </Button>
                  </Col>
                </Row>
                <Table responsive hover>
                  <thead className="text-primary">
                    <tr>
                      {/* <th></th> */}
                      <th>연번</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!loading &&
                      data?.listNotice?.notices
                        ?.slice(0)
                        .reverse()
                        .map((item, index) => {
                          return (
                            <tr
                              key={index}
                              onClick={() => handleRowClick(item.code)}
                            >
                              <td>
                                {data?.listNotice?.notices.length - index}
                              </td>
                              <td>{item.title}</td>
                              <td>관리자</td>
                              <td>
                                <ReactMoment format="YYYY-MM-DD">
                                  {parseInt(item.createdAt)}
                                </ReactMoment>
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default NoticeList;
