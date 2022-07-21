import { parse, transform, type RenderableTreeNodes } from "@markdoc/markdoc";
import { Callout } from "~/components/callout";
import { scheme as counter } from "~/components/counter";

export function parseMarkdown(markdown: string): RenderableTreeNodes {
  return transform(parse(markdown), {
    tags: { callout: Callout.scheme, counter },
  });
}
