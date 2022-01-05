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
import { Panel, BoldTxt, Center } from "assets/css/adminStyle";
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
  DELETE_ANNOUNCEMENT_MUTATION,
} from "../../config/Queries";
import { toast } from "react-toastify";
import qs from "qs";
import NumberFormat from "react-number-format";

function AnnouncementView({ match, location }) {
  const [expectedCost, setExpectedCost] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const toggle = () => setIsModal(!isModal);
  const history = useHistory();
  const handleRowClick = (noticeCode) => {
    history.push("/admin/announcements");
  };
  const code = parseInt(match.params.id);
  const queryString = qs.parse(location.search.substr(1));
  const page = queryString.page ? queryString.page : 1;
  const blockSize = 5;
  const take = 10;
  const skip = take * (page - 1);

  const baseUrl = "?";

  const [status, setStatus] = useState(0);
  const { data, loading } = useQuery(ANNOUNCEMENT_DETAIL_QUERY, {
    variables: {
      code,
    },
    pollInterval: 10000,
  });
  const [expectedCostWriteMutation] = useMutation(EXPECTEDCOST_WRITE_QUERY, {
    refetchQueries: () => [
      {
        query: ANNOUNCEMENT_LIST_QUERY,
        variables: {
          status: 0,
          skip: 0,
          take: 10,
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
  const { register, handleSubmit } = useForm();
  const onSubmit = async () => {
    try {
      const {
        data: { result },
      } = await expectedCostWriteMutation({
        variables: {
          code,
          expectedCost: parseInt(expectedCost),
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
    setShowAlert(false);
    toast.success("입금 완료가 완료되었습니다.", {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const [deleteAnnouncement] = useMutation(DELETE_ANNOUNCEMENT_MUTATION, {
    variables: {
      announcementCode: code,
    },
    refetchQueries: () => [
      {
        query: ANNOUNCEMENT_LIST_QUERY,
        variables: {
          status: status ? status : 0,
          skip,
          take,
        },
      },
    ],
  });
  const onDeleteClick = () => {
    deleteAnnouncement();
    toast.success("공고 삭제가 완료되었습니다.", {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
    });
    history.push(`/admin/announcements`);
  };

  const nightsAndDays =
    (new Date(data?.viewAnnouncement?.endDate).getTime() -
      new Date(data?.viewAnnouncement?.startDate).getTime()) /
    (1000 * 60 * 60 * 24);

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
                  시작일: {data?.viewAnnouncement?.startDate}
                  <MdEast /> 종료일: {data?.viewAnnouncement?.endDate}
                  <BoldTxt>
                    ({nightsAndDays - 1}박 {nightsAndDays}일)
                  </BoldTxt>
                </p>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">
                관리자 예상간병비
              </label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.expectedCost ? (
                  <NumberFormat
                    value={data?.viewAnnouncement?.expectedCost}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"원"}
                    renderText={(formattedValue) => formattedValue}
                  />
                ) : (
                  "미입력"
                )}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">환자 희망간병비</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.hopeCost ? (
                  <NumberFormat
                    value={data?.viewAnnouncement?.hopeCost}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"원"}
                    renderText={(formattedValue) => formattedValue}
                  />
                ) : (
                  "미입력"
                )}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">총 입금금액</label>
              <div className="col-sm-9">
                {console.log(data.viewAnnouncement)}
                <NumberFormat
                  value={data?.viewAnnouncement?.confirmCost}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"원"}
                  renderText={(formattedValue) => formattedValue}
                />
              </div>
            </div>
          </Panel>
          {caregiver?.user &&
            (data?.viewAnnouncement?.status === 4 ||
              data?.viewAnnouncement?.status === 5) && (
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
                <div className="form-group row">
                  <label className="col-sm-3 control-label">
                    담당 간병인 간병비
                  </label>
                  <div className="col-sm-9">
                    <NumberFormat
                      value={caregiver.caregiverCost}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={"원"}
                      renderText={(formattedValue) => formattedValue}
                    />
                  </div>
                </div>
              </Panel>
            )}
          {!caregiver?.user &&
            (data?.viewAnnouncement?.status === 4 ||
              data?.viewAnnouncement?.status === 5) && (
              <Panel panelHeadingTit="간병인 정보">
                <div className="form-group row">
                  <label className="col-sm-3 control-label">담당 간병인</label>
                  <div className="col-sm-9">
                    탈퇴한 간병인회원이 간병했던 공고입니다.
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 control-label">
                    담당 간병인 연락처
                  </label>
                  <div className="col-sm-9">
                    탈퇴한 간병인회원이 간병했던 공고입니다.
                  </div>
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
                {data?.viewAnnouncement?.protectorPhone.substr(0, 3) +
                  "-" +
                  data?.viewAnnouncement?.protectorPhone.substr(3, 4) +
                  "-" +
                  data?.viewAnnouncement?.protectorPhone.substr(7, 4)}
              </div>
            </div>
          </Panel>
          <Panel panelHeadingTit="환자 기본 정보">
            <div className="form-group row">
              <label className="col-sm-3 control-label">성함</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.patientName}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">연락처</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.user.phone.substr(0, 3) +
                  "-" +
                  data?.viewAnnouncement?.user.phone.substr(3, 4) +
                  "-" +
                  data?.viewAnnouncement?.user.phone.substr(7, 4)}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">성별</label>
              <div className="col-sm-9">{data?.viewAnnouncement?.user.sex}</div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 control-label">나이</label>
              <div className="col-sm-9">
                {data?.viewAnnouncement?.patientAge}세
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
            data?.viewAnnouncement?.status != 4 &&
            data?.viewAnnouncement?.status != 3 && (
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
            <Col xs="6" sm="6" className="text-right">
              <Button
                onClick={() => {
                  setShowDeleteAlert(true);
                }}
                className="btn btn-white text-danger delete"
              >
                <i className="fas fa-trash"></i>
                삭제
              </Button>
            </Col>
          </Row>
          {showAlert && (
            <Alert variant="danger" className="m-t-20">
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
                  onClick={announcementComplete}
                  variant="outline-success"
                  className="m-r-5 btn-white"
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
          {showDeleteAlert && (
            <Alert variant="danger" className="m-t-20">
              <Alert.Heading>해당 공고를 삭제하시겠습니까?</Alert.Heading>
              <p>
                공고를 삭제할 경우 공고에 지원한 간병인들의 지원내역들도 함께
                삭제됩니다. <br />
                확인 후 삭제를 진행해 주세요.
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                  onClick={onDeleteClick}
                  variant="outline-success"
                  className="m-r-5 btn-white"
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
                <NumberFormat
                  className="form-control"
                  name="expectedCost"
                  placeholder="예상간병비 산출"
                  ref={register({
                    required: "예상간병비를 입력해주세요.",
                  })}
                  thousandSeparator={true}
                  suffix={"원"}
                  onValueChange={(values) => {
                    const { formattedValue, value } = values;
                    setExpectedCost(value);
                  }}
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
