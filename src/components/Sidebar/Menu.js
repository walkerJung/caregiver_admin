var menus = [
  {
    path: ["/patients", "/patients/:id"],
    name: "환자 관리",
    icon: "nc-icon nc-single-02",
    layout: "/admin",
  },
  {
    path: ["/caregivers", "/caregivers/:id"],
    name: "간병인 관리",
    icon: "nc-icon nc-single-02",
    layout: "/admin",
  },
  {
    path: ["/announcements", "/announcements/:id"],
    name: "공고 관리",
    icon: "nc-icon nc-tile-56",
    layout: "/admin",
  },
  {
    path: ["/notices", "/noticewrite", "/notices/:id"],
    name: "공지사항 관리",
    icon: "nc-icon nc-bell-55",
    layout: "/admin",
  },
];

export default menus;
