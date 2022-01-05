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
import {
  USER_LIST_QUERY,
  USER_DETAIL_QUERY,
  USER_DELETE_MUTATION,
} from "../../config/Queries";
import { toast } from "react-toastify";
import { Image } from "react-bootstrap";

function CaregiverView({ match }) {
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();
  const handleRowClick = (noticeCode) => {
    history.push("/admin/caregivers");
  };
  const code = parseInt(match.params.id);
  const { data, loading } = useQuery(USER_DETAIL_QUERY, {
    variables: {
      code,
    },
  });
  const [deleteUser] = useMutation(USER_DELETE_MUTATION, {
    variables: {
      code,
    },
    refetchQueries: () => [
      {
        query: USER_LIST_QUERY,
        variables: {
          type: "간병인",
          skip: 0,
          take: 10,
        },
      },
    ],
  });
  const onDeleteClick = () => {
    deleteUser();
    toast.success("간병인 회원 삭제가 완료되었습니다.", {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
    });
    history.push(`/admin/caregivers`);
  };

  if (!loading) {
    const {
      viewProfile: {
        userId,
        userType,
        userName,
        sex,
        phone,
        createdAt,
        caregiverInfo,
      },
    } = data;
    return (
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
                      src={require("assets/img/patient_caregiver.jpeg").default}
                    />
                    <h5 className="title">{userId}</h5>
                  </a>
                  <div className="profile-list">
                    <div className="list flex">
                      <div className="tit">회원 분류</div>
                      <div className="txt">{userType}</div>
                    </div>
                    <div className="list flex">
                      <div className="tit">회원 이름</div>
                      <div className="txt">{userName}</div>
                    </div>
                    <div className="list flex">
                      <div className="tit">회원 성별</div>
                      <div className="txt">{sex}</div>
                    </div>
                    <div className="list flex">
                      <div className="tit">회원 연락처</div>
                      <div className="txt">
                        {phone.substr(0, 3) +
                          "-" +
                          phone.substr(3, 4) +
                          "-" +
                          phone.substr(7, 4)}
                      </div>
                    </div>
                    <div className="list flex">
                      <div className="tit">회원 가입일</div>
                      <div className="txt">
                        <ReactMoment format="YYYY-MM-DD">
                          {parseInt(createdAt)}
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
                            caregiverInfo?.address
                              ? caregiverInfo?.address +
                                " " +
                                caregiverInfo?.addressDetail
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
                            caregiverInfo?.residentNumber
                              ? caregiverInfo?.residentNumber.substr(0, 6) +
                                "-" +
                                caregiverInfo?.residentNumber.substr(6, 7)
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
                            caregiverInfo?.smoke
                              ? caregiverInfo?.smoke
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
                            caregiverInfo?.drink
                              ? caregiverInfo?.drink
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
                            caregiverInfo?.mealCare
                              ? caregiverInfo?.mealCare
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
                            caregiverInfo?.urineCare
                              ? caregiverInfo?.urineCare
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
                            caregiverInfo?.suctionCare
                              ? caregiverInfo?.suctionCare
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
                            caregiverInfo?.moveCare
                              ? caregiverInfo?.moveCare
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
                            caregiverInfo?.bedCare
                              ? caregiverInfo?.bedCare
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
                    <Col md="6">
                      <FormGroup>
                        <label>신분증 사진</label>
                        {caregiverInfo?.idCard === "idCard" ? (
                          <div className="none-img-box">
                            <span>등록된 데이터가 없습니다.</span>
                          </div>
                        ) : (
                          <div
                            className="img-box"
                            style={{
                              backgroundImage: `url(${
                                "http://api.care-korea.kr" +
                                caregiverInfo?.idCard
                              })`,
                            }}
                          ></div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>통장사본 사진</label>
                        {caregiverInfo?.bankInfo === "bankInfo" ? (
                          <div className="none-img-box">
                            <span>등록된 데이터가 없습니다.</span>
                          </div>
                        ) : (
                          <div
                            className="img-box"
                            style={{
                              backgroundImage: `url(${
                                "http://api.care-korea.kr" +
                                caregiverInfo?.bankInfo
                              })`,
                            }}
                          ></div>
                        )}
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
                  <Alert variant="danger" className="m-t-20">
                    <Alert.Heading>회원정보를 삭제하시겠습니까?</Alert.Heading>
                    <p>
                      삭제된 회원정보는 복구가 불가능합니다. <br />
                      해당 간병인이 간병했던 간병내역에는 "탈퇴한 간병인" 이라고
                      명시됩니다. <br />
                      확인 후 삭제를 진행해주세요!
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                      <Button
                        onClick={onDeleteClick}
                        variant="outline-success"
                        className="m-r-5 btn-white"
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
        <Row>
          <Col xs="6" sm="6" className="text-left">
            <Button
              onClick={() => {
                handleRowClick();
              }}
              className="btn-white"
            >
              <i className="fa fa-list"></i>
              목록
            </Button>
          </Col>
        </Row>
      </div>
    );
  } else {
    return <div>등록된 데이터가 없습니다.</div>;
  }
}

export default CaregiverView;
