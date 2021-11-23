import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import { Panel, BoldTxt, Center, FormControl } from "assets/css/adminStyle";
import { MdEast } from "react-icons/md";
import Alert from "react-bootstrap/Alert";
import ReactMoment from "react-moment";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import {
  ANNOUNCEMENT_DETAIL_QUERY,
  EXPECTEDCOST_WRITE_QUERY,
  ANNOUNCEMENT_LIST_QUERY,
  COMPLETE_ANNOUNCEMENT_MUTATION,
} from "../../config/Queries";

function AnnouncementView({ match }) {
  const [showAlert, setShowAlert] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const toggle = () => setIsModal(!isModal);
  const history = useHistory();
  const handleRowClick = (noticeCode) => {
    history.push("/admin/announcements");
  };
  const code = parseInt(match.params.id);
  const { data, loading } = useQuery(ANNOUNCEMENT_DETAIL_QUERY, {
    variables: {
      code,
    },
  });
  const [expectedCostWriteMutation] = useMutation(EXPECTEDCOST_WRITE_QUERY, {
    refetchQueries: () => [
      {
        query: ANNOUNCEMENT_LIST_QUERY,
        variables: {
          status: 0,
        },
      },
      {
        query: ANNOUNCEMENT_DETAIL_QUERY,
        variables: {
          code,
        },
      },
    ],
  });
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    try {
      const {
        data: { result },
      } = await expectedCostWriteMutation({
        variables: {
          code,
          expectedCost: parseInt(data.expectedCost),
        },
      });

      setIsModal(false);
    } catch (e) {
      console.log(e);
    }
  };
  const findCaregiver = (announcementApplication) => {
    if (announcementApplication.confirm === true) {
      return true;
    }
  };
  const caregiver =
    !loading &&
    data?.viewAnnouncement?.announcementApplication.find(findCaregiver);

  const [completeAnnouncement] = useMutation(COMPLETE_ANNOUNCEMENT_MUTATION, {
    variables: {
      code,
    },
    refetchQueries: () => [
      {
        query: ANNOUNCEMENT_DETAIL_QUERY,
        variables: {
          code,
        },
      },
    ],
  });

  const announcementComplete = () => {
    completeAnnouncement();
  };

  return (
    <>
      {!loading && (
        <div className="content">
          <Panel panelHeadingTit="공고 정보">
            <div className="form-group row">
              <label className="col-sm-3 control-label">공고 제목</label>
              <div className="col-sm-9">{data?.viewAnnouncement?.title}</div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">간병 기간</label>
              <div className="col-sm-9">
                <p>
                  시작일:{" "}
                  <ReactMoment format="YYYY-MM-DD HH:MM">
                    {parseInt(data?.viewAnnouncement?.startDate)}
                  </ReactMoment>{" "}
                  <MdEast /> 종료일:{" "}
                  <ReactMoment format="YYYY-MM-DD HH:MM">
                    {parseInt(data?.viewAnnouncement?.endDate)}
                  </ReactMoment>{" "}
                  <BoldTxt>(2박3일)</BoldTxt>
                </p>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">예상간병비</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.expectedCost
                  ? data?.viewAnnouncement?.expectedCost
                  : "미입력"}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">환자 희망간병비</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.hopeCost
                  ? data?.viewAnnouncement?.hopeCost
                  : "미입력"}
              </div>
            </div>
          </Panel>
          {caregiver?.user && (
            <Panel panelHeadingTit="간병인 정보">
              <div className="form-group row">
                <label className="col-sm-3 control-label">담당 간병인</label>
                <div className="col-sm-9">
                  {caregiver.user.userName}({caregiver.user.userId})
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 control-label">
                  담당 간병인 연락처
                </label>
                <div className="col-sm-9">{caregiver.user.phone}</div>
              </div>
            </Panel>
          )}
          <Panel panelHeadingTit="보호자 정보">
            <div className="form-group row">
              <label className="col-sm-3 control-label">보호자 성함</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.protectorName}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">연락처</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.protectorPhone}
              </div>
            </div>
          </Panel>
          <Panel panelHeadingTit="환자 기본 정보">
            <div className="form-group row">
              <label className="col-sm-3 control-label">성함</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.user.userName}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">연락처</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.user.phone}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">성별</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.user.sex}세
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">나이</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.patientAge}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">몸무게</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.patientWeight}kg
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">장기요양등급</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.nursingGrade}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">간병받으실 주소</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.address +
                  " " +
                  data?.viewAnnouncement?.addressDetail}
              </div>
            </div>
          </Panel>
          <Panel panelHeadingTit="환자 상세 정보">
            <div className="form-group row">
              <label className="col-sm-3 control-label">식사보조</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.needMealCare}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">대소변 케어</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.needUrineCare}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">석션 케어</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.needSuctionCare}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">이동 케어</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.needMoveCare}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">침대 케어</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.needBedCare}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">위생 케어</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.needHygieneCare}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">간병인 식사</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.caregiverMeal}
              </div>
            </div>
          </Panel>
          {data?.viewAnnouncement?.status == 4 && (
            <Center mt="50">
              <Button
                size="54"
                color="danger"
                onClick={() => {
                  setShowAlert(true);
                }}
              >
                입금확인 완료
              </Button>
            </Center>
          )}
          {data?.viewAnnouncement?.status == 5 && (
            <Center mt="50">
              <Button size="54" color="green">
                입금완료
              </Button>
            </Center>
          )}
          {data?.viewAnnouncement?.status != 5 &&
            data?.viewAnnouncement?.status != 4 && (
              <Center mt="50">
                <Button size="54" color="danger" onClick={setIsModal}>
                  예상간병비 산출
                </Button>
              </Center>
            )}
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
          {showAlert && (
            <Alert variant="danger">
              <Alert.Heading>
                해당 공고의 상태를 입금완료로 바꾸시겠습니까?
              </Alert.Heading>
              <p>
                해당 공고를 작성한 환자가 입금을 완료했을 시 확인버튼을
                눌러주세요.
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                  onClick={announcementComplete()}
                  variant="outline-success"
                >
                  확인
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
          <Modal toggle={toggle} isOpen={isModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader toggle={toggle}>예상간병비 산출</ModalHeader>
              <ModalBody>
                <input
                  className="form-control"
                  type="text"
                  autoFocus
                  name="expectedCost"
                  placeholder="예상간병비 산출"
                  ref={register({
                    required: "예상간병비를 입력해주세요.",
                  })}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  type="submit"
                  // onClick={!setIsModal}
                >
                  확인
                </Button>
              </ModalFooter>
            </form>
          </Modal>
        </div>
      )}
    </>
  );
}

export default AnnouncementView;
