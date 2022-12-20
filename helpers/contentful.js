import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export const options = {
  renderNode: {
    [BLOCKS.HEADING_4]: (node, children) => <h4 className=" heading-styles py-4">{children}</h4>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri}>{children}</a>,
  },
};
