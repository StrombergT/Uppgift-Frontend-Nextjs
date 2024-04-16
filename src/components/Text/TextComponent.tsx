import clsx from "clsx";
import React from "react";

type HtmlTags = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TextProps {
  as: HtmlTags;
  className?: string;
  children: React.ReactNode;
}

function Text({ as: Tag, className, children }: TextProps) {
  return <Tag className={clsx(className)}>{children}</Tag>;
}

export function HeadTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Text
      as="h1"
      className={clsx(
        "max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white",
        className
      )}
    >
      {children}
    </Text>
  );
}

export function Paragraph({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Text
      as="p"
      className={clsx(
        "max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400",
        className
      )}
    >
      {children}
    </Text>
  );
}

export function Blockquote({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="h-30 mx-auto text-gray-600">
      <blockquote className="max-w-screen-md mx-auto">
        <p
          className={clsx(
            "text-xl font-medium md:text-2xl text-white",
            className
          )}
        >
          {children}
        </p>
      </blockquote>
    </div>
  );
}
