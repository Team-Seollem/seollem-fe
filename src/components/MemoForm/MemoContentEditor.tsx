import { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { memoService } from '@apis/index';

type Props = {
  content: string;
  onChange: (content: string) => void;
};

export default function MemoContentEditor({ content, onChange }: Props) {
  const quillRef = useRef<ReactQuill>(null);

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) {
        return;
      }
      const formData = new FormData();
      formData.append('file', file);
      try {
        const imageUrl = await memoService.imageUpload(formData);
        const quill = quillRef.current?.getEditor();
        if (!quill) {
          return;
        }
        const range = quill.getSelection()?.index;
        if (range === undefined) {
          return;
        }

        quill.setSelection(range, 1);
        quill.clipboard.dangerouslyPasteHTML(
          range,
          `<img src=${imageUrl} alt="image" />`
        );
      } catch (error) {
        console.error(error);
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          ['image'],
        ],
        handlers: { image: handleImageUpload },
      },
    }),
    []
  );

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'image',
  ];

  return (
    <>
      <Label htmlFor="memo-content">메모 내용</Label>
      <Editor
        id="memo-content"
        value={content}
        onChange={onChange}
        modules={modules}
        formats={formats}
        ref={quillRef}
      />
    </>
  );
}

const Label = styled.label`
  display: inline-block;
  width: 100%;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: bold;
`;

const Editor = styled(ReactQuill)`
  width: 100%;
  height: 15rem;
  display: inline-block;
  margin-bottom: 5rem;

  .ql-container {
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 200;
  }
  .ql-editor strong {
    font-weight: bold;
  }

  .ql-editor em {
    font-style: italic;
  }
`;
