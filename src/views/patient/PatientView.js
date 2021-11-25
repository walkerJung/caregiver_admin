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

function PatientView({ match }) {
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();
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
          type: "환자",
          skip: 0,
          take: 10,
        },
      },
    ],
  });
  const onDeleteClick = () => {
    deleteUser();
    toast.success("환자 회원 삭제가 완료되었습니다.", {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
    });
    history.push(`/admin/patients`);
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
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">환자 정보</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>회원 아이디</label>
                          <Input
                            defaultValue={data?.viewProfile?.userId}
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>회원 분류</label>
                          <Input
                            defaultValue={data?.viewProfile?.userType}
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>회원 이름</label>
                          <Input
                            defaultValue={data?.viewProfile?.userName}
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>회원 성별</label>
                          <Input
                            defaultValue={data?.viewProfile?.sex}
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>회원 연락처</label>
                          <Input
                            defaultValue={data?.viewProfile?.phone}
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>회원 가입일</label>
                          <ReactMoment format="YYYY-MM-DD">
                            {parseInt(data?.viewProfile?.createdAt)}
                          </ReactMoment>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="danger"
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
                        삭제된 회원정보는 복구가 불가능합니다. <br />
                        환자회원이 작성했던 공고 데이터도 함께 삭제가 됩니다.
                        <br />
                        확인 후 삭제를 진행해주세요!
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

export default PatientView;
