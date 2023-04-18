import { BLOCKS, INLINES } from "@contentful/rich-text-types";

function paragraphClass(node) {
  const className = "max-w-readable mx-auto";
  return className;
}

function headingClass(node) {
  const className = "heading-styles my-4";
  return className;
}

export const offerOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className={paragraphClass(node)}>{children}</p>,
  },
};

export const options = {
  renderNode: {
    [BLOCKS.HEADING_4]: (node, children) => <h4 className={headingClass(node)}>{children}</h4>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className={paragraphClass(node)}>{children}</p>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri}>{children}</a>,
  },
};
