import React from "react";
import { NumberInput, Textarea } from "@mantine/core";
import { RecalculateStageRectContext } from "../../context";

interface TextInputProps {
  placeholder?: string;
  updateNodeConnections: () => void;
  onChange: (value: string | number) => void;
  data: string | number;
  step?: number;
  type?: "number" | "text";
}

export function TextInput({
  placeholder,
  updateNodeConnections,
  onChange,
  data,
  step,
  type
}: TextInputProps) {
  const recalculateStageRect = React.useContext(RecalculateStageRectContext);

  const handlePossibleResize = (e: React.MouseEvent) => {
    e.stopPropagation();
    recalculateStageRect?.();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleDragEnd);
  };

  const handleMouseMove = (e: MouseEvent) => {
    e.stopPropagation();
    updateNodeConnections();
  };

  const handleDragEnd = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleDragEnd);
  };

  const commonProps = {
    placeholder,
    onMouseDown: handlePossibleResize,
    onDragStart: (e: React.DragEvent) => e.stopPropagation(),
    w: "100%",
    maw: "100%",
    size: "xs"
  };

  if (type === "number") {
    return (
      <NumberInput
        {...commonProps}
        value={data as number}
        onChange={value => onChange(value || 0)}
        step={step || 1}
        onKeyDown={e => {
          if (e.key === "e" || e.key === "E") {
            e.preventDefault();
          }
        }}
        data-flume-component="text-input-number"
      />
    );
  }

  return (
    <Textarea
      {...commonProps}
      value={data as string}
      onChange={e => onChange(e.target.value)}
      data-flume-component="text-input-textarea"
    />
  );
}

export default TextInput;
