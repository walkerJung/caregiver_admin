import React, { useState } from "react";

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
import ReactMoment from "react-moment";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { USER_DETAIL_QUERY, USER_DELETE_MUTATION } from "../../config/Queries";

function CaregiverView({ match }) {
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();
  const code = parseInt(match.params.id);
  const { data, loading } = useQuery(USER_DETAIL_QUERY, {
    variables: {
      code,
    },
  });
  const updateDeleteUser = (cache, result) => {
    const {
      data: {
        deleteAccount: { ok },
      },
    } = result;
    if (ok) {
      history.go(`/admin/caregivers`);
    }
  };
  const [deleteUser] = useMutation(USER_DELETE_MUTATION, {
    variables: {
      code,
    },
    update: updateDeleteUser,
  });
  const onDeleteClick = () => {
    deleteUser();
    history.push(`/admin/caregivers`);
  };
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
                    src={require("assets/img/card-img.jpg").default}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={
                          require("assets/img/patient_caregiver.jpeg").default
                        }
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
                          <ReactMoment format="YYYY-MM-DD">
                            {parseInt(data?.viewProfile?.createdAt)}
                          </ReactMoment>
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
                              data?.viewProfile?.CaregiverInfo[0]?.address
                                ? data?.viewProfile?.CaregiverInfo[0]?.address +
                                  " " +
                                  data?.viewProfile?.CaregiverInfo[0]
                                    ?.addressDetail
                                : "미입력 상태"
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
                                ? data?.viewProfile?.CaregiverInfo[0]
                                    ?.residentNumber
                                : "미입력 상태"
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
                                ? data?.viewProfile?.CaregiverInfo[0]?.smoke
                                : "미입력 상태"
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
                                ? data?.viewProfile?.CaregiverInfo[0]?.drink
                                : "미입력 상태"
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
                                ? data?.viewProfile?.CaregiverInfo[0]?.mealCare
                                : "미입력 상태"
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
                                ? data?.viewProfile?.CaregiverInfo[0]?.urineCare
                                : "미입력 상태"
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
                                ? data?.viewProfile?.CaregiverInfo[0]
                                    ?.suctionCare
                                : "미입력 상태"
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
                                ? data?.viewProfile?.CaregiverInfo[0]?.moveCare
                                : "미입력 상태"
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
                                ? data?.viewProfile?.CaregiverInfo[0]?.bedCare
                                : "미입력 상태"
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
                                ? data?.viewProfile?.CaregiverInfo[0]?.idCard
                                : "미입력 상태"
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
                                ? data?.viewProfile?.CaregiverInfo[0]?.bankInfo
                                : "미입력 상태"
                            }
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="danger"
                          // onClick={onDeleteClick}
                          onClick={() => {
                            setShowAlert(true);
                          }}
                        >
                          회원정보 삭제
                        </Button>
                      </div>
                    </Row>
                  </Form>
                  {showAlert && (
                    <Alert variant="danger">
                      <Alert.Heading>
                        회원정보를 삭제하시겠습니까?
                      </Alert.Heading>
                      <p>
                        삭제된 회원정보는 복구가 불가능합니다. 확인 후 삭제를
                        진행해주세요!
                      </p>
                      <hr />
                      <div className="d-flex justify-content-end">
                        <Button
                          onClick={onDeleteClick}
                          variant="outline-success"
                        >
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
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default CaregiverView;
