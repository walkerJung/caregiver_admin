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
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ANNOUNCEMENT_LIST_QUERY } from "../../config/Queries";

function AnnouncementList() {
  const { data, loading } = useQuery(ANNOUNCEMENT_LIST_QUERY);
  const history = useHistory();
  const handleRowClick = (noticeCode) => {
    history.push(`/admin/announcements/${noticeCode}`);
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
                <CardTitle tag="h4">간병인 공고 리스트</CardTitle>
              </CardHeader>
              <CardBody>
                {/*  */}
                <Row className="m-b-15">
                  <Col xs="12" sm="8">
                    <InputGroup className="input-group">
                      <Dropdown className="m-r-5" isOpen={open} toggle={toggle}>
                        <DropdownToggle className="btn-white" caret>
                          카테고리
                        </DropdownToggle>
                        <DropdownMenu container="body">
                          <DropdownItem header>카테고리</DropdownItem>
                          <DropdownItem onClick={function noRefCheck() {}}>
                            옵션 1
                          </DropdownItem>
                          <DropdownItem onClick={function noRefCheck() {}}>
                            옵션 2
                          </DropdownItem>
                          <DropdownItem onClick={function noRefCheck() {}}>
                            옵션 3
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </InputGroup>
                  </Col>
                  <Col xs="12" sm="4" className="text-right">
                    <Button onClick={() => {}} className="btn-inverse">
                      <i className="fas fa-pen m-r-5"></i>
                      <span className="">글 작성</span>
                    </Button>
                  </Col>
                </Row>
                <Table responsive hover>
                  <thead className="text-primary">
                    <tr>
                      <th>연번</th>
                      <th>공고 제목</th>
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
                              <td>{index + 1}</td>
                              <td>{item.title}</td>
                              <td>{item.status}</td>
                              <td>{item.createdAt}</td>
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
      </div>
    </>
  );
}

export default AnnouncementList;
