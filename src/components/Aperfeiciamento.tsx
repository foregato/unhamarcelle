import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { WHATSAPP_URL } from "@/lib/constants";
import { aperfeicoamentoCourses } from "@/data/aperfeicoamento";

export default function Aperfeicoamento() {
  return (
    <section id="aperfeicoamento" className="bg-sky/30 py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Evolução"
          title="Cursos de Aperfeiçoamento"
          align="center"
          description="Treinamentos personalizados para quem já atua e quer corrigir, refinar e elevar a técnica."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          {aperfeicoamentoCourses.map((course, index) => (
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
            Saber mais sobre o aperfeiçoamento
          </Button>
        </div>
      </Container>
    </section>
  );
}
