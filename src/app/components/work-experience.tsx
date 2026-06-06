import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Section } from "~/components/ui/section";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
} from "~/components/ui/timeline";
import type { RESUME_DATA } from "~/data/resume-data";
import type { Highlight } from "~/lib/types";
import { cn } from "~/lib/utils";

type WorkExperience = (typeof RESUME_DATA)["work"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      title={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface WorkHighlightsProps {
  highlights?: readonly Highlight[];
}

function renderHighlightContent(highlight: Highlight) {
  if (typeof highlight === "string") return highlight;

  const { text, links = [] } = highlight;
  if (links.length === 0) return text;

  let parts: React.ReactNode[] = [text];

  for (const { label, href } of links) {
    const nextParts: React.ReactNode[] = [];

    for (const part of parts) {
      if (typeof part !== "string") {
        nextParts.push(part);
        continue;
      }

      const index = part.indexOf(label);
      if (index === -1) {
        nextParts.push(part);
        continue;
      }

      if (index > 0) nextParts.push(part.slice(0, index));
      nextParts.push(
        <a
          key={`${href}-${index}`}
          className="underline"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>,
      );
      if (index + label.length < part.length) {
        nextParts.push(part.slice(index + label.length));
      }
    }

    parts = nextParts;
  }

  return parts;
}

function WorkHighlights({ highlights }: WorkHighlightsProps) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <ul className="list-inside list-disc">
      {highlights.map((highlight, index) => (
        <li
          key={
            typeof highlight === "string" ? highlight : `${highlight.text}-${index}`
          }
        >
          {renderHighlightContent(highlight)}
        </li>
      ))}
    </ul>
  );
}

interface WorkRoleTimelineProps {
  roles: NonNullable<WorkExperience["roles"]>;
}

function WorkRoleTimeline({ roles }: WorkRoleTimelineProps) {
  return (
    <Timeline className="mt-2 print:mt-1">
      {roles.map((role, index) => (
        <TimelineItem
          key={`${role.title}-${role.start}`}
          active={index === 0}
          isLast={index === roles.length - 1}
        >
          <TimelineContent>
            <div className="flex items-start justify-between gap-x-2">
              <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
                {role.title}
              </h4>
              <WorkPeriod start={role.start} end={role.end} />
            </div>
            <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
              {role.description}
              <WorkHighlights highlights={role.highlights} />
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const {
    company,
    link,
    badges,
    title,
    start,
    end,
    description,
    highlights,
    contractVia,
    contractViaLink,
    roles,
  } = work;

  return (
    <Card className="border-none py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            <CompanyLink company={company} link={link} />
            <BadgeList
              className="hidden gap-x-1 sm:inline-flex"
              badges={badges}
            />
          </h3>
          {(!roles || roles.length <= 1) && (
            <WorkPeriod start={start} end={end} />
          )}
        </div>

        {contractVia && (
          <p className="font-mono text-xs text-muted-foreground print:text-[10px]">
            Contract via{" "}
            {contractViaLink ? (
              <a
                className="hover:underline"
                href={contractViaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contractVia}
              </a>
            ) : (
              contractVia
            )}
          </p>
        )}

        {!roles && (
          <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
            {title}
          </h4>
        )}
      </CardHeader>

      <CardContent>
        {roles ? (
          <WorkRoleTimeline roles={roles} />
        ) : (
          <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
            {description}
            <WorkHighlights highlights={highlights} />
          </div>
        )}
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="work-experience">
        Work Experience
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article key={item.company}>
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
