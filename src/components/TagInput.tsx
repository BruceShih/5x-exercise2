import { memo } from "react";
import style from "./TagInput.module.css";

type TagInputProps = {
  tags: string[];
  onChange: (tags: string[]) => void;
  isActive: boolean;
};

const TagInput = memo((props: TagInputProps) => {
  return (
    <div className={style.root}>
      <input type="text" className={style.input} />
    </div>
  );
});

export default TagInput;
