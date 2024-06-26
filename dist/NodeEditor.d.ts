import React from "react";
import { CircularBehavior, DefaultNode, FlumeCommentMap, NodeHeaderRenderCallback, NodeMap, NodeTypeMap, PortTypeMap, RichElementMap, StageState } from "./types";
interface NodeEditorProps {
    comments?: FlumeCommentMap;
    appendages?: RichElementMap;
    nodes?: NodeMap;
    nodeTypes: NodeTypeMap;
    portTypes: PortTypeMap;
    defaultNodes?: DefaultNode[];
    context?: any;
    onChange?: (nodes: NodeMap) => void;
    onCommentsChange?: (comments: FlumeCommentMap) => void;
    initialScale?: number;
    initialPan?: {
        x: number;
        y: number;
    };
    onStageChange?: (stageState: StageState) => void;
    spaceToPan?: boolean;
    hideComments?: boolean;
    disableComments?: boolean;
    disableZoom?: boolean;
    disablePan?: boolean;
    circularBehavior?: CircularBehavior;
    renderNodeHeader?: NodeHeaderRenderCallback;
    debug?: boolean;
}
export declare let NodeEditor: React.ForwardRefExoticComponent<NodeEditorProps & React.RefAttributes<unknown>>;
export {};
