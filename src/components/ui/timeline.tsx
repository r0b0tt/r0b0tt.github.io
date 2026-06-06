import * as React from "react";

import { cn } from "~/lib/utils";

const Timeline = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn("relative flex flex-col", className)}
    {...props}
  />
));
Timeline.displayName = "Timeline";

interface TimelineItemProps extends React.HTMLAttributes<HTMLLIElement> {
  active?: boolean;
  isLast?: boolean;
}

const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ className, active = false, isLast = false, children, ...props }, ref) => (
    <li ref={ref} className={cn("relative flex gap-4", className)} {...props}>
      <div className="flex flex-col items-center">
        <TimelineMarker active={active} />
        {!isLast && (
          <div
            aria-hidden="true"
            className={cn(
              "w-px flex-1 bg-border",
              active && "bg-foreground/20"
            )}
          />
        )}
      </div>
      <div className={cn("min-w-0 flex-1", !isLast && "pb-6")}>{children}</div>
    </li>
  )
);
TimelineItem.displayName = "TimelineItem";

interface TimelineMarkerProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

function TimelineMarker({
  active = false,
  className,
  ...props
}: TimelineMarkerProps) {
  return (
    <div
      className={cn(
        "relative mt-1.5 flex size-3 shrink-0 items-center justify-center",
        className
      )}
      aria-hidden="true"
      {...props}
    >
      <div className="absolute size-3 rounded-full bg-muted/80" />
      <div
        className={cn(
          "relative size-1.5 rounded-full",
          active ? "bg-foreground" : "bg-muted-foreground"
        )}
      />
    </div>
  );
}

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-1", className)} {...props} />
));
TimelineContent.displayName = "TimelineContent";

export { Timeline, TimelineContent, TimelineItem, TimelineMarker };
