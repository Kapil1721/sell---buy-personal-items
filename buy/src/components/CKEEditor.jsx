// import React, { useMemo, useRef } from 'react';

// import JoditEditor from "jodit-react";

// const EditorComponent = ({ data, onChange }) => {
//   const editor = useRef(null);
//   const options = ['bold', 'italic', 'underline','|', 'ul', 'ol', '|', 'font', 'fontsize', '|', 'outdent', 'indent', 'align', '|', 'hr', '|', 'fullsize', 'brush', '|', 'table', 'link', '|', 'undo', 'redo',];
//   const config = useMemo(
//     () => ({
//       readonly: false,
//       placeholder: '',
//       defaultActionOnPaste: 'insert_as_html',
//       defaultLineHeight: 1.5,
//       enter: 'div',
//       // options that we defined in above step.
//       buttons: options,
//       buttonsMD: options,
//       buttonsSM: options,
//       buttonsXS: options,
//       statusbar: false,
//       sizeLG: 900,
//       sizeMD: 700,
//       sizeSM: 400,
//       toolbarAdaptive: false,
//     }),
//     [],
//   );
//   return (
//     <JoditEditor ref={editor} value={data} config={config} onChange={onChange} />
//   );
// };

// export default EditorComponent;




import React, { useEffect, useRef } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const EditorComponent = ({ data, onChange }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        const editorInstance = editorRef.current;
        
        if (editorInstance) {
            ClassicEditor
                .create(editorInstance, {
                    // CKEditor configuration
                })
                .then(editor => {
                    console.log('Editor initialized successfully:', editor);
                })
                .catch(error => {
                    console.error('Error initializing editor:', error);
                });

            // Optional: Cleanup function
            return () => {
                editorInstance.destroy().then(() => {
                    console.log('Editor destroyed');
                }).catch(error => {
                    console.error('Error destroying editor:', error);
                });
            };
        }
    }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <CKEditor
            editor={ClassicEditor}
            config={{
                // CKEditor config if needed
            }}
            
            data={data}
            onChange={(event, editor) => {
                const newData = editor.getData();
                onChange(newData);
            }}
        />
    );
};

export default EditorComponent;


