const RELEASE_NOTES = [
  {
    ID: 0,
    DATE: "05 Oct. 2025",
    NOTIFY_TILL: "20260126", // YYYYMMDD
    UPDATE_TYPE: "Cumulative Update", // Can be Patch, Security, Minor or Commulative (Major) Update
    VERSION: "v2.0.0",
    CONTENT:
      "We are proud to release the first major update of the G.S.S.S. Mirzewala website! This version introduces important tools for teachers and students, along with design improvements and faster performance.",
    NEW_FEATURES: [
      "Attendance Marker to mark Present, Absent, Leave, and Holiday.",
      "Role-based dashboards for Teachers, Students, and Admins.",
    ],
    IMPROVEMENTS: [
      "Cleaner layouts with better navigation.",
      "Faster page loading and smoother experience.",
    ],
    BUG_FIXES: [],
  },
];

export default RELEASE_NOTES.reverse();
