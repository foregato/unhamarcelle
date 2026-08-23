import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { WHATSAPP_URL } from "@/lib/constants";
import { courses } from "@/data/courses";

export default function Courses() {
  return (
    <section id="cursos" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Formação"
          title="Cursos"
          align="center"
          description="Do primeiro passo à especialização, para quem quer atuar com segurança."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="animate-fadeUp"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={<Icon name="whatsapp" className="h-4 w-4" />}
          >
            Saber mais sobre os cursos
          </Button>
        </div>
      </Container>
    </section>
  );
}
