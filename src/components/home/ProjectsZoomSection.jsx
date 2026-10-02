import ZoomSlider from "@/components/ui/zoom-slider";
import { projects } from "@/data/projects";

const sliderData = projects.map((project, index) => ({
  number: String(index + 1).padStart(2, "0"),
  src: project.image,
  title: project.title,
  desc: project.summary,
  href: `/projects/${project.slug}`,
}));

export default function ProjectsZoomSection() {
  return (
    <ZoomSlider
      contained
      titleOffset={112}
      scaleOnHover
      textOnHover={false}
      size={1}
      easeScrollPercentage={100}
      subheading="Open a project"
      sliderData={sliderData}
    />
  );
}
