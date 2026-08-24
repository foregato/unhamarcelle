"use client";

import { useState } from "react";
import Icon, { IconName } from "@/components/Icon";
import {
  Course,
  COMMON_INCLUDED,
  INVESTMENT_INFO,
} from "@/data/courses";
import { cn } from "@/utils/cn";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group rounded-2xl border border-line bg-paper p-7 transition-all duration-300 hover:border-sky-dark/60 hover:shadow-soft">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-rose/10 text-rose transition-colors duration-300 group-hover:bg-sky group-hover:text-ink">
        <Icon name={course.icon as IconName} className="h-5 w-5" />
      </div>

      <h3 className="mt-5 font-display text-lg text-ink">{course.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-mist">
        {course.indicatedFor}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        <p className="text-base font-semibold text-rose">{course.price}</p>
        <span className="text-xs font-mono uppercase tracking-wide text-mist">
          {course.duration}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 flex w-full items-center justify-between rounded-xl border border-line px-4 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-sky-dark/60 hover:bg-sky/40"
      >
        <span>{open ? "Fechar detalhes" : "Mais Detalhes"}</span>
        <Icon
          name="arrow"
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-300",
            open ? "-rotate-90" : "rotate-90"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-6 border-t border-line pt-6">
            <div>
              <h4 className="font-display text-sm uppercase tracking-wide text-rose">
                Indicado para
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                {course.indicatedFor}
              </p>
            </div>

            {course.sections.map((section) => (
              <div key={section.title}>
                <h4 className="font-display text-sm uppercase tracking-wide text-rose">
                  {section.title}
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-mist"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {course.bonus && course.bonus.length > 0 && (
              <div className="rounded-xl bg-sky/40 p-4">
                <h4 className="font-display text-sm uppercase tracking-wide text-ink">
                  Bônus
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {course.bonus.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-ink/80"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="font-display text-sm uppercase tracking-wide text-rose">
                O que está incluso
              </h4>
              <ul className="mt-2 space-y-1.5">
                {COMMON_INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-mist"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-ink/[0.03] p-4">
              <h4 className="font-display text-base text-ink">
                {INVESTMENT_INFO.title}
              </h4>

              <p className="mt-3 text-sm font-semibold text-ink">
                {INVESTMENT_INFO.paymentTitle}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-mist">
                {INVESTMENT_INFO.paymentText}
              </p>

              <p className="mt-4 text-sm font-semibold text-ink">
                {INVESTMENT_INFO.scheduleTitle}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-mist">
                {INVESTMENT_INFO.scheduleText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
