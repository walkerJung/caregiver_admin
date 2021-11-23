// 환자 관리
import PatientList from "views/patient/PatientList";
import PatientView from "views/patient/PatientView";

// 간병인 관리
import CaregiverList from "views/caregiver/CaregiverList";
import CaregiverView from "views/caregiver/CaregiverView";

// 공고 관리
import AnnouncementList from "views/announcement/AnnouncementList";
import AnnouncementView from "views/announcement/AnnouncementView";

// 공지사항 관리
import NoticeList from "views/notice/NoticeList";
import NoticeView from "views/notice/NoticeView";
import NoticeWrite from "views/notice/NoticeWrite";
import NoticeEdit from "views/notice/NoticeEdit";

var routes = [
  {
    path: "/patients",
    name: "환자 관리",
    icon: "nc-icon nc-single-02",
    component: PatientList,
    layout: "/admin",
  },
  {
    path: "/patients/:id",
    name: "환자 정보",
    icon: "nc-icon nc-single-02",
    component: PatientView,
    layout: "/admin",
  },
  {
    path: "/caregivers",
    name: "간병인 관리",
    icon: "nc-icon nc-single-02",
    component: CaregiverList,
    layout: "/admin",
  },
  {
    path: "/caregivers/:id",
    name: "간병인 정보",
    icon: "nc-icon nc-single-02",
    component: CaregiverView,
    layout: "/admin",
  },
  {
    path: "/announcements",
    name: "공고 관리",
    icon: "nc-icon nc-tile-56",
    component: AnnouncementList,
    layout: "/admin",
  },
  {
    path: "/announcements/:id",
    name: "공고 정보",
    icon: "nc-icon nc-tile-56",
    component: AnnouncementView,
    layout: "/admin",
  },
  {
    path: "/notices",
    name: "공지사항 관리",
    icon: "nc-icon nc-bell-55",
    component: NoticeList,
    layout: "/admin",
  },
  {
    path: "/notices/:id",
    name: "공지사항 정보",
    icon: "nc-icon nc-bell-55",
    component: NoticeView,
    layout: "/admin",
  },
  {
    path: "/notices/:id/edit",
    name: "공지사항 수정",
    icon: "nc-icon nc-bell-55",
    component: NoticeEdit,
    layout: "/admin",
  },
  {
    path: "/noticewrite",
    name: "공지사항 작성",
    icon: "nc-icon nc-bell-55",
    component: NoticeWrite,
    layout: "/admin",
  },
];

export default routes;
