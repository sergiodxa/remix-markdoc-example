import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Markdown } from "~/components/markdown";
import { parseMarkdown } from "~/services/markdown.server";

export function loader() {
  let content = parseMarkdown(`# Heading 1

This is a **paragraph**.

{% callout type="note" %}This is a callout.{% /callout %}

{% counter initialValue=10 /%}
`);
  return json({ content });
}

export default function Index() {
  let { content } = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>

      <Markdown content={content} />
    </div>
  );
}
