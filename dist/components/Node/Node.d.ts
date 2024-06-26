import React, { HTMLProps } from "react";
import { Connections, InputData, NodeHeaderRenderCallback } from "../../types";
interface NodeProps {
    id: string;
    width: number;
    x: number;
    y: number;
    stageRect: React.MutableRefObject<DOMRect | undefined>;
    connections: Connections;
    type: string;
    inputData: InputData;
    onDragStart: () => void;
    renderNodeHeader?: NodeHeaderRenderCallback;
    root?: boolean;
    appendage?: React.ReactNode;
}
declare const Node: ({ id, width, x, y, stageRect, connections, type, inputData, root, onDragStart, renderNodeHeader, appendage }: NodeProps) => JSX.Element;
export declare const NodeHeader: React.FC<HTMLProps<HTMLHeadingElement>>;
export default Node;
