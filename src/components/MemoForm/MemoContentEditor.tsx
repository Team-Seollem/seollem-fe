import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    ['image'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'image',
];

type Props = {
  content: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export default function MemoContentEditor({ content, onChange }: Props) {
  return (
    <>
      <Label htmlFor="memo-content">메모 내용</Label>
      <Editor
        id="memo-content"
        value={content}
        onChange={onChange}
        modules={modules}
        formats={formats}
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
