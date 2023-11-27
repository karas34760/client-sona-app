/* eslint-disable no-unused-vars */
import { Box } from '@chakra-ui/react';
import DOMPurify from 'dompurify';
import { convertToHTML } from 'draft-convert';
import { ContentState, EditorState, convertFromHTML } from 'draft-js';
import dynamic from 'next/dynamic';
import React, { ComponentType, useEffect, useState } from 'react';
import { EditorProps } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = dynamic<EditorProps>(
  async () => {
    const mod = await import('react-draft-wysiwyg');
    return { default: mod.Editor as unknown as ComponentType<EditorProps> };
  },
  { ssr: false }
);

interface IProps {
  convertedContent: string | null;
  setConvertedContent: (content: string) => void;
}
const TextEditor = ({ convertedContent, setConvertedContent }: IProps) => {
  /*   const _contentState = ContentState.createFromText('Sample content state');
     const raw = convertToRaw(_contentState);  */
  const [editorState, setEditorState] = useState(() => {
    const blocksFromHTML = convertFromHTML(convertedContent || '');
    const contentState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );

    return EditorState.createWithContent(contentState);
  });
  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);
  function createMarkup(html: string | null) {
    return {
      __html: DOMPurify.sanitize(html || ''),
    };
  }
  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      {/*  <Box dangerouslySetInnerHTML={createMarkup(convertedContent)}></Box> */}
    </>
  );
};

export default TextEditor;
