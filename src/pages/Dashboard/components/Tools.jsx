// Data
import AllTools from "@/data/Tools";

// Local Components
import ToolCard from "./ToolCard";

function Tools() {
  return (
    <div className="w-full bg-white p-8 rounded-sm flex flex-row items-center justify-between overflow-x-auto gap-8 scroll-smooth">
      {AllTools.map((Tool) => {
        return (
          <ToolCard
            Name={Tool.Name}
            Description={Tool.Description}
            Icon={Tool.Icon}
            Route={Tool.Route}
            key={Tool.Name}
          />
        );
      })}
    </div>
  );
}

export default Tools;
