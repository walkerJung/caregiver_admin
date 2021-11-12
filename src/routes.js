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
    path: ["/patients", "/patients/:id"],
    name: "환자 관리",
    icon: "nc-icon nc-single-02",
    component: PatientList,
    layout: "/admin",
  },
  {
    path: ["/caregivers", "/caregivers/:id"],
    name: "간병인 관리",
    icon: "nc-icon nc-single-02",
    component: CaregiverList,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: ["/announcements", "/announcements/:id"],
    name: "공고 관리",
    icon: "nc-icon nc-tile-56",
    component: AnnouncementList,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: ["/notices", "/notices/:id"],
    name: "공지사항 관리",
    icon: "nc-icon nc-bell-55",
    component: NoticeList,
    layout: "/admin",
    sidebar: true,
  },
];
export default routes;
