import Icon, { IconName } from "@/components/Icon";
import { Course } from "@/data/courses";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group rounded-2xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-dark/60 hover:shadow-soft">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-rose/10 text-rose transition-colors duration-300 group-hover:bg-sky group-hover:text-ink">
        <Icon name={course.icon as IconName} className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-lg text-ink">{course.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">
        {course.description}
      </p>
    </div>
  );
}
