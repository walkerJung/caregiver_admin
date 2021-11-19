import React, { useState } from "react";
import {
  Card,
  Form,
  Label,
  Input,
  Col,
  FormGroup,
  CardBody,
  InputGroupText,
  InputGroup,
} from "reactstrap";

function AnnouncementWrite() {
  return (
    <>
      <div className="content">
        <Card>
          <div className="card-heading">공고 정보 작성</div>
          <CardBody>
            <Form>
              <FormGroup row>
                <Label
                  for="announcement_title"
                  sm={2}
                  className="control-label"
                >
                  공고 제목
                </Label>
                <Col sm={10}>
                  <Input
                    id="announcement_title"
                    name="announcement_title"
                    placeholder="제목 공고를 입력해주세요."
                    type="text"
                  />
                </Col>
              </FormGroup>

              {/* 간병일자 */}
              <FormGroup row>
                <Label for="startDate" sm={2} className="control-label">
                  시작일
                </Label>
                <Col sm={4}>
                  <Input
                    id="startDate"
                    name="startDate"
                    placeholder="시작일"
                    type="date"
                  />
                </Col>

                <Label for="startTime" sm={2} className="control-label">
                  시작 시간
                </Label>
                <Col sm={4}>
                  <Input
                    id="startTime"
                    name="startTime"
                    placeholder="시작 시간"
                    type="time"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="endDate" sm={2} className="control-label">
                  종료일
                </Label>
                <Col sm={4}>
                  <Input
                    id="endDate"
                    name="endDate"
                    placeholder="종료일"
                    type="date"
                  />
                </Col>

                <Label for="endTime" sm={2} className="control-label">
                  종료 시간
                </Label>
                <Col sm={4}>
                  <Input
                    id="endTime"
                    name="endTime"
                    placeholder="종료 시간"
                    type="time"
                  />
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>

        {/* 보호자 정보 */}
        <Card>
          <div className="card-heading">보호자 정보</div>
          <CardBody>
            <Form>
              <FormGroup row>
                <Label for="guardianName" sm={2} className="control-label">
                  보호자 성함
                </Label>
                <Col sm={10}>
                  <Input
                    id="guardianName"
                    name="guardianName"
                    placeholder="보호자 성함을 입력해주세요."
                    type="text"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="guardianNumber" sm={2} className="control-label">
                  보호자 연락처
                </Label>
                <Col sm={10}>
                  <Input
                    id="guardianNumber"
                    name="guardianNumber"
                    placeholder="보호자 연락처를 입력해주세요."
                    type="text"
                  />
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>

        {/* 환자 기본 정보 */}
        <Card>
          <div className="card-heading">환자 기본 정보 작성</div>
          <CardBody>
            <Form>
              <FormGroup row>
                <Label for="patientName" sm={2} className="control-label">
                  환자 성함
                </Label>
                <Col sm={10}>
                  <Input
                    id="patientName"
                    name="patientName"
                    placeholder="환자 성함을 입력해주세요."
                    type="text"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="gender" sm={2} className="control-label">
                  성별
                </Label>
                <Col sm={4}>
                  <Input
                    id="gender"
                    name="gender"
                    placeholder="성별 입력"
                    type="select"
                  >
                    <option>남자</option>
                    <option>여자</option>
                  </Input>
                </Col>

                <Label for="age" sm={2} className="control-label">
                  나이
                </Label>
                <Col sm={4}>
                  <InputGroup>
                    <Input
                      id="age"
                      name="age"
                      placeholder="나이 입력"
                      type="text"
                    />
                    <InputGroupText>세</InputGroupText>
                  </InputGroup>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="weight" sm={2} className="control-label">
                  몸무게
                </Label>
                <Col sm={4}>
                  <InputGroup>
                    <Input
                      id="weight"
                      name="weight"
                      placeholder="몸무게 입력"
                      type="text"
                    />
                    <InputGroupText>kg</InputGroupText>
                  </InputGroup>
                </Col>

                <Label for="ranking" sm={2} className="control-label">
                  장기요양등급
                </Label>
                <Col sm={4}>
                  <Input
                    id="ranking"
                    name="ranking"
                    placeholder="장기요양등급"
                    type="select"
                  >
                    <option>해당하지 않음</option>
                    <option>장기요양 1등급</option>
                    <option>장기요양 2등급</option>
                    <option>장기요양 3등급</option>
                    <option>장기요양 4등급</option>
                    <option>장기요양 5등급</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="address" sm={2} className="control-label">
                  간병 받으실 주소
                </Label>
                <Col sm={10}>
                  <Input
                    id="address"
                    name="address"
                    placeholder="간병 받으실 주소를 입력해주세요."
                    type="text"
                  />
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>

        {/* 환자 상세 정보 */}
        <Card>
          <div className="card-heading">환자 상세 정보</div>
          <CardBody>
            <Form>
              <FormGroup row>
                <Label for="meal_care" sm={2} className="control-label">
                  식사 보조 케어
                </Label>
                <Col sm={10}>
                  <Input
                    id="meal_care"
                    name="meal_care"
                    placeholder="식사 보조 케어 여부"
                    type="select"
                  >
                    <option>필요하지 않음</option>
                    <option>콧줄 식사케어</option>
                    <option>뱃줄 식사케어</option>
                    <option>전적으로 먹여줌</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="feces_care" sm={2} className="control-label">
                  대소변 케어
                </Label>
                <Col sm={10}>
                  <Input
                    id="feces_care"
                    name="feces_care"
                    placeholder="대소변 케어 여부"
                    type="select"
                  >
                    <option>필요하지 않음</option>
                    <option>소변주머니 케어</option>
                    <option>장루 케어</option>
                    <option>기저귀 케어</option>
                    <option>이동변기 케어</option>
                    <option>소변통 케어</option>
                    <option>관장</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="suction_care" sm={2} className="control-label">
                  석션 케어
                </Label>
                <Col sm={10}>
                  <Input
                    id="suction_care"
                    name="suction_care"
                    placeholder="석션 케어 여부"
                    type="select"
                  >
                    <option>필요하지 않음</option>
                    <option>목 석션</option>
                    <option>코 석션</option>
                    <option>입 석션</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="move_care" sm={2} className="control-label">
                  이동 케어
                </Label>
                <Col sm={10}>
                  <Input
                    id="move_care"
                    name="move_care"
                    placeholder="이동 케어 여부"
                    type="select"
                  >
                    <option>필요하지 않음</option>
                    <option>휠체어 이동케어</option>
                    <option>지팡이 보행 이동케어</option>
                    <option>워커보행 이동케어</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="bed_care" sm={2} className="control-label">
                  침대 케어
                </Label>
                <Col sm={10}>
                  <Input
                    id="bed_care"
                    name="bed_care"
                    placeholder="침대 케어 여부"
                    type="select"
                  >
                    <option>필요하지 않음</option>
                    <option>침대에서 휠체어 이동케어</option>
                    <option>체위(자세)변경</option>
                    <option>욕창관리</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="hygiene_care" sm={2} className="control-label">
                  위생 케어
                </Label>
                <Col sm={10}>
                  <Input
                    id="hygiene_care"
                    name="hygiene_care"
                    placeholder="침대 케어 여부"
                    type="select"
                  >
                    <option>필요하지 않음</option>
                    <option>전적으로 도와줌</option>
                    <option>화장실에서 도와줌</option>
                    <option>침상에서 도와줌</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="caregiver_meal" sm={2} className="control-label">
                  간병인 식사 제공
                </Label>
                <Col sm={10}>
                  <Input
                    id="caregiver_meal"
                    name="caregiver_meal"
                    placeholder="간병인 식사 제공 여부"
                    type="select"
                  >
                    <option>제공함</option>
                    <option>제공하지 않음</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="infectious" sm={2} className="control-label">
                  감염성 질환
                </Label>
                <Col sm={10}>
                  <Input
                    id="infectious"
                    name="infectious"
                    placeholder="감염성 질환 여부"
                    type="select"
                  >
                    <option>없음</option>
                    <option>감염성 피부질환 있음</option>
                    <option>감염성 기타질환 있음 </option>
                  </Input>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default AnnouncementWrite;
