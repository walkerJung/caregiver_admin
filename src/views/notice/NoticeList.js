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

function NoticeList() {
  const { data, loading } = useQuery(NOTICE_LIST_QUERY);
  console.log(data);
  const history = useHistory();
  const handleRowClick = (noticeCode) => {
    history.push(`/admin/notices/${noticeCode}`);
  };
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
                <Table responsive hover>
                  <thead className="text-primary">
                    <tr>
                      <th>연번</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!loading &&
                      data?.listNotice?.notices?.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            onClick={() => handleRowClick(item.code)}
                          >
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>관리자</td>
                            <td>{item.createdAt}</td>
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
