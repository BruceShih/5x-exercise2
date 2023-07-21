import { memo, useCallback, useEffect, useState } from "react";
import style from "./TagInput.module.css";

type TagInputProps = {
  tags: string[];
  onChange: (tags: string[]) => void;
  // isActive: boolean;
};

const TagInput = memo((props: TagInputProps) => {
  const handleOnChange = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const newTags = [...props.tags, e.currentTarget.value];

        if (newTags.length !== new Set(newTags).size) {
          e.currentTarget.value = "";
          return;
        }

        if (newTags.length > 4) {
          e.currentTarget.value = "";
          return;
        }

        props.onChange(newTags);
        e.currentTarget.value = "";
      }
    },
    [props]
  );

  function tagsElements() {
    return props.tags.map((tag) => {
      return (
        <div key={tag} className={style.tag}>
          {tag}
          <button
            type="button"
            className={style.delete}
            onClick={() => {
              const newTags = props.tags.filter((t) => t !== tag);
              props.onChange(newTags);
            }}
          >
            X
          </button>
        </div>
      );
    });
  }

  return (
    <div className={style.root}>
      {tagsElements()}
      <input
        type="text"
        name="tags"
        className={style.input}
        onKeyDown={handleOnChange}
      />
    </div>
  );
});

export default TagInput;
