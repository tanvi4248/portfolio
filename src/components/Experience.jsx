import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; // Import specific icon
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div
      id="experience"
      className="px-10 mb-36 md:px-6 md:mb-20 max-[480px]:px-4 max-[480px]:mb-8"
    >
      <h3 className="text-xxl max-[480px]:text-xl text-center main-title font-bold pb-10 max-[480px]:pb-6">
        Experience
      </h3>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(234, 88, 12)" }}
          date="03/2025 - Present"
          iconStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <span className="vertical-timeline-element-maintitle">Treevah</span>
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(234, 88, 12)" }}
          date="10/2020 - 04/2022"
          iconStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <span className="vertical-timeline-element-maintitle">
            Webdigify Solutions
          </span>
          <h3 className="vertical-timeline-element-title">
            Sr. Front End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(234, 88, 12)" }}
          date="06/2020 - 10/2020"
          iconStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <span className="vertical-timeline-element-maintitle">
            Freelance-Canada Private Client
          </span>
          <h3 className="vertical-timeline-element-title">
            Sr. Front End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(234, 88, 12)" }}
          date="12/2015 - 06/2020"
          iconStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <span className="vertical-timeline-element-maintitle">
            Templatetrip
          </span>
          <h3 className="vertical-timeline-element-title">
            Sr. Front End Developer
          </h3>
        </VerticalTimelineElement>

        {/* Add more timeline elements here */}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
