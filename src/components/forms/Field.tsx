import type { ChangeEvent, FocusEvent } from "react";
import styles from "./Field.module.css";

/* ------------------------------------------------------------
   A single, reusable form field.
   Renders either a text input or a textarea based on `type`.
   Handles label, hint, error message and ARIA wiring.
   ------------------------------------------------------------ */

type Props = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;

  type?: string;
  textarea?: boolean;
  rows?: number;

  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  min?: string;
  max?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";

  /** Shown beneath the field when there is no error. */
  hint?: string;
  /** Shown beneath the field, replaces the hint. Sets aria-invalid. */
  error?: string;

  /** Optional extra class on the field wrapper. */
  className?: string;
};

export default function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  textarea = false,
  rows = 4,
  required = false,
  placeholder,
  autoComplete,
  min,
  max,
  inputMode,
  hint,
  error,
  className,
}: Props) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = !error && hint ? `${id}-hint` : undefined;
  const describedBy =
    [errorId, hintId].filter(Boolean).join(" ") || undefined;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChange(e.target.value);

  const handleBlur = (
    _e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onBlur?.();

  const sharedProps = {
    id,
    name: id,
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    required,
    placeholder,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    className: `${styles.control} ${error ? styles.controlError : ""}`,
  };

  return (
    <div className={`${styles.field} ${className ?? ""}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>

      {textarea ? (
        <textarea {...sharedProps} rows={rows} />
      ) : (
        <input
          {...sharedProps}
          type={type}
          min={min}
          max={max}
          inputMode={inputMode}
        />
      )}

      {error ? (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}