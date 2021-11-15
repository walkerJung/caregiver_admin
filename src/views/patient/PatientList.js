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
import { USER_LIST_QUERY } from "../../config/Queries";

function PatientList() {
  const { data, loading } = useQuery(USER_LIST_QUERY);
  const history = useHistory();
  const handleRowClick = (userCode) => {
    history.push(`/admin/patients/${userCode}`);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">환자 회원 리스트</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>회원 아이디</th>
                      <th>회원 이름</th>
                      <th>연락처</th>
                      <th>성별</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!loading &&
                      data.listUser.users.map((item, index) => {
                        if (item.userType == "환자") {
                          return (
                            <tr
                              key={index}
                              onClick={() => handleRowClick(item.code)}
                            >
                              <td>{item.userId}</td>
                              <td>{item.userName}</td>
                              <td>{item.phone}</td>
                              <td>{item.sex}</td>
                            </tr>
                          );
                        }
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

export default PatientList;
