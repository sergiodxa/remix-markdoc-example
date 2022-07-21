import { renderers, type RenderableTreeNodes } from "@markdoc/markdoc";
import * as React from "react";
import { Callout } from "./callout";
import { Counter } from "./counter";

type Props = { content: RenderableTreeNodes };

export function Markdown({ content }: Props) {
  return (
    <>{renderers.react(content, React, { components: { Callout, Counter } })}</>
  );
}
