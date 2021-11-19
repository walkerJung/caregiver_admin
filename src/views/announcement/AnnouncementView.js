import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
import { Panel, BoldTxt, Center, FormControl } from "assets/css/adminStyle";
import { MdEast } from "react-icons/md";

function AnnouncementView() {
  const [isModal, setIsModal] = useState(false);
  const toggle = () => setIsModal(!isModal);

  return (
    <>
      <div className="content">
        <Panel panelHeadingTit="공고 정보">
          <div className="form-group row">
            <label className="col-sm-3 control-label">공고 제목</label>
            <div className="col-sm-9">여기는 공고 제목이 들어갑니다!</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">간병 기간</label>
            <div className="col-sm-9">
              <p>
                시작일(2021.11.12) 18:00 <MdEast /> 종료일(2021.11.13) 12:00{" "}
                <BoldTxt>(2박 3일)</BoldTxt>
              </p>
            </div>
          </div>
        </Panel>

        <Panel panelHeadingTit="보호자 정보">
          <div className="form-group row">
            <label className="col-sm-3 control-label">보호자 성함</label>
            <div className="col-sm-9">김보호</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">연락처</label>
            <div className="col-sm-9">010-1234-1234</div>
          </div>
        </Panel>

        <Panel panelHeadingTit="환자 기본 정보">
          <div className="form-group row">
            <label className="col-sm-3 control-label">성함</label>
            <div className="col-sm-9">김환자</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">연락처</label>
            <div className="col-sm-9">010-1234-1234</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">성별</label>
            <div className="col-sm-9">남자</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">나이</label>
            <div className="col-sm-9">40세</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">몸무게</label>
            <div className="col-sm-9">64kg</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">장기요양등급</label>
            <div className="col-sm-9">1등급</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">간병받으실 주소</label>
            <div className="col-sm-9">대전광역시 중구 ooo동 이상한 병원 </div>
          </div>
        </Panel>

        <Panel panelHeadingTit="환자 상세 정보">
          <div className="form-group row">
            <label className="col-sm-3 control-label">식사보조</label>
            <div className="col-sm-9">콧줄 식사케어</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">대소변 케어</label>
            <div className="col-sm-9">소변주머니 케어</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">석션 케어</label>
            <div className="col-sm-9">목 석션</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">이동 케어</label>
            <div className="col-sm-9">휠체어 이동케어</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">침대 케어</label>
            <div className="col-sm-9">침대에서 휠체어 이동케어</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">위생 케어</label>
            <div className="col-sm-9">전적으로 도와줌</div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 control-label">간병인 식사</label>
            <div className="col-sm-9">제공함</div>
          </div>
        </Panel>

        <Center mt="50">
          <Button size="54" color="danger" onClick={setIsModal}>
            간병비 산출
          </Button>
        </Center>
        <Modal toggle={toggle} isOpen={isModal}>
          <ModalHeader toggle={toggle}>간병비 산출</ModalHeader>
          <ModalBody>
            <FormControl
              className="form-control"
              type="text"
              placeholder="간병비 산출"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={!setIsModal}>
              확인
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default AnnouncementView;
