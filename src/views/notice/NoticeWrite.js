import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

function NoticeWrite() {
  return (
    <>
      <div className="content">
        <Card>
          <div className="card-heading">본문</div>
          <CardBody>
            <Form>
              <FormGroup row>
                <Label sm={2} className="control-label">
                  공개 여부
                </Label>
                <Col sm={10}>
                  <FormGroup row className="input-formgroup m-0">
                    <FormGroup check className="input-formgroup">
                      <Input name="status" type="radio" id="status1" />
                      <Label check for="status1">
                        공개
                      </Label>
                    </FormGroup>
                    <FormGroup check className="input-formgroup">
                      <Input name="status" type="radio" id="status2" />
                      <Label check for="status2">
                        비공개
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="writeTitle" sm={2} className="control-label">
                  제목
                </Label>
                <Col sm={10}>
                  <Input
                    id="writeTitle"
                    name="writeTitle"
                    placeholder="제목을 입력해주세요."
                    type="text"
                  />
                </Col>
              </FormGroup>
              <div>여기에 에디터 넣으시면 될 것 같습니다.</div>
            </Form>
          </CardBody>
        </Card>
        <Row>
          <Col xs={4} className="text-left">
            <Button className="btn-white">
              <i class="fa fa-list"></i>
              목록
            </Button>
          </Col>
          <Col xs={4} className="text-center">
            <Button className="btn-inverse">
              <i class="fa fa-check"></i>확인
            </Button>
          </Col>
          <Col xs={4} className="text-right"></Col>
        </Row>
      </div>
    </>
  );
}

export default NoticeWrite;
