import React, { useState } from "react";
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
  Button,
} from "reactstrap";
import ReactMoment from "react-moment";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ANNOUNCEMENT_LIST_QUERY } from "../../config/Queries";
import Pagination from "../../components/Pagination";
import qs from "qs";

function AnnouncementList({ location }) {
  const queryString = qs.parse(location.search.substr(1));
  const page = queryString.page ? queryString.page : 1;
  const blockSize = 5;
  const take = 10;
  const skip = take * (page - 1);

  const baseUrl = "?";

  const [status, setStatus] = useState(0);
  const { data, loading } = useQuery(ANNOUNCEMENT_LIST_QUERY, {
    variables: {
      status: status ? status : 0,
      skip,
      take,
    },
    pollInterval: 500,
  });
  const history = useHistory();
  const handleRowClick = (announcementCode) => {
    history.push(`/admin/announcements/${announcementCode}`);
  };
  const [open, SetToggle] = useState(false);
  const toggle = () => SetToggle(!open);
  return (
    <>
      {!loading && (
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">간병인 공고 리스트</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row className="m-b-15">
                    <Col xs="12" sm="8">
                      <InputGroup className="input-group">
                        <Dropdown
                          className="m-r-5"
                          isOpen={open}
                          toggle={toggle}
                        >
                          <DropdownToggle className="btn-white" caret>
                            공고 상태 검색
                          </DropdownToggle>
                          <DropdownMenu container="body">
                            <DropdownItem header>공고 상태</DropdownItem>
                            <DropdownItem
                              onClick={() => {
                                setStatus(1);
                              }}
                            >
                              예상간병비 산출중
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => {
                                setStatus(2);
                              }}
                            >
                              예상간병비 산출완료
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => {
                                setStatus(3);
                              }}
                            >
                              환자 희망간병비 입력완료
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => {
                                setStatus(4);
                              }}
                            >
                              간병인 선택완료 및 입금대기
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => {
                                setStatus(5);
                              }}
                            >
                              입금완료
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Table responsive hover>
                    <colgroup>
                      <col width="10%" />
                      <col width="*" />
                      <col width="15%" />
                      <col width="15%" />
                      <col width="15%" />
                    </colgroup>
                    <thead className="text-primary">
                      <tr>
                        <th>연번</th>
                        <th>공고 제목</th>
                        <th>작성자</th>
                        <th>공고 상태</th>
                        <th>작성일</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loading &&
                        data?.listAnnouncement?.announcements?.map(
                          (item, index) => {
                            return (
                              <tr
                                key={index}
                                onClick={() => handleRowClick(item.code)}
                              >
                                <td>
                                  {data?.listAnnouncement?.announcements
                                    .length - index}
                                </td>
                                <td>{item.title}</td>
                                <td>{item.patientName}</td>
                                {item.status == 1 && <td>예상간병비 산출중</td>}
                                {item.status == 2 && (
                                  <td>예상간병비 산출완료</td>
                                )}
                                {item.status == 3 && (
                                  <td>환자 희망간병비 입력완료</td>
                                )}
                                {item.status == 4 && (
                                  <td>간병인 선택완료 및 입금대기</td>
                                )}
                                {item.status == 5 && <td>입금완료</td>}
                                <td>
                                  <ReactMoment format="YYYY.MM.DD">
                                    {parseInt(item.createdAt)}
                                  </ReactMoment>
                                </td>
                              </tr>
                            );
                          }
                        )}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Pagination
            totalRecord={data.listAnnouncement.count}
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

export default AnnouncementList;
