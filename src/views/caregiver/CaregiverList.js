import React, { useState } from "react";
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
import Pagination from "../../components/Pagination";
import qs from "qs";

function CaregiverList({ location }) {
  const [keyword, setKeyword] = useState("");
  const queryString = qs.parse(location.search.substr(1));
  const page = queryString.page ? queryString.page : 1;
  const blockSize = 5;
  const take = 10;
  const skip = take * (page - 1);

  const baseUrl = "?";
  const { data, loading } = useQuery(USER_LIST_QUERY, {
    variables: { type: "간병인", skip, take },
    pollInterval: 5000,
  });
  const history = useHistory();
  const handleRowClick = (userCode) => {
    history.push(`/admin/caregivers/${userCode}`);
  };
  return (
    <>
      {!loading && (
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">간병인 회원 리스트</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="m-b-10">
                    <input
                      type="text"
                      placeholder="회원 검색 (회원 이름을 입력해주세요.)"
                      onChange={(e) => {
                        setKeyword(e.target.value);
                      }}
                      className="form-control"
                    />
                  </div>
                  <Table responsive hover>
                    <colgroup>
                      <col width="25%" />
                      <col width="25%" />
                      <col width="25%" />
                      <col width="25%" />
                    </colgroup>
                    <thead className="text-primary">
                      <tr>
                        <th>회원 아이디</th>
                        <th>회원 이름</th>
                        <th>연락처</th>
                        <th>성별</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loading && keyword == ""
                        ? data?.listUser?.users
                            ?.slice(0)
                            .reverse()
                            .map((item, index) => {
                              return (
                                <tr
                                  key={index}
                                  onClick={() => handleRowClick(item.code)}
                                >
                                  <td>{item.userId}</td>
                                  <td>{item.userName}</td>
                                  <td>
                                    {item.phone.substr(0, 3) +
                                      "-" +
                                      item.phone.substr(3, 4) +
                                      "-" +
                                      item.phone.substr(7, 4)}
                                  </td>
                                  <td>{item.sex}</td>
                                </tr>
                              );
                            })
                        : data?.listUser?.users
                            ?.filter((user) => user.userName.includes(keyword))
                            .map((filteredUser, index) => {
                              return (
                                <tr
                                  key={index}
                                  onClick={() =>
                                    handleRowClick(filteredUser.code)
                                  }
                                >
                                  <td>{filteredUser.userId}</td>
                                  <td>{filteredUser.userName}</td>
                                  <td>
                                    {filteredUser.phone.substr(0, 3) +
                                      "-" +
                                      filteredUser.phone.substr(3, 4) +
                                      "-" +
                                      filteredUser.phone.substr(7, 4)}
                                  </td>
                                  <td>{filteredUser.sex}</td>
                                </tr>
                              );
                            })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Pagination
            totalRecord={data.listUser.count}
            blockSize={blockSize}
            pageSize={take}
            currentPage={page}
            baseUrl={baseUrl}
          />
        </div>
      )}
    </>
  );
}

export default CaregiverList;
