import { format } from 'prettier';
import prettierHTMLPlugin from 'prettier/plugins/html';
import { useCallback, type FormEventHandler } from 'react';
import { useRefFrom } from 'use-ref-from';

import './CodePanel.css';

type Props = {
  name?: string;
  onInput?: (value: string) => void;
  readOnly?: boolean;
  value: string;
};

const CodePanel = ({ name, onInput, readOnly, value }: Props) => {
  const onInputRef = useRefFrom(onInput);
  const valueRef = useRefFrom(value);

  const handleBlur = useCallback(() => {
    (async function () {
      try {
        const { current } = valueRef;
        const formattedValue = await format(current, { parser: 'html', plugins: [prettierHTMLPlugin] });

        formattedValue !== current && onInputRef.current?.(formattedValue);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [onInputRef, valueRef]);

  const handleInput = useCallback<FormEventHandler<HTMLTextAreaElement>>(
    ({ currentTarget: { value } }) => onInputRef.current?.(value),
    [onInputRef]
  );

  return (
    <div className="code-panel">
      <textarea
        autoFocus={true}
        className="code-panel__text-area"
        onBlur={handleBlur}
        onInput={handleInput}
        readOnly={readOnly}
        value={value}
      />
      <div className="code-panel__name">{name}</div>
    </div>
  );
};

export default CodePanel;
