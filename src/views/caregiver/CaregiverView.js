import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { useQuery } from "@apollo/client";
import { USER_DETAIL_QUERY } from "../../config/Queries";

function PatientView({ match }) {
  const code = parseInt(match.params.id);
  const { data, loading } = useQuery(USER_DETAIL_QUERY, {
    variables: {
      code,
    },
  });
  return (
    <>
      {!loading && (
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/damir-bosnjak.jpg").default}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg").default}
                      />
                      <h5 className="title">{data?.viewProfile?.userId}</h5>
                    </a>
                    <div className="profile-list">
                      <div className="list flex">
                        <div className="tit">회원 분류</div>
                        <div className="txt">{data?.viewProfile?.userType}</div>
                      </div>
                      <div className="list flex">
                        <div className="tit">회원 이름</div>
                        <div className="txt">{data?.viewProfile?.userName}</div>
                      </div>
                      <div className="list flex">
                        <div className="tit">회원 성별</div>
                        <div className="txt">{data?.viewProfile?.sex}</div>
                      </div>
                      <div className="list flex">
                        <div className="tit">회원 연락처</div>
                        <div className="txt">{data?.viewProfile?.phone}</div>
                      </div>
                      <div className="list flex">
                        <div className="tit">회원 가입일</div>
                        <div className="txt">
                          {data?.viewProfile?.createdAt}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">간병인 정보</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>거주주소</label>
                          <Input
                            defaultValue={
                              data?.viewProfile?.CaregiverInfo[0]?.address +
                              " " +
                              data?.viewProfile?.CaregiverInfo[0]?.addressDetail
                            }
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>주민등록번호</label>
                          <Input
                            defaultValue={
                              data?.viewProfile?.CaregiverInfo[0]
                                ?.residentNumber
                            }
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label>흡연 여부</label>
                          <Input
                            defaultValue={
                              data?.viewProfile?.CaregiverInfo[0]?.smoke
                            }
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>음주 여부</label>
                          <Input
                            defaultValue={
                              data?.viewProfile?.CaregiverInfo[0]?.drink
                            }
                            disabled
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>가능한 식사케어</label>
                          <Input
                            defaultValue={
                              data?.viewProfile?.CaregiverInfo[0]?.mealCare
                            }
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="6">
                        <FormGroup>
                          <label>가능한 대소변케어</label>
                          <Input
                            defaultValue={
                              data?.viewProfile?.CaregiverInfo[0]?.urineCare
                            }
                            disabled
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>가능한 석션케어</label>
                          <Input
                            defaultValue={
                              data?.viewProfile?.CaregiverInfo[0]?.suctionCare
                            }
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="6">
                        <FormGroup>
                          <label>가능한 이동케어</label>
                          <Input
                            defaultValue={
                              data?.viewProfile?.CaregiverInfo[0]?.moveCare
                            }
                            disabled
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>가능한 침대케어</label>
                          <Input
                            defaultValue={
                              data?.viewProfile?.CaregiverInfo[0]?.bedCare
                            }
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>신분증 사진</label>
                          <Input
                            defaultValue={
                              data?.viewProfile?.CaregiverInfo[0]?.idCard
                            }
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>통장사본 사진</label>
                          <Input
                            defaultValue={
                              data?.viewProfile?.CaregiverInfo[0]?.bankInfo
                            }
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default PatientView;
