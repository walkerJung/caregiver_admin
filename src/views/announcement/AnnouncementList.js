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

function AnnouncementList() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">간병인 공고 리스트</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead className="text-primary">
                    <tr>
                      <th>연번</th>
                      <th>공고 제목</th>
                      <th>작성자</th>
                      <th>작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>원트 간병인</td>
                      <td>정정훈</td>
                      <td>2021-11-09</td>
                    </tr>
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

export default AnnouncementList;
