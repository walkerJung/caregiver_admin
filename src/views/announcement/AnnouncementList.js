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

function AnnouncementList() {
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
                {/* 검색 */}
                <InputGroup className="searchBox">
                  <Input
                    type="text"
                    name="search"
                    className="form-control"
                    title="검색어 입력"
                    placeholder="검색어(제목, 내용) 입력"
                    value=""
                  />

                  <Button
                    onClick={() => {}}
                    className="btn btn-white"
                    type="submit"
                  >
                    <i className="fa fa-search"></i>
                    검색
                  </Button>
                </InputGroup>

                {/*  */}
                <Row className="m-b-15">
                  <Col xs="12" sm="8">
                    <InputGroup className="input-group">
                      <label
                        htmlFor="all_clecker"
                        className="input-group-addon m-r-5"
                      >
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="all_clecker"
                        />
                      </label>
                      <Button
                        onClick={() => {}}
                        className="btn btn-white m-r-5"
                      >
                        <i className="fas fa-trash m-r-5"></i>
                        삭제
                      </Button>
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
                      <Button className="btn-inverse">확인</Button>
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
