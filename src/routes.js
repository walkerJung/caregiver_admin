// 환자 관리
import PatientList from "views/patient/PatientList";
import PatientView from "views/patient/PatientView";

// 간병인 관리
import CaregiverList from "views/caregiver/CaregiverList";
import CaregiverView from "views/caregiver/CaregiverView";

// 공고 관리
import AnnouncementList from "views/announcement/AnnouncementList";

// 공지사항 관리
import NoticeList from "views/notice/NoticeList";

var routes = [
  {
    path: "/patientlist",
    name: "환자 관리",
    icon: "nc-icon nc-single-02",
    component: PatientList,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/patientview",
    name: "환자 정보",
    icon: "nc-icon nc-single-02",
    component: PatientView,
    layout: "/admin",
    sidebar: false,
    parentPath: "/patientlist",
    parentName: "환자 관리",
  },
  {
    path: "/caregiverlist",
    name: "간병인 관리",
    icon: "nc-icon nc-single-02",
    component: CaregiverList,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/caregiverview",
    name: "간병인 정보",
    icon: "nc-icon nc-single-02",
    component: CaregiverView,
    layout: "/admin",
    sidebar: false,
    parentPath: "/caregiverlist",
    parentName: "간병인 관리",
  },
  {
    path: "/announcementlist",
    name: "공고 관리",
    icon: "nc-icon nc-tile-56",
    component: AnnouncementList,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/noticelist",
    name: "공지사항 관리",
    icon: "nc-icon nc-bell-55",
    component: NoticeList,
    layout: "/admin",
    sidebar: true,
  },
];
export default routes;
