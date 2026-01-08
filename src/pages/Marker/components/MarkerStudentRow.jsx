// Local Components
import MarkStatus from "./MarkStatus";

function MarkerStudentRow({ ID, MI_PIN, avatarUrl, Name, Father, Mark }) {
  function handleMarkAttendence(status) {
    // Creating Entry Object
    const Entry = {
      ID: ID,
      MI_PIN: MI_PIN,
      Name: Name,
      Father: Father,
      Status: status,
    };
    Mark(Entry);
  }
  return (
    <div className="flex flex-row justify-between px-3 py-2 rounded-sm">
      <div className="flex flex-row">
        <img src={avatarUrl} width={40} />
        <div className="flex flex-col items-start justify-start px-3">
          <span className="font-semibold">{Name}</span>
          <span className="font-semibold text-sm text-[#c0c0c0] tracking-wide">
            S/O {Father}
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 border-2 border-white">
        <MarkStatus
          STD_MI_PIN={MI_PIN}
          Text="P"
          Background="bg-green-700"
          Status="Present"
          Mark={handleMarkAttendence}
        />
        <MarkStatus
          STD_MI_PIN={MI_PIN}
          Text="A"
          Background="bg-red-700"
          Status="Absent"
          Mark={handleMarkAttendence}
        />
        <MarkStatus
          STD_MI_PIN={MI_PIN}
          Text="U"
          Background="bg-black"
          Status="Unallocated"
          Mark={handleMarkAttendence}
        />
      </div>
    </div>
  );
}

export default MarkerStudentRow;
