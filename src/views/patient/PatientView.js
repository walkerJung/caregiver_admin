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
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import {
  USER_DETAIL_QUERY,
  USER_DELETE_MUTATION,
  USER_LIST_QUERY,
} from "../../config/Queries";

function PatientView({ match }) {
  const history = useHistory();
  const code = parseInt(match.params.id);
  const { data } = useQuery(USER_DETAIL_QUERY, {
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
      history.go(`/admin/patients`);
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
    history.push(`/admin/patients`);
  };

  return (
    <>
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
                        <Input
                          defaultValue={data?.viewProfile?.createdAt}
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
                        onClick={onDeleteClick}
                      >
                        회원정보 삭제
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PatientView;
