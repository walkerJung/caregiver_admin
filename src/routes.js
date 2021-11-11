// 환자 관리
import PatientList from "views/patient/PatientList";

// 간병인 관리
import CaregiverList from "views/caregiver/CaregiverList";

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
  },
  {
    path: "/caregiverlist",
    name: "간병인 관리",
    icon: "nc-icon nc-single-02",
    component: CaregiverList,
    layout: "/admin",
  },
  {
    path: "/announcementlist",
    name: "공고 관리",
    icon: "nc-icon nc-tile-56",
    component: AnnouncementList,
    layout: "/admin",
  },
  {
    path: "/noticelist",
    name: "공지사항 관리",
    icon: "nc-icon nc-bell-55",
    component: NoticeList,
    layout: "/admin",
  },
];
export default routes;
